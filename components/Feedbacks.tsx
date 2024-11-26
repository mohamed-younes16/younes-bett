"use client";
import { testimonials } from "../constants/index";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import Image from "next/image";

const Feedbacks = () => {
  return (
    <div className="mx-auto max-w-7xl mt-24">
      <div className=" bg-black-100 rounded-3xl pb-10">
        <div className="bg-tertiary  px-12 py-20 rounded-3xl">
          <p className=" dark:text-vio-dark  text-vio  mb-8">WHAT OTHERS SAY</p>

          <div className="font-bold text-6xl max-sm:text-4xl">
            {" "}
            Testimonials.
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 -mt-14 px-12">
          {testimonials.map((e, i) => {
            return (
              <motion.div
                variants={fadeIn(
                  i % 2 == 0 ? "up" : "down",
                  "spring",
                  i * 0.5 + 0.2,
                  0.75
                )}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
                key={e.name}
                className="bg-black-200 max-w-sm rounded-3xl p-12"
              >
                <div className="text-[70px] font-bold  ">&quot;</div>

                <p className=" dark:text-vio-dark  text-vio  mb-7">
                  {e.testimonial}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="flex gap-2">
                      <span className="blue-text-gradient">@</span>
                      <span>{e.name}</span>
                    </p>
                    <p>
                      {e.designation} of {e.company}
                    </p>
                  </div>
                  <Image
                    src={e.image}
                    alt="men picture"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
