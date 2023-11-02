/* eslint-disable react/no-unescaped-entities */
"use client"
import { motion } from "framer-motion"
import { services } from "@/constants"
import { Tilt } from "react-tilt"
import {fadeIn} from "@/utils/motion"
import Image from "next/image"
const About = () => {
  
  return (
    <div className="px-6 max-w-7xl mx-auto mt-40" id="about" >
      
              <p className=" text-secondary text-lg">INTRODUCTION</p>

            <h2 className="font-bold text-5xl my-6">Overview</h2>
            <motion.p
            variants={fadeIn("","",.2,1)}
            initial="hidden"
            whileInView={"show"}
            
            viewport={{once:true}}
            className="text-secondary">
              I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React , and NextJS. 
              I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems.
              Let's work together to bring your ideas to life!
            
    
            </motion.p>


            <div className="flex flex-wrap  gap-11 mt-20 justify-center">
                {services.map((e,i)=> 
                <Tilt  key={e.title}>
                  <motion.div 
                  initial={{ translate:"-30% 0",opacity:0 }}
                  whileInView={{translate:"0",opacity:1}}
                  transition={{delay:.600 * i , ease:"easeOut",duration:2,type:"spring"}}
                  variants={fadeIn("right", "spring", i * 0.5, 0.75)}
                 
                  viewport={{once:true}}
                  className='w-full green-pink-gradient p-[1px] rounded-[2rem] shadow-card'
                  >
                    <div  options={{scale:1,speed:450,max:45}} 
                      className="bg-tertiary rounded-[2rem] flex justify-center items-center flex-col gap-8 p-12 w-[15rem] h-[280px]  text-center">
                      
                        <Image src={e.icon} alt={`${e.title} icon`} className=" w-16 h-16" />
                        <p className="font-bold text-xl">
                          {e.title}
                        </p>
                      
                    </div>

                  </motion.div>
                  </Tilt>)}
            </div>
  
    </div>
  )
}

export default  About 