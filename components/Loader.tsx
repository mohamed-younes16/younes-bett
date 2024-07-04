import { useProgress ,Html } from "@react-three/drei"



const Loader = () => {
  const {progress} = useProgress()
  
  return (
    
    <Html>
      <span className="canvas-load relative text-2xl
      bg-black  p-3   w-[90px] h-[80px] rounded-full flex items-center 
      justify-center border-8 border-white">{progress.toFixed(1)}
          <div className={`absolute  h-3 violet-gradient top-[-50%]  `} 
          style={{width:`${progress*2}%`}} ></div> 
      </span>
    </Html>
    
  )
}

export default Loader