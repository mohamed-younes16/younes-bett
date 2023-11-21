"use client";

/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";
import { services } from "@/constants";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
const About = () => {
  const [windowobj, setWindow] = useState(null);
  
  useEffect(() => {
    setWindow(true);
  }, []);

  if (!windowobj) return <></>;



  return (
    <div className="px-6 max-w-7xl mx-auto mt-40" id="about">
      <p className=" text-secondary text-lg">INTRODUCTION</p>

      <h2 className="font-bold text-5xl my-6">Overview</h2>
      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="text-secondary"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React , and NextJS. I'm a
        quick learner and collaborate closely with clients to create efficient,
        scalable, and user-friendly solutions that solve real-world problems.
        Let's work together to bring your ideas to life!
      </motion.p>

      <div className="flex flex-wrap  gap-11 mt-36  justify-center">
        {services.map((e, i) => (
          <div
            key={i}
            className="  transition-all  hover:scale-105 active:scale-90 "
          >
            <motion.div
              drag
              initial={{
                translateY: ` 20px `,
                opacity: 0,
                x: `${
                  window &&
                  window?.innerWidth > 600 &&
                  (i < services.length / 2 ? "200px" : "-200px")
                }`,
              }}
              whileInView={{
                translateY: `${
                  window &&
                  window?.innerWidth > 600 &&
                  (i % 2 == 0 ? "60px" : "-60px")
                } `,
                opacity: 1,
                x: "0px",
              }}
              transition={{
                delay: 0.6 * i,
                ease: "easeOut",
                duration: 2,
                type: "spring",
              }}
              viewport={{ once: true }}
              className=" p-[1px] w-fit outline-4 outline outline-neutral-700 
                   rounded-[2rem] bg-[linear-gradient(180deg,#1c1c1c,#060606_65.62%)] border-neutral-500 border-[2px] shadow-card"
            >
              <div className=" rounded-[2rem] flex justify-center items-center flex-col gap-8 p-12 w-[15rem] h-[280px]  text-center">
                <Image
                  src={e.icon}
                  alt={`${e.title} icon`}
                  className=" w-16 h-16"
                />
                <p className="font-bold text-xl">{e.title}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
