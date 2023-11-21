import { motion } from "framer-motion";
import { experiences } from "../constants";
import { fadeIn } from "../utils/motion";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
const Works = () => {
  return (
    <div  className=" mt-16">
      <div  className="text-center">
        <p
          
          className="text-secondary max-md:text-base text-lg"
        >
          {" "}
          WHAT I HAVE LEARNED SO FAR .
        </p>
        <div className=" flex gap-2 justify-center items-end ">
          <p
            
            className="text-5xl max-md:text-4xl font-bold"
          >
            {" "}
            TECH Experiences
          </p>
          <div
            
            className=" h-4 w-4 animate-bg   rounded-full"
          />
        </div>
      </div>

      <div  className="mt-10">
        <VerticalTimeline animate={false}>
          {experiences.map((e, i) => (
            <VerticalTimelineElement
              key={e.title}
              textClassName="p-[1px] w-full transition-all duration-700
       rounded-[2rem] !bg-[linear-gradient(180deg,#1c1c1c,#060606_65.62%)] 
       border-neutral-500 border-[2px] hover:shadow-card hover:scale-105"
              iconStyle={{ backgroundColor: "#151030" }}
              icon={
                <motion.div
                  initial={{ rotateZ: "0turn" }}
                  whileInView={{ rotate: "1turn" }}
                  transition={{ duration: 2.5, type: "spring" }}
                  className=" flex h-full  w-full hover:rotate-180 justify-center items-center"
                >
                  <Image
                    src={e.icon}
                    alt={e.title}
                    className=" w-[80%] h-[80%]  object-contain"
                  />
                </motion.div>
              }
            >
              <motion.div
                variants={fadeIn(
                  i % 2 == 0 ? "left" : "right",
                  "spring",
                  0.55 * i,
                  4
                )}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.8 }}
                className=" p-5"
              >
                <div className=" overflow-hidden">
                  <h3 className="font-bold text-3xl ">{e.title}</h3>
                  <div className="text-secondary">{e.company_name}</div>
                  <ul className=" list-disc px-7">
                    {e.points.map((e) => (
                      <li className="my-2" key={e}>
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Works;
