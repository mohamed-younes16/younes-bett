"use client";

import { motion } from "framer-motion";
import { services } from "@/constants";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";

const About = () => {
  return (
    <div className="px-6 py-0 max-w-7xl mx-auto mt-10" id="about">
      <p className="  dark:text-vio-dark  text-vio  max-sm:text-base text-lg">
        INTRODUCTION
      </p>

      <h2 className="font-bold text-5xl max-md:text-3xl my-6">Overview</h2>
      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className=" dark:text-vio-dark  text-vio "
      >
        I&apos;m a web developer with experience in TypeScript and JavaScript,
        and expertise in frameworks like React-JS , and Next-JS. I&apos;m a
        quick learner and collaborate closely with clients to create efficient,
        scalable, and user-friendly web apps. Let&apos;s work together to bring
        your ideas to life!
      </motion.p>

      <div className="flex flex-wrap  gap-11 mt-12  justify-center">
        {services.map((e, i) => (
          <motion.div key={i} className="cursor-pointer ">
            <motion.div
              initial={{
                opacity: 0,
                x: `${i < services.length / 2 ? "100px" : "-100px"}`,
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
              className=" p-[1px] w-fit outline-4 outline outline-card-foreground/70 
                   rounded-2xl bg-card
                    border-card-foreground/50  border-[2px] shadow-card"
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
                <p className="font-semibold text-xl max-md:text-base">
                  {e.title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
