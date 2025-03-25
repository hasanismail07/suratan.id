import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Suratan',
  description: 'Solusi undangan digital untuk setiap momen spesial Anda',
  generator: 'Suratan',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpg" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
