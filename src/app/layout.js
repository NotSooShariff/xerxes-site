// import { Inter } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'
 
const myFont = localFont({ src: './bodo-amat.woff2' })

export const metadata = {
  title: 'Xerxes the Xooper',
  description: 'The Enchanted Amphibian Companion owned by Grok',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  )
}
