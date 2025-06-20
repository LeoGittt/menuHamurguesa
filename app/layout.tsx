import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Menu',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&family=Sansita+Swashed:wght@300..900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
