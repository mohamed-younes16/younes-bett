"use client";
import { Tilt } from "react-tilt";
import { projects } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { github, reactjs } from "@/assets";
import next from "@/assets/next.png";
import { useState } from "react";
import Image from "next/image";

const Experience = () => {
  const [limit, setlimit] = useState(5);
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
      <div className="max-w-7xl mx-auto mt-24 px-6" id="work">
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
        <div className="flex gap-10  mt-10 justify-center flex-wrap">
          {projects.map((e, i) => (
            <div
              data-speed={(0.1 * i).toFixed(1)}
              key={i}
              className={`active:scale-95 transition-all  duration-700 relative ${
                i < limit
                  ? " h-[560px] w-[350px] "
                  : "!h-0 !w-0 overflow-hidden"
              } `}
            >
              <Tilt>
                <div
                  onClick={(ev) =>
                    handlego(
                      ev,
                      e.source_code_link ? e.source_code_link : "#contact"
                    )
                  }
                  target={e.source_code_link ? "_blank" : "_self"}
                  rel="noreferrer"
                >
                  <motion.div
                    variants={fadeIn("left", "spring", 0.1 * i, 2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.4 }}
                    className="w-full  z-30 sm:w-[360px] max-w-[360px]
                         relative transition-all  
                        p-[2px] rounded-3xl shadow-card"
                  >
                    {e.next ? (
                      <Image
                        src={next}
                        alt="next image"
                        className=" h-[60px] w-[60px] absolute 
                                                      object-cover text-4xl text-gray bottom-6 animate-pulse z-0 right-6 "
                      />
                    ) : (
                      <Image
                        src={reactjs}
                        alt="next image"
                        className=" h-[60px] w-[60px] absolute 
                            object-cover text-4xl text-gray bottom-6 animate-pulse z-0 right-6 "
                      />
                    )}
                    <div
                      className={`  w-fit outline-4 outline outline-neutral-700 
                       bg-[url(/blob${Math.ceil(
                        Math.random() * 4
                      )}.svg)] 
                      transition-all duration-500
                  border-neutral-500 border-[2px] shadow-card  z-10 p-5 min-h-[560px]  bg-cover rounded-3xl`}
                    >
                      <div className="rounded-3xl h-[230px] relative overflow-hidden">
                        <div
                          style={{ animationDuration: "3s" }}
                          className="black-gradient animate-spin duration-1000 absolute right-2 top-2 p-2 rounded-full "
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
                      <p className="font-bold my-4">{e.name}</p>
                      <p className="text-secondary">{e.description}</p>
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
              </Tilt>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-7 relative ">
        {projects.length >= limit && (
          <>
            {" "}
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
      </div>
    </>
  );
};

export default Experience;
