import { Inter } from "next/font/google";
import "./globals.css";
import "tailwindcss/tailwind.css";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react";
export const metadata = {
  title: "Younes Bett",
  description: "Portfolio of web developper",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning className=" bg-black" lang="en">
      <body className={inter.className}>
        {children} <Analytics /><SpeedInsights /> 
      </body>
    </html>
  );
}
