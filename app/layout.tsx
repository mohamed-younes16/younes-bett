import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import GlassMove from "@/components/GlassMove";
import { Toaster } from "sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Younes Bett",
  description: "Portfolio of web developper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} dark:bg-black bg-accent ${geistMono.variable} antialiased`}
      >
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          
        >
          {/* <Analytics /> */}
          <GlassMove />

          <main id="main" className=" bg-[url(/grid.svg)] lg:pt-[75px]  min-h-screen  ">
            <Toaster richColors position="top-center" />

            <div>{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
