"use client";

import Spline from "@splinetool/react-spline";
import Image from "next/image";
import wave from "@/assets/wave.svg"
const Hero = () => {
  return (
    <section
      className=" p-0 relative flex flex-col items-center 
      w-full  "
    >
      <Spline
        className="fixed max-lg:hidden -z-[1] inset-0"
        scene="https://prod.spline.design/QGTAg3FPRbtiP4Pz/scene.splinecode"
      />
      <Image
        src={wave}
        height={200}
        width={200}
        alt=""
        className="fixed h-fit lg:hidden bg-cover w-full -z-[1] top-[10%]"
      />
          <Image
        src={wave}
        height={200}
        width={200}
        alt=""
        className="fixed h-fit lg:hidden bg-cover w-full -z-[1] bottom-[5%]"
      />
      <div className="max-w-7xl px-6 flex gap-6 inset-0 mt-[120px] max-md:top-28   items-start  mx-auto">
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-violet-500 h-5 w-5 mt-8"></div>
          <div className="violet-gradient w-1 h-40 rounded-b-3xl"> </div>
        </div>

        <div className="z-40">
          <h1 className="text-[6rem] max-lg:text-[4.3rem] max-[400px]:text-[35px] max-sm:text-[40px] whitespace-nowrap font-bold my-6">
            Hi , I &rsquo; m <span className="my-name ">Younes</span>
          </h1>
          <p className="text-[2.2rem]  max-sm:text-[1.3rem] max-md:text-[1.5rem] max-w-xl">
            I develop Web-Apps Using ReactJS & Tailwindcss , NextJS ,Zustand,
            Prisma, NodeJS
            <span className="ml-2 animate-bg inline-block h-4 w-4 rounded-full" />
          </p>
        </div>
      </div>

      {/* <div className="absolute z-40 bg-transparent max-md:-bottom-28 -bottom-14 w-full justify-center flex translate-x-[-50%] left-1/2">
        <div
          className="h-24 w-12 
        max-md:h-20 max-md:w-10
        border-4 rounded-full border-white flex justify-center"
        >
          <a href="#about" aria-label="scrol to next section">
            <motion.div
              animate={{ y: [10, 60, 10] }}
              transition={{
                repeat: "infinity",
                repeatType: "loop",
                duration: 2.5,
              }}
              className="h-5 w-5 bg-white   rounded-full"
            ></motion.div>
          </a>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
