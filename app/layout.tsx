import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DigitalCraft - Digital Transformation & Technology Consulting',
  description: 'Leading consulting firm specializing in digital transformation, web development, mobile apps, and strategic technology solutions. Transform your business with DigitalCraft.',
  keywords: 'digital consulting, web development, mobile apps, technology consulting, digital transformation, SEO, cloud solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
