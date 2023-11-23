"use client"

import { Hero,Tech,Experience,Works,Contact,About, Navbar} from '@/components'
import Percentage from '@/components/Percentage'
import { useEffect, useRef } from 'react'
import { Toaster } from 'sonner'
import Lenis from '@studio-freight/lenis'
import { useMediaQuery } from '@uidotdev/usehooks'


export default function Home() {
 const ref = useRef(null)
 const isBigDevice = useMediaQuery("only screen and (min-width : 768px)");

useEffect(() => { 
 
const handleMouse = (e)=>{
ref.current.style.backgroundImage=`radial-gradient(400px at  ${e.clientX}px  ${e.clientY}px ,rgb(63 63 69 / 0%) 50% , rgb(0 0 0 / 80%) 100% )`
}

if(window && isBigDevice) {
  
  window?.addEventListener("pointermove",handleMouse)

  const lenis = new Lenis({duration:1.5 ,smoothWheel:true,smoothTouch:true})


function raf(time) {

  lenis.raf(time)

  requestAnimationFrame(raf)

}

requestAnimationFrame(raf)

} 

}, [])


 

  return (
    <main   className=" bg-[url(/grid.svg)] relative  min-h-screen  ">
<div ref={ref } className='  max-lg:hidden  transition-all duration-500 fixed inset-0' ></div>
      <Toaster richColors position='top-center'/>
        <div  id="main"className=" main z-0 relative overflow-x-hidden pb-4">
      <div className="hero bg-cover transition-all  bg-no-repeat bg-center 
        relative w-full  max-md:min-h-[50dvh]  p-0    ">
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
