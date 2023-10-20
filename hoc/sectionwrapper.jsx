import { motion } from "framer-motion"
import { staggerContainer } from "../utils/motion"


export const Sectionwrapper = (El,id) => 

  function wrapper(){
    return(<motion.div
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{once:true,amount:.2}}
  id={id}
    >
      <El/>
    </motion.div>

    )
  }

