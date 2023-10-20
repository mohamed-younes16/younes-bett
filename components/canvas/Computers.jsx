"use client"
import {  Player } from "@lottiefiles/react-lottie-player";
import phone from "@/assets/phone.json"




const ComputersCanvas = () => {
 
  
  return (

    <div className="max-w-[600px]">
      <Player hover  loop={false} src={phone}    />

    </div>


    
    
  )
};

export default ComputersCanvas;