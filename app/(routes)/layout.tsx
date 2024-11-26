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
      y: "0%",
    },
    animate: {
      y: "-100%",
    },
    exit: {
      y: ["100%", "0%"],
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
          pointer-events-none z-[999] h-[200vh] w-screen rounded-[25%] bg-black"
          key={path}
          variants={variants}
          initial="initial"
          exit={"exit"}
          transition={{
            duration: 1,
            ease: "easeIn",
          }}
        ></motion.div>{" "}
        <motion.div
          exit={{
            scale: 0.8,
          }}
          initial={{
            scale: 0.8,
          }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
          }}
        >
          {children}{" "}
        </motion.div>{" "}
      </AnimatePresence>
    </>
  );
}
