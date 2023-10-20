"use client"
import { technologies } from "@/constants"
import { BallCanvas } from "./canvas"


const Tech = () => {
  return (
    <div className=" max-w-7xl mx-auto tech mt-28">
      
      <div className="flex gap-6 max-md:gap-20 justify-center flex-wrap">
      
        {technologies.slice(0,7).map(e=>{

      return <div className="w-28 h-28" key={e.name}>
              <BallCanvas icon={e.icon}/>

          </div>}
         
        )}
        
    

      </div>
    </div>
  )
}

export default Tech