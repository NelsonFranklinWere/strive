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
        send_page_view: true,
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure',
        // Enhanced measurement
        allow_google_signals: true,
        allow_ad_personalization_signals: true,
        // Custom dimensions
        custom_map: {
          dimension1: 'user_type',
          dimension2: 'engagement_level',
        },
      })
      
      // Set user properties
      gtag('set', {
        user_properties: {
          user_type: 'visitor',
          location: 'Nairobi, Kenya',
        },
      })
    }

    return () => {
      document.head.removeChild(script1)
    }
  }, [pathname, GA_MEASUREMENT_ID])

  // Track page views on route change with enhanced data
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      startedAtRef.current = Date.now()
      const pageTitle = document.title
      const pageDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || ''
      
      ;(window as any).gtag('event', 'page_view', {
        page_path: pathname,
        page_title: pageTitle,
        page_location: window.location.href,
        page_referrer: document.referrer || 'direct',
        content_group1: pathname.split('/')[1] || 'home',
        content_group2: pathname,
      })
      
      // Track page load performance
      if ('performance' in window && 'timing' in window.performance) {
        const perfData = window.performance.timing
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart
        const domContentLoaded = perfData.domContentLoadedEventEnd - perfData.navigationStart
        
        if ((window as any).gtag && pageLoadTime > 0) {
          ;(window as any).gtag('event', 'page_load_time', {
            page_path: pathname,
            load_time: pageLoadTime,
            dom_content_loaded: domContentLoaded,
          })
        }
      }
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

  // Time on page heartbeat (every 30s) with detailed tracking
  useEffect(() => {
    const interval = setInterval(() => {
      if (!(window as any).gtag) return
      const started = startedAtRef.current || Date.now()
      const elapsed = Math.round((Date.now() - started) / 1000)
      
      // Calculate engagement score (0-100)
      const timeScore = Math.min(10, Math.floor(elapsed / 6)) // Max 10 points for time
      const scrollScore = Math.min(5, Math.floor(maxScrollRef.current / 20)) // Max 5 points for scroll
      const clickScore = Math.min(5, Math.floor(clickCountRef.current / 2)) // Max 5 points for clicks
      const engagementScore = timeScore + scrollScore + clickScore
      
      ;(window as any).gtag('event', 'engagement_heartbeat', {
        seconds_elapsed: elapsed,
        max_scroll: maxScrollRef.current,
        clicks: clickCountRef.current,
        engagement_score: engagementScore,
        page_path: pathname,
        page_title: document.title,
      })
    }, 30000)
    return () => clearInterval(interval)
  }, [pathname])

  // Track time on page when user leaves
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (!(window as any).gtag) return
      const started = startedAtRef.current || Date.now()
      const timeOnPage = Math.round((Date.now() - started) / 1000)
      
      ;(window as any).gtag('event', 'page_exit', {
        time_on_page: timeOnPage,
        max_scroll: maxScrollRef.current,
        total_clicks: clickCountRef.current,
        page_path: pathname,
      })
    }
    
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [pathname])

  // Track page visibility (tab switching)
  useEffect(() => {
    let hiddenTime = 0
    let visibilityStart = Date.now()
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        hiddenTime = Date.now()
      } else {
        const timeHidden = hiddenTime ? Math.round((Date.now() - hiddenTime) / 1000) : 0
        if ((window as any).gtag && timeHidden > 0) {
          ;(window as any).gtag('event', 'page_visible', {
            time_hidden: timeHidden,
            page_path: pathname,
          })
        }
        visibilityStart = Date.now()
      }
    }
    
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [pathname])

  // Track form interactions
  useEffect(() => {
    const handleFocus = (e: FocusEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
        if ((window as any).gtag) {
          ;(window as any).gtag('event', 'form_interaction', {
            form_field: target.tagName.toLowerCase(),
            form_id: (target as HTMLInputElement).id || 'unknown',
            page_path: pathname,
          })
        }
      }
    }
    
    document.addEventListener('focus', handleFocus, true)
    return () => document.removeEventListener('focus', handleFocus, true)
  }, [pathname])

  // Track CTA button clicks specifically with enhanced tracking
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      const button = target.closest('button')
      
      // Track all important links
      if (link && (window as any).gtag) {
        const href = link.getAttribute('href') || ''
        const linkText = link.textContent?.trim() || ''
        
        // Track internal vs external links
        if (href.startsWith('/')) {
          ;(window as any).gtag('event', 'internal_link_click', {
            link_url: href,
            link_text: linkText,
            page_path: pathname,
          })
        } else if (href.startsWith('http')) {
          ;(window as any).gtag('event', 'external_link_click', {
            link_url: href,
            link_text: linkText,
            page_path: pathname,
          })
        }
        
        // Track CTA specifically
        if (href.includes('/products') || href.includes('/contact') || linkText.toLowerCase().includes('get started') || linkText.toLowerCase().includes('contact')) {
          ;(window as any).gtag('event', 'cta_click', {
            cta_text: linkText,
            cta_location: pathname,
            cta_url: href,
            page_path: pathname,
          })
        }
      }
      
      // Track button clicks
      if (button && (window as any).gtag) {
        const buttonText = button.textContent?.trim() || ''
        if (buttonText) {
          ;(window as any).gtag('event', 'button_click', {
            button_text: buttonText,
            button_id: button.id || 'unknown',
            page_path: pathname,
          })
        }
      }
    }
    
    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [pathname])
  
  // Track video interactions
  useEffect(() => {
    const videos = document.querySelectorAll('video')
    videos.forEach((video) => {
      const handlePlay = () => {
        if ((window as any).gtag) {
          ;(window as any).gtag('event', 'video_play', {
            video_title: video.getAttribute('title') || 'unknown',
            video_url: video.currentSrc || 'unknown',
            page_path: pathname,
          })
        }
      }
      
      const handlePause = () => {
        if ((window as any).gtag) {
          ;(window as any).gtag('event', 'video_pause', {
            video_title: video.getAttribute('title') || 'unknown',
            video_url: video.currentSrc || 'unknown',
            page_path: pathname,
          })
        }
      }
      
      video.addEventListener('play', handlePlay)
      video.addEventListener('pause', handlePause)
      
      return () => {
        video.removeEventListener('play', handlePlay)
        video.removeEventListener('pause', handlePause)
      }
    })
  }, [pathname])

  return null
}

