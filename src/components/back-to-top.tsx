"use client";

import { GoChevronUp } from "react-icons/go";
import { motion } from "framer-motion";
import { useScroll } from "@/hooks/use-scroll";

export const BackToTop = () => {
  const scroll = useScroll();
  const handleClick = () => {
    document.body.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={handleClick}
      variants={{ hidden: { y: "100%", x: "-50%" }, visible: { y: 0 } }}
      initial="hidden"
      animate={scroll > 350 ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 z-50 left-1/2 h-8 flex gap-1.5 items-center opacity-80 hover:opacity-70 text-white bg-blue_dark text-sm px-3 rounded-t-md"
    >
      <GoChevronUp className="h-3 w-3" />
      Back to Top
    </motion.button>
  );
};
