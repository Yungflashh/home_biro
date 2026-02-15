import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Explore HomeBiro Services | The all in One Tennant Concierge app',
  description: 'Skip the agent and hunting chaos. Homebiro handles your searches, inspections, and neighbourhood tours.',
  keywords: 'tenant concierge, real estate, apartment hunting, house hunting, rental service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
