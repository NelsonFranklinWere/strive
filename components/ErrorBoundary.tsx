'use client'

import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(errorProps: Error): State {
    return { hasError: true, error: errorProps }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="fixed bottom-4 left-4 bg-red-500 text-white p-4 rounded-lg shadow-lg z-50 max-w-md">
          <p className="font-semibold">Something went wrong</p>
          <p className="text-sm mt-1">{this.state.error?.message}</p>
          <button
            onClick={() => this.setState({ hasError: false, error: undefined })}
            className="mt-2 text-sm underline"
          >
            Dismiss
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

