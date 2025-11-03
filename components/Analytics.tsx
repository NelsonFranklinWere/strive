'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

// Extend Window interface for Google Analytics
declare global {
  interface Window {
    dataLayer: any[]
    gtag?: (...args: any[]) => void
  }
}

function setCookie(name: string, value: string, days = 365) {
  const d = new Date()
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/;SameSite=Lax`
}

function getCookie(name: string) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  return match ? match[2] : null
}

export default function Analytics() {
  const pathname = usePathname()
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const clickCountRef = useRef(0)
  const maxScrollRef = useRef(0)
  const startedAtRef = useRef<number | null>(null)

  useEffect(() => {
    // Anonymous user id (first-party)
    let sgid = getCookie('sgid') || (typeof window !== 'undefined' ? localStorage.getItem('sgid') : null)
    if (!sgid) {
      sgid = Math.random().toString(36).slice(2) + Date.now().toString(36)
      if (typeof window !== 'undefined') localStorage.setItem('sgid', sgid)
      setCookie('sgid', sgid)
    }

    if (!GA_MEASUREMENT_ID) return

    // Load Google Analytics
    const script1 = document.createElement('script')
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    script1.async = true
    document.head.appendChild(script1)

    // Initialize gtag
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      const gtag = (...args: any[]) => {
        window.dataLayer.push(args)
      }
      window.gtag = gtag
      
      gtag('js', new Date())
      gtag('config', GA_MEASUREMENT_ID, {
        page_path: pathname,
        user_id: sgid,
      })
    }

    return () => {
      document.head.removeChild(script1)
    }
  }, [pathname, GA_MEASUREMENT_ID])

  // Track page views on route change
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      startedAtRef.current = Date.now()
      ;(window as any).gtag('event', 'page_view', {
        page_path: pathname,
        page_title: document.title,
      })
    }
  }, [pathname])

  // Click tracking
  useEffect(() => {
    const onClick = () => {
      clickCountRef.current += 1
      if ((window as any).gtag && clickCountRef.current % 10 === 0) {
        ;(window as any).gtag('event', 'click_count', {
          total_clicks: clickCountRef.current,
          page_path: pathname,
        })
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [pathname])

  // Scroll depth milestones
  useEffect(() => {
    const milestones = new Set<number>()
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) return
      const scrolled = Math.round((window.scrollY / docHeight) * 100)
      maxScrollRef.current = Math.max(maxScrollRef.current, scrolled)
      const marks = [25, 50, 75, 90, 100]
      for (const m of marks) {
        if (scrolled >= m && !milestones.has(m)) {
          milestones.add(m)
          if ((window as any).gtag) {
            ;(window as any).gtag('event', 'scroll_depth', {
              depth_percentage: m,
              page_path: pathname,
            })
          }
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  // Time on page heartbeat (every 30s)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!(window as any).gtag) return
      const started = startedAtRef.current || Date.now()
      const elapsed = Math.round((Date.now() - started) / 1000)
      ;(window as any).gtag('event', 'engagement_heartbeat', {
        seconds_elapsed: elapsed,
        max_scroll: maxScrollRef.current,
        clicks: clickCountRef.current,
        page_path: pathname,
      })
    }, 30000)
    return () => clearInterval(interval)
  }, [pathname])

  return null
}

