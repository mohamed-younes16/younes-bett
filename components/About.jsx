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
    <div className="px-6 py-0 max-w-7xl mx-auto mt-10" id="about">
      <p className=" text-secondary max-sm:text-base text-lg">INTRODUCTION</p>

      <h2 className="font-bold text-5xl max-md:text-3xl my-6">Overview</h2>
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

      <div className="flex flex-wrap  gap-11 mt-12  justify-center">
        {services.map((e, i) => (
          <motion.div
        
            key={i}
            className="cursor-pointer "
          >
            <motion.div
      
              initial={{
              
                opacity: 0,
                x: `${
                  window &&
                  (i < services.length / 2 ? "100px" : "-100px")
                }`,
              }}
              whileInView={{
              
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
                   rounded-2xl bg-[linear-gradient(180deg,#1c1c1c,#060606_65.62%)]
                    border-neutral-500 border-[2px] shadow-card"
            >
              <div
                className="rounded-[2rem] flex justify-center items-center 
              flex-col gap-8 p-6 w-[190px] max-md:!w-[130px] max-md:h-[160px]  h-[220px]  text-center"
              >
                <Image
                  src={e.icon}
                  alt={`${e.title} icon`}
                  className=" w-12 h-12"
                />
                <p className="font-semibold text-xl max-md:text-base">{e.title}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
