"use client";

import { Hero, Tech, Works, About, Navbar } from "@/components";
import Percentage from "@/components/Percentage";

import { useState } from "react";
import Splash from "@/components/Splash";

export default function Home() {
  const [finished, setIsFinished] = useState(true);

  return finished ? (
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
    <Splash setFisinshed={() => setIsFinished(true)} />
  );
}
