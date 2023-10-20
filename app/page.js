"use client"
import { Hero,Tech,Experience,Works,Contact,About, Navbar} from '@/components'
import Percentage from '@/components/Percentage'

export default function Home() {
  return (
    <main className=" min-h-screen ">
        <div id="main"className=" main z-0 relative overflow-x-hidden pb-4">
      <div className="hero bg-cover bg-primary bg-no-repeat bg-center   relative w-full  max-md:min-h-[105dvh]   min-h-[120dvh]  ">
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
