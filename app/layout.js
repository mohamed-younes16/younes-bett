import { Inter } from "next/font/google";
import "./globals.css";
import "tailwindcss/tailwind.css";
import Script from "next/script";
import PlausibleProvider from "next-plausible";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react";
export const metadata = {
  title: "Younes Bett",
  description: "Portfolio of web developper",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning className=" bg-black" lang="en">
      <Script
        defer
        data-domain="younes-bett.vercel.app"
        src="https://plausible.io/js/script.js"
      />
      <head>
        <PlausibleProvider
          enabled={true}
          domain="younes-bett.vercel.app"
          trackLocalhost={true}
        />
      </head>
      <body className={inter.className}>
        {children} <Analytics />
      </body>
    </html>
  );
}
