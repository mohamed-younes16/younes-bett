"use client"

import { Hero,Tech,Experience,Works,Contact,About, Navbar} from '@/components'
import Percentage from '@/components/Percentage'
import { useEffect, useRef } from 'react'
import { Toaster } from 'sonner'


export default function Home() {
 const ref = useRef(null)

useEffect(() => {
const handleMouse = (e)=>{
ref.current.style.backgroundImage=`radial-gradient(400px at  ${e.clientX}px  ${e.clientY}px ,rgb(63 63 69 / 0%) , black 60% )`
}
if(window) {
  window?.addEventListener("pointermove",handleMouse)
} 

}, [])


 

  return (
    <main  suppressHydrationWarning className=" bg-[url(/grid.svg)] relative  min-h-screen  ">
<div ref={ref } className=' max-lg:!bg-none transition-all duration-500 fixed inset-0' ></div>
      <Toaster richColors position='top-center'/>
        <div  id="main"className=" main z-0 relative overflow-x-hidden pb-4">
      <div className="hero bg-cover transition-all  bg-no-repeat bg-center 
        relative w-full  max-md:min-h-[70dvh]     ">
        <Percentage/>
        <Navbar/>
          <Hero/>
      </div>
           <About/>
          <Works/>
         <Tech/>
          <Experience/> 
      
          <div className="relative border-t border-gray-500 mt-12">
            <Contact/>
            
          </div>
   </div>
        
    </main>
  )
}
