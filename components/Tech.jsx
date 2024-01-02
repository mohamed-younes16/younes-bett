"use client";
import { technologies } from "@/constants";
import { BallCanvas } from "./canvas";
import { useMediaQuery } from "@uidotdev/usehooks";

const Tech = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  return (
    <div className=" max-w-5xl px-3 mx-auto tech ">
      <div className="flex gap-12 max-md:gap-20 justify-center flex-wrap">
        {technologies.slice(0, isSmallDevice?7:technologies.length).map((e) => {
          return (
            <div
              className="w-24  transition-all 
      grayscale hover:grayscale-0 target:grayscale-0 active:grayscale-0 duration-300 h-24"
              key={e.name}
            >
              <BallCanvas icon={e.icon} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tech;
