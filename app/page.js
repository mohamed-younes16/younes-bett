"use client"

import { Hero,Tech,Experience,Works,Contact,About, Navbar} from '@/components'
import AniGrid from '@/components/AniGrid'
import Percentage from '@/components/Percentage'
import Splash from '@/components/Splash'
import { useState } from 'react'

import { Toaster } from 'sonner'


export default function Home() {
const [loading , setLoading] = useState(true)

 

  return (
    <main   className=" bg-[url(/grid.svg)] relative  min-h-screen  ">


      <Toaster richColors position='top-center'/>

   {  loading ? (

      <Splash setFisinshed={()=>setLoading(false)}/>
     )
     
     
     : ( <>      
   <AniGrid/> 
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
      </>)}

        
    </main>
  )
}
