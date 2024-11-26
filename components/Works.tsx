import { experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
const Works = () => {
  return (
    <div className=" mt-16">
      <div className="text-center">
        <p className=" dark:text-vio-dark  text-vio  max-md:text-base text-lg">
          {" "}
          WHAT I HAVE DONE SO FAR .
        </p>
        <div className=" flex gap-2 justify-center items-end ">
          <p className="text-5xl max-md:text-3xl font-bold">
            {" "}
            TECH Experiences
          </p>
          <div className=" h-4 w-4 animate-bg   rounded-full" />
        </div>
      </div>

      <div className="mt-10 px-4">
        <VerticalTimeline animate={false}>
          {experiences.map((e, i) => (
            <VerticalTimelineElement
              key={e.title}
              textClassName="p-[1px]  transition-all duration-150
       rounded-[2rem]
       border-neutral-500 border-[2px] 
       !bg-[linear-gradient(161deg,hsl(var(--background))_55%,hsl(var(--border))_60%,hsl(var(--background))_65%)]
       
       max-md:max-w-[78dvw] lg:hover:translate-x-2 lg:hover:-translate-y-2"
              iconStyle={{ backgroundColor: "#151030" }}
              icon={
                <div className=" flex h-full  w-full justify-center items-center">
                  <Image
                    src={e.icon}
                    alt={e.title}
                    className=" w-[80%] h-[80%]  object-contain"
                  />
                </div>
              }
            >
              <div className=" p-5 max-md:p-2">
                <div className=" overflow-hidden">
                  <h3 className="font-bold text-3xl max-md:text-xl ">
                    {e.title}
                  </h3>
                  <div className=" dark:text-vio-dark  text-vio ">
                    {e.company_name}
                  </div>
                  <ul className="list-disc pl-7">
                    {e.points.map((e) => (
                      <li className="my-2 max-md:text-sm" key={e}>
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Works;
