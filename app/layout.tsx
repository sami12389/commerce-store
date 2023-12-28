import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'

const inter = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ecommerce Store',
  description: 'Store',
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
