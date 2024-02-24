"use client";

import { Hero, Tech, Works, About, Navbar } from "@/components";
import Percentage from "@/components/Percentage";
import Splash from "@/components/Splash";
import { useStore } from "@/utils/store";

export default function Home() {
 const {isReady} = useStore()

  return isReady ? (
    <>
      {" "}
      <div
        className="hero bg-cover transition-all  duration-100 bg-no-repeat bg-center 
        relative w-full    p-0    "
      >
        <Navbar />
        <Percentage />

        <Hero />
      </div>
      <About />
      <Works />
      <Tech />
    </>
  ) : (
    <Splash  />
  );
}
