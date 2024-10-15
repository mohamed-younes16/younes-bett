import { Titillium_Web } from "next/font/google";
import "./globals.css";
import "tailwindcss/tailwind.css";
const Titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";
import GlassMove from "@/components/GlassMove";
export const metadata = {
  title: "Younes Bett",
  description: "Portfolio of web developper",
};

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      className={`${Titillium.className} bg-black `}
      lang="en"
    >
      <body className="">
      
        <Analytics />
        <GlassMove />

        <main id="main" className=" bg-[url(/grid.svg)]  min-h-screen  ">
          <Toaster richColors position="top-center" />

          <div >{children}</div>
        </main>
      </body>
    </html>
  );
}
