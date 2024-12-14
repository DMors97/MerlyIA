import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from '../components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MerlyIA Chatbot',
  description: 'Un chatbot de inteligencia artificial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

