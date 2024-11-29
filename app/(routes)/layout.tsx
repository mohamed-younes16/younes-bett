"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion, Variants } from "framer-motion";

import { useStore } from "@/utils/store";
import SocialContact from "@/components/SocialContact";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  const path = usePathname();
  const { isReady } = useStore();
  const variants: Variants = {
    initial: {
      x: "0%",
      opacity:1, 
    },
    animate: {
      x: "-100%",
      opacity:1 , 
    },
    exit: {
      x: ["100%", "0%"],
      opacity: [0, 1],
    },
  };
  return (
    <>
      {isReady && (
        <>
          <Navbar />
          <div className=" p-0 fixed max-md:hidden z-50 bottom-[0px] left-4  transition-all  duration-100   ">
            <SocialContact />
          </div>
        </>
      )}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          animate={"animate"}
          className="fixed inset-0 
          pointer-events-none z-[999] h-[110vh] w-screen  bg-black"
          key={path}
          variants={variants}
          initial="initial"
          exit={"exit"}
          transition={{
            duration: .5,
            ease: "easeIn",
          }}
        ></motion.div>{" "}
        <motion.div
          exit={{
            scale: 0.9,
          }}
          initial={{
            scale: 0.9,
          }}
          animate={{ scale: 1 }}
          transition={{
            duration: .5,
          }}
        >
          {children}{" "}
        </motion.div>{" "}
      </AnimatePresence>
    </>
  );
}
