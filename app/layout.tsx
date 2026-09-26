import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap', weight: ['400', '500', '600'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://codeqube.io'),
  title: {
    default: 'CodeQube — Engineering-led Digital Transformation & Technology Consulting',
    template: '%s | CodeQube',
  },
  description:
    'CodeQube is a Canadian technology consultancy designing, building and operating enterprise web, mobile, cloud and data platforms. Offices in Brampton, Vancouver and Halifax.',
  keywords: [
    'technology consulting',
    'digital transformation',
    'web application development',
    'mobile app development',
    'cloud engineering',
    'DevOps',
    'data engineering',
    'Canada',
  ],
  openGraph: {
    type: 'website',
    siteName: 'CodeQube',
    title: 'CodeQube — Engineering-led Digital Transformation',
    description: 'We design, build and operate the platforms enterprises run on.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
