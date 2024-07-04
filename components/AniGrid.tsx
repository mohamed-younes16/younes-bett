/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useRef } from "react";
import { useEffect } from "react";
// import Lenis from "@studio-freight/lenis";
import { useMediaQuery } from "react-responsive";

const AniGrid = () => {
  const ref = useRef(null);
  const isBigDevice = useMediaQuery({ minWidth: 700 });

  // useEffect(() => {
  //   const handleMouse = (e) => {
  //     if (ref.current !== null) {
  //       ref.current.style.backgroundImage = `radial-gradient(400px at  ${e.clientX}px  ${e.clientY}px ,rgb(63 63 69 / 0%) 50% , rgb(0 0 0 / 80%) 100% )`;
  //     }
  //   };

  //   if (window && isBigDevice) {
  //     window?.addEventListener("pointermove", handleMouse);

  //     const lenis = new Lenis({
  //       duration: 1.5,
  //       smoothWheel: true,
  //       smoothTouch: true,
  //     });

  //     function raf(time) {
  //       lenis.raf(time);

  //       requestAnimationFrame(raf);
  //     }

  //     requestAnimationFrame(raf);
  //   }
  // }, []);

  return (
    <div
      ref={ref}
      className="  max-lg:hidden  transition-all duration-500 fixed inset-0"
    ></div>
  );
};

export default AniGrid;
