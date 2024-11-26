"use client";

import { useStore } from "@/utils/store";
import anime from "animejs/lib/anime.es.js";

import { useEffect } from "react";

const Splash = () => {
  const { setIsReady } = useStore();
  const animation = () => {
    const loader = anime.timeline({ complete: () => setIsReady(true) });
    loader
      .add({
        opacity: 1,
        targets: "#logo path",
        delay: 0,
        duration: 800,
        easing: "easeInOutQuart",
        strokeDashoffset: [anime.setDashoffset, 0],
      })

      .add({
        targets: "#logo",
        delay: 0,
        duration: 500,
        easing: "easeInOutQuart",

        scale: 1.1,
      })

      .add({
        targets: "#logo text",
        delay: 0,
        duration: 300,
        easing: "easeInOutQuart",
        opacity: 1,
      })
      .add({
        targets: "#logo #B",
        duration: 700,
        easing: "easeInOutQuart",
        opacity: 1,
      });
  };
  useEffect(() => {
    animation();
  }, []);

  return (
    <div
      onClick={() => setIsReady(true)}
      className=" flex flex-col h-screen   bg-[url(/grid.svg)]  justify-center items-center  fixed inset-0 "
    >
      <svg
        id="logo"
        className="  relative  h-32  text-white w-32 "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <title>Loader Logo</title>

        <g>
          <g id="B" transform="translate(11.000000, 5.000000)"></g>
          <path
            className=" shadow-lg bg-transparent shadow-slate-100 opacity-0"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
          />
        </g>
        <text
          x="34"
          y="70"
          fill="currentColor"
          fontSize="55px"
          className=" opacity-0"
          fontFamily="Consolas"
        >
          Y
        </text>
      </svg>
    </div>
  );
};

export default Splash;
