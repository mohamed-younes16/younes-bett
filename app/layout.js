
import { Inter } from 'next/font/google'
import './globals.css'
import 'tailwindcss/tailwind.css'
import Script from 'next/script'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Younes Bett',
  description: 'Portfolio of web developper',
}

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning className=' bg-black' lang="en">
            <Script defer  data-domain="younes-bett.vercel.app" 
      src="https://plausible.io/js/script.js" />

      <body  className={inter.className}>{children}</body>
    </html>
  )
}
