"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Navbar } from "@/components";

export default function RootLayout({ children }) {
  const path = usePathname();
  console.log(path);
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
      <Navbar />{" "}
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
