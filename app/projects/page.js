"use client";

import { Experience, Contact, Navbar } from "@/components";

import SocialContact from "@/components/SocialContact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Experience />
      <div className=" p-0 md:fixed max-md:hidden z-50 bottom-[0px] left-4  transition-all  duration-100   ">
        <SocialContact />
      </div>
      <div className="relative border-t border-gray-500 my-12">
        <Contact />
      </div>
    </>
  );
}
