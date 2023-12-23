"use client";

import { projects } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { github, reactjs } from "@/assets";
import next from "@/assets/next.png";
import { useState } from "react";
import Image from "next/image";

const Experience = () => {
  const [limit, setlimit] = useState(3);
  const handlego = (e, link) => {
    setTimeout(() => {
      link != "#contact"
        ? window?.open(link, "_blank")
        : document
            ?.getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
    }, 500);
  };
  return (
    <>
      <div className="max-w-7xl px-4 mx-auto mt-12" id="work">
        <motion.p
          variants={textVariant()}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="text-secondary text-lg"
        >
          {" "}
          MY Actuall WORK
        </motion.p>

        <motion.h3
          variants={textVariant(0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="h3 flex items-end  gap-4 font-bold max-md:text-5xl
          max-sm:text-3xl text-7xl  my-8"
        >
          LIVE PROJECTS
          <div
            suppressHydrationWarning
            className=" h-4 w-4 animate-bg   rounded-full"
          />{" "}
        </motion.h3>
        <motion.p className="text-secondary leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of <br className="max-md:hidden" /> my work. Each
          project is briefly described with links to live demos in{" "}
          <br className="max-md:hidden" />
          it. It reflects my ability to solve problems, work with different
          technologies.
        </motion.p>
        <div className="flex gap-8  mt-10 max-md:mt-6 justify-center flex-wrap">
          {projects.map((e, i) => (
            <div
       
              data-speed={(0.1 * i).toFixed(1)}
              key={i}
              className={`active:scale-95  lg:hover:scale-105 transition-all   
                max-lg:w-[320px]  duration-700 relative ${
                i < limit
                  ? " lg:h-[550px] w-[340px]  "
                  : "hidden"
              } `}
            >
        
                <motion.div
                  variants={fadeIn("left", "spring", 0.1 * i, 2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.4 }}
                  className="w-full h-full z-30  relative transition-all 
               
                        p-[2px] rounded-2xl hover:shadow-card"
                >
                  {e.next ? (
                    <Image
                      src={next}
                      alt="next image"
                      className=" h-[60px] w-[60px] z-50 absolute 
                                                      object-cover text-4xl text-gray bottom-6 animate-pulse  right-6 "
                    />
                  ) : (
                    <Image
                      src={reactjs}
                      alt="react image"
                      className=" h-[60px] w-[60px] absolute 
                            object-cover text-4xl text-gray bottom-6 animate-pulse z-50 right-6 "
                    />
                  )}
                  <div
                    className={` h-full w-fit outline-4 outline outline-neutral-700 
                       bg-[url(/blob${Math.ceil(Math.random() * 4)}.svg)] 
                      transition-all duration-500
                  border-neutral-500 border-[2px] hover:shadow-card  z-10 p-3  bg-cover rounded-2xl`}
                  >
                    <div className="rounded-2xl h-[220px] relative overflow-hidden">
                      <div
                           onClick={(ev) =>
                            handlego(
                              ev,
                              e.source_code_link ? e.source_code_link : "#contact"
                            )
                          }
                        style={{ animationDuration: "3s" }}
                        className="black-gradient animate-spin duration-1000 absolute right-2 top-2 p-1 rounded-full "
                      >
                        <Image

                          src={github}
                          className="h-10 w-10"
                          height={50}
                          width={50}
                          alt=""
                        />
                      </div>

                      <Image
                        src={e.image}
                        alt={e.name}
                        className=" object-cover  w-full h-full rounded-3xl"
                        style={{ objectPosition: e.dir }}
                      />
                    </div>  
                    <p className="font-semibold my-4">{e.name}</p>
                    <div className="max-h-[150px] overflow-auto">
                    
                    <p className="text-secondary max-lg:text-[14px] ">{e.description}</p>
                    </div>
                  
                    <div className="flex flex-wrap gap-3 relative z-20  mt-6">
                      {e.tags.map((e) => (
                        <p key={e.name} className={`${e.color} text-red-80`}>
                          #{e.name}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
          
          ))}
        </div>
      </div>
    {projects.length >= limit &&   <div className="flex justify-center mt-7 relative ">

        {projects.length >= limit && (
          <>
            
            <div
              className="inset-x-0   max-lg:w-[100dvw] top-0 -translate-y-2/3  flex justify-center
            py-56  bottom-36 z-50 bg-[#060606] rounded-xl blur-2xl   pointer-events-none  
             absolute"
            ></div>
            <div
              className="inset-x-0   max-lg:w-[100dvw] top-0 -translate-y-2/3  flex justify-center
            py-56 backdrop-blur-lg bottom-36 z-40 rounded-xl   pointer-events-none  
             absolute"
            ></div>{" "}
            <button
              onClick={() => setlimit((s) => s + 3)}
              type="button"
              className="relative
              bg-slate-700 
             focus:ring-2 focus:ring-slate-400 text-base   z-50 2  text-white
              font-semibold h-12 px-6 rounded-lg flex items-center
               pointer-events-auto"
            >
              Show more...
            </button>
          </>
        )}
      </div>}
    </>
  );
};

export default Experience;
