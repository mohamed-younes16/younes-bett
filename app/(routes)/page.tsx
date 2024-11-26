"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import Percentage from "@/components/Percentage";
import Splash from "@/components/Splash";
import Tech from "@/components/Tech";
import Works from "@/components/Works";
import { useStore } from "@/utils/store";
import React from "react";

export default function Home() {
  const { isReady } = useStore();

  return isReady ? (
    <>
      <div
        className="hero pt-[70px] max-md:pt-[115px] bg-cover transition-all  duration-100 bg-no-repeat bg-center 
        relative w-full    p-0    "
      >

        <Percentage />

        <Hero />
      </div>
      <About />
      <Works />
      <Tech />
    </>
  ) : (
    <Splash />
  );
}
