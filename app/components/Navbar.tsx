"use client";
import Link from "next/link";
import { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import ThemeToggle from "./ThemeToggle";
import AIChatButton from "./AIChatButton";
import { MotionDiv } from "./motion/MotionDiv";

export function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-[#121418] z-20 sticky top-0 w-full">
      <div className="hidden md:flex items-center justify-center bg-[#1f0833ff] text-white p-6 px-20 rounded-md border-solid border border-violet-950">
        <div className="text-lg font-semibold">#AJITHDEV</div>
        <div className="flex gap-10 px-20 max-lg:px-14 ">
          <Link href="/">
            <div className="font-semibold">Home</div>
          </Link>
          <Link href="#project">
            <div className="font-semibold">Projects</div>
          </Link>
          <Link href="#skills">
            <div className="font-semibold">Skills</div>
          </Link>
        </div>
        <a href="#contact">
          <div className="bg-[#370858] rounded-full md:px-10 md:py-3 max-lg:text-sm">
            Connect Me
          </div>
        </a>
        {/* <div className="flex items-center gap-4 ml-4">
          <AIChatButton />
          <ThemeToggle />
        </div> */}
      </div>
      <div className="flex relative">
        <div
          onClick={() => setShow(!show)}
          className="block p-4 cursor-pointer md:hidden"
        >
          {show ? (
            <FaXmark className="text-white w-10 h-10" />
          ) : (
            <IoReorderThreeOutline className="text-white w-10 h-10" />
          )}
        </div>
        <div className="font-bold text-xl text-white justify-start my-auto   block md:hidden">
          AJITHDEV C
        </div>
      </div>
      {show && (
        <div
          onClick={() => setShow(!show)}
          className="h-30  bg-white text-blue-500 p-2 rounded-md absolute right-10 top-4 flex gap-3"
        >
          <Link href="/">
            <div className="font-semibold">Home</div>
          </Link>
          <Link href="#project">
            <div className="font-semibold">Projects</div>
          </Link>
          <Link href="#skills">
            <div className="font-semibold">Skills</div>
          </Link>
        </div>
      )}
    </div>
  );
}
