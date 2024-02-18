"use client";

import {
  Hero,
  Tech,
  Experience,
  Works,
  Contact,
  About,
  Navbar,
} from "@/components";
import Percentage from "@/components/Percentage";
import { Toaster } from "sonner";

import SocialContact from "@/components/SocialContact";

export default function Home() {

  return (
    <main id="main" className=" bg-[url(/grid.svg)] relative  min-h-screen  ">
 
      <Toaster richColors position="top-center" />

      <div id="main" className=" main z-0 relative overflow-x-hidden">
        <div
          className="hero bg-cover transition-all  duration-100 bg-no-repeat bg-center 
        relative w-full    p-0    "
        >
          <Percentage />
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <Tech />
        <Experience />
        <div className=" p-0 md:fixed max-md:hidden z-50 bottom-[0px] left-4  transition-all  duration-100   ">
          <SocialContact />
        </div>

        <div className="relative border-t border-gray-500 mt-12">
          <Contact />
        </div>
      </div>
    </main>
  );
}
