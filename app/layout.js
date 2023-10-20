import { Inter } from 'next/font/google'
import './globals.css'
import 'tailwindcss/tailwind.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Younes Bett',
  description: 'Portfolio of web developper',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
