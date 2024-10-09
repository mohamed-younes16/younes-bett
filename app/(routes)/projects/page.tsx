"use client";

import { Experience, Contact, Navbar } from "@/components";

import SocialContact from "@/components/SocialContact";
import { useStore } from "@/utils/store";
import { useLayoutEffect } from "react";

export default function Home() {
  const store = useStore();
  useLayoutEffect(() => {
   store.setIsReady(true)
  }, [])
  return (
    <>

      <Experience />
   
      <div className="relative border-t  border-gray-500 my-12">
        <Contact />
      </div>
    </>
  );
}
