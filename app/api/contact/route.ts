import { NextResponse } from 'next/server'
import { type ContactFormData } from '@/lib/types'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const RESEND_FROM = process.env.RESEND_FROM || 'StriveGo <onboarding@resend.dev>'
// Temporary test recipient allowed by Resend in test mode
const RESEND_TO = 'nelsonochieng516@gmail.com'

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json()

    if (!RESEND_API_KEY) {
      console.warn('[contact] RESEND_API_KEY is not set; skipping email send. Payload:', data)
      return NextResponse.json(
        { message: 'Message received (email not sent - missing server API key).' },
        { status: 200 }
      )
    }

    const subject = `New Contact: ${data.name || 'Unknown'} — ${data.serviceType || 'General Inquiry'}`
    const html = `
      <div style="font-family: Arial, sans-serif; line-height:1.6;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name || ''}</p>
        <p><strong>Email:</strong> ${data.email || ''}</p>
        <p><strong>Company:</strong> ${data.company || ''}</p>
        <p><strong>Service Interested In:</strong> ${data.serviceType || ''}</p>
        <p><strong>Message:</strong></p>
        <p>${(data.message || '').replace(/\n/g, '<br/>')}</p>
        <hr/>
        <p style="color:#666; font-size:12px;">Sent from StriveGo Website</p>
      </div>
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: [RESEND_TO],
        subject,
        html,
      }),
    })

    if (!res.ok) {
      const errText = await res.text()
      console.error('[contact] Resend send failed:', res.status, errText)
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}

