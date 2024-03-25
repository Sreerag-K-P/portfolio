"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export const MotionDiv = motion.div;

type props = {
  children: React.ReactNode;
  className?: string;
};
export default function Slide({ children }: props) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, translateX: 90 },
        visible: { opacity: 1, translateX: 0 },
      }}
      transition={{
        type: "spring",
        duration: 0.2,
        damping: 8,
        delay: 0.1,
        stiffness: 100,
      }}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}
