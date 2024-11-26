"use client";
import { logo } from "@/assets/index";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ModeToggle } from "./ui/ModeToggle";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav
      className=" fixed top-0  backdrop-blur-lg w-full z-[99] border-b border-zinc-400/30  transition duration-500 p-4 md:px-8
    "
    >
      <div className="container mx-auto">
        <div className="flex top justify-between flex-wrap max-sm:flex-col  items-center">
          <Link
            href={"/"}
            className="link font-bold flex items-center text-base  gap-4 text-accent-foreground/80 "
          >
            <Image src={logo} alt="" className=" h-10 w-8" />
            <p>Younes | Web-Developper </p>
          </Link>
          <div className="flex items-center gap-4">
            <ul className="flex items-center gap-12 max-sm:mt-4 text-xl">
              {navLinks.map((e) => (
                <li
                  key={e.id}
                  className={`text-foreground text-base hover:text-vio 
             hover:scale-105 active:scale-90 transition  cursor-pointer active:text-vio `}
                >
                  <Link onClick={() => router.push(e.link)} href={e.link}>
                    {e.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="max-sm:fixed max-sm:top-1 max-sm:right-1">
              <ModeToggle />
            </div>{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
