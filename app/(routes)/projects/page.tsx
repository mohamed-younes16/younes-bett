"use client";



import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
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
