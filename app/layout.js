import { Poppins } from "next/font/google";
import "./globals.css";
import "tailwindcss/tailwind.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
import { Analytics } from "@vercel/analytics/react";
export const metadata = {
  title: "Younes Bett",
  description: "Portfolio of web developper",
};

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      className={`${poppins.className} bg-black `}
      lang="en"
    >
      <body>
        <Analytics />
        {children} 
       
      </body>
    </html>
  );
}
