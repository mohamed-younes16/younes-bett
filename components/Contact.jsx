"use client"

import { Sectionwrapper } from "../hoc/sectionwrapper"

import { motion } from "framer-motion"
import { fadeIn, slideIn } from "../utils/motion"
import CanvasEarth from "./canvas/Earth"
import emailjs from "@emailjs/browser"
import {useState} from "react"



const Contact = () => {


  const [loading,setloading]= useState(false)

  const [submitted , setsubbmitted] = useState(false)

  const [inputs , setinputs]= useState({
      name:"",
      email:"",
      feedback:""
    })

 const sented = ()=> {
    setsubbmitted(true)
    setTimeout(() => {
      setsubbmitted(false)
    }, 10000);
  }

  
  const handlechange= e => {
  const {name,value} = e.target
  setinputs(s=>({...s ,[name]: value}))
  }
  const handlesubmit = e=> {
    e.preventDefault()
    setloading(true)
    emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE,
    process.env.NEXT_PUBLIC_TEMPLATE,
    {from_name:inputs.name,
      to_name:"younes",
      from_email:inputs.email,
      form_feedback:inputs.feedback,
      to_email:process.env.NEXT_PUBLIC_TO_EMAIL
    },process.env.NEXT_PUBLIC_KEYOFEMAIL
    
    ).then(()=>{

      sented()

      setloading(false)

      setinputs({
        name:"",
        email:"",
        feedback:""
      })
      
    }).catch(err=>{
      setloading(false)
        alert("something went wrong ")
      console.log(err)
    })
    
  }

  return (

    <div className="max-w-7xl mx-auto  flex-1 mt-20  ">
<div className="flex px-3 relative max-lg:flex-col-reverse  max-lg:items-center ">
  <p className="text-xl absolute hidden max-md:flex text-violet-400 font-semibold top-2 left-1/2 max-sm:text-sm -translate-x-1/2 whitespace-nowrap">grab the planet with two fingers and drag</p>
   <motion.div
       variants={slideIn("left", "tween", 0.2,1)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once:true}}>

       
      
      <div className="flex flex-col p-6 flex-1 min-w-[390px] max-sm:min-w-[250px]  backdrop-blur-md  border border-white  bg-white 
      shadow-inner shadow-white !bg-opacity-10 rounded-3xl ">
          <p className="text-secondary text-2xl">Get In Touch</p>
          <p className="font-bold text-4xl max-sm:text-3xl mt-6 max-md:mb-6 mb-16">Contact</p>

          <form  onSubmit={handlesubmit} className=" flex flex-col">
          
          <motion.div 
           variants={fadeIn("right", "spring",  0.5, 0.75)}
            initial="hidden"
            whileInView={"show"}
                  viewport={{once:true}}>
                <label htmlFor="input-name" className=" font-medium text-lg">your name </label>
                      <input id="input-name" name="name" className="p-4 my-6 rounded-xl w-full bg-black-100 text-xl text-secondary" 
                          placeholder="your name..." onChange={e=> handlechange(e)}/>

          </motion.div>

          <motion.div 
            variants={fadeIn("right", "spring",  1, 1.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:true}}>


                  <label htmlFor="input-name"  className=" font-medium text-lg">your email </label>
                  <input  onChange={e=> handlechange(e)} type="email" name="email" id="email" 
                            className="px-3 py-2 placeholder-slate-400
                            valid:text-green-700
                            focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500
                            invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "  placeholder="you@example.com" />
                  </motion.div>


          
        <motion.div 
            variants={fadeIn("right", "spring",  1.5, 1.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:true}}
            className=" flex flex-col mt-4 "
            >
                        <label htmlFor="input-feedback"  className=" font-medium text-lg">A message  </label>

                            <textarea  onChange={e=> handlechange(e)} id="input-feedback"  
                            name="feedback" className="p-4 w-full  min-h-[200px] my-6 rounded-xl
                             bg-black-100 text-xl text-secondary"
                              placeholder="submit a feedback if you want... " />
                              <button 
                              
                              disabled={loading ||  submitted }

                              className={` ${submitted ? "bg-green-600 animate-pulse":""} 
                              my-6 rounded-xl p-4 hover:text-white 
                               hover:bg-black-200 transition duration-300 border-2 
                               bg-secondary text-black w-fit mx-auto `}
                                type="submit">{loading && !submitted ? "sending....": submitted ?"":"send"}
                                 {!loading && submitted && "submitted succefully"} </button>
                              
        </motion.div>

     
          </form>
      </div>
      </motion.div>

      <motion.div
      variants={slideIn("right", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:true}}
      className=" lg:flex-1 h-[350px] md:h-auto "
      >

        <CanvasEarth/>
      </motion.div>
</div>
     
      
      

    </div>
  )
}

export default Sectionwrapper( Contact,"contact")