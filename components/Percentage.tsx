"use client";
import { useEffect, useState } from "react";
const Percentage = () => {
  const [isfull, setfull] = useState<number>(0);
  useEffect(() => {
    const getper = () => {
      const h = document?.documentElement.scrollHeight - window.innerHeight;
      const dcrol = window?.scrollY;
      setfull(+((dcrol / h) * 100).toFixed());
    };

    window.addEventListener("scroll", getper);
    window.removeEventListener("resize", getper);

    return () => {
      window.removeEventListener("scroll", getper);
      window.removeEventListener("resize", getper);
    };
  }, []);

  return (
    <>
      {" "}
      <div
        style={{ width: `${isfull}%` }}
        className={`h-[2px]  
    duration-150 
       bg-[linear-gradient(to_right,#18CCFC,#AE48FF)]  
        bg-fixed dark:bg-primary-blue-100 fixed z-[999] top-0 left-0`}
      />
    </>
  );
};

export default Percentage;

// import { useEffect, useRef, useState } from 'react'

// const Percentage = () => {
//     const ref = useRef(null)
//     const [isfull , setfull] = useState(0)
// useEffect(() => {

// const radius = 50

// function spin(an) {
//   const toRad = an * (Math.PI / 180)
//   const x = radius * Math.cos(toRad);
//   const y = radius * Math.sin(toRad);

//   ref.current.style.left = (x  + 500)+ "px";
//   ref.current.style.top = (y + 500) + "px";

// }

//     const getper =  ()=>{
//         const h = document.documentElement.scrollHeight - window.innerHeight
//         const dcrol = window.scrollY
//           setfull(((dcrol / h ) * 100).toFixed() )
//         // ref.current.style.width = `${((dcrol / h ) * 100).toFixed() }%`
//         spin(((((dcrol / h ) * 100).toFixed() ) * 360 ) / 100)

//     }

//   window.addEventListener("scroll", getper)
//   window.removeEventListener("resize", getper);

//   return () => {
//     window.removeEventListener("scroll", getper);
//     window.removeEventListener("scroll", getper);
// };
// }, [])

//   return (
//     <div className="bg-red-600 top-[450px] left-[450px]  rounded-full z-50 w-[124px] h-[124px] fixed ">

//     <div ref={ref}  className={`h-1 ${isfull == 100 ? "":""}
//      bg-slate-200 w-6 h-6 bg-primary-blue  dark:bg-primary-blue-100 fixed z-[999] rounded-full `}  />

//     </div>

//   )
// }

// export default Percentage
