import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import localFont from 'next/font/local'
import { SpeedInsights } from '@vercel/speed-insights/next';

const myFont = localFont({ src: './bodo-amat.woff2' })

export const metadata = {
  title: 'Xerxes the Xooper',
  description: 'The Enchanted Amphibian Companion owned by Grok',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children} <Analytics /> <SpeedInsights/></body>
    </html>
  )
}
