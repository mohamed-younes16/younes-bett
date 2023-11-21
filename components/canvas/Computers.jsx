"use client"
// import {  Player } from "@lottiefiles/react-lottie-player";
import phone from "@/assets/phone.json"
import { useState } from "react";




const ComputersCanvas = () => {
 const [re , setren] = useState(false)
  useEffect(() => {
  setren(true)
  }, [])
  
  return (

    <div className="max-w-[600px]">
{/* 
   { re &&     <Player hover  loop={false} src={phone}    />} */}

    </div>


    
    
  )
};

export default ComputersCanvas;