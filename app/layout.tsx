import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Expo Créditos Venezuela',
  description: 'La primera Expo en Venezuela que reúne a las líneas de Créditos y Financiamientos',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/images/logos/page.jpg',
        type: 'image/jpeg',
      },
    ],
    apple: '/images/logos/page.jpg',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.className} overflow-x-hidden`}>
      <body className="antialiased overflow-x-hidden relative" suppressHydrationWarning>
        <div className="flex min-h-screen flex-col w-full max-w-[100vw] overflow-x-hidden">
          {children}
        </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}