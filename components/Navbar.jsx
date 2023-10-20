"use client"
import {logo} from "@/assets/index"
import { navLinks } from "@/constants"
import Image from "next/image"
import {useEffect,  useRef,  } from "react"

const Navbar = () => {
  
  
    const ref = useRef()
    const prevScrollPos = useRef(0);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.scrollY
        

        ref.current.classList.toggle("bg-black", currentScrollPos > prevScrollPos.current);
        ref.current.classList.toggle("bg-tertiary", currentScrollPos < prevScrollPos.current);
  
        prevScrollPos.current = currentScrollPos
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [prevScrollPos]);

      
        


    
  return (
    <nav ref={ref} className=" fixed  w-full z-50  transition duration-500 p-4
    ">

      <div className="container mx-auto">
        <div className="flex top justify-between flex-wrap max-sm:flex-col  items-center">
          <button onClick={ ()=>window.scrollTo(0,0)}   className="link font-bold flex items-center  gap-4 text-white">
            <Image src={logo} alt="" className=" h-10 w-10"  />
            <p>Younes | Web-Developper </p>

          </button>
          <ul className="flex gap-12 max-sm:mt-4 text-xl">
            {navLinks.map(e=>
            <li key={e.id} className= {`text-violet-200 hover:text-white 
             hover:scale-105 active:scale-90 transition  cursor-pointer active:text-white `} >
              
              <p  onClick={()=>document.querySelector(e.id)
                .scrollIntoView({behavior:"smooth"})}
                
                >{e.title}</p></li> )}
            
          </ul>

        </div>
        
      </div>
    </nav>
  )
}

export default Navbar