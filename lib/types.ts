export interface Product {
  id: string
  title: string
  description: string
  shortDescription: string
  category: 'saas' | 'automation' | 'consultancy' | 'ai-agents'
  image: string
  icon: string
  techStack: string[]
  features: string[]
  status: 'live' | 'coming-soon' | 'in-development'
  demoUrl?: string
  impact?: {
    metric: string
    value: string
    description: string
  }
}

export interface Testimonial {
  id: string
  name: string
  company: string
  role?: string
  image: string
  quote: string
  rating: number
  project?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  social: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}

export interface ContactFormData {
  name: string
  email: string
  company: string
  serviceType: string
  message: string
}

export interface NewsletterData {
  email: string
}

export interface Stat {
  value: number
  label: string
  suffix?: string
}

