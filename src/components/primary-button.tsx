"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
const spanVariants = {
  initial: {
    width: 0,
    height: 0,
    top: "50%",
    left: "50%",
    x: "-50%",
    y: "-50%",
  },
  hover: {
    width: "102%",
    height: "102%",
  },
};
export const PrimaryButton = ({
  label,
  url,
  className,
}: {
  label: string;
  url: string;
  className?: string;
}) => {
  const MotionLink = motion(Link);
  return (
    <MotionLink
      href={url}
      initial="initial"
      whileHover="hover"
      className={cn(
        "border-2 font-medium border-orange relative text-white hover:text-white transition duration-300 h-10 rounded-sm flex items-center justify-center px-4",
        className
      )}
    >
      {label}
      <motion.span
        variants={spanVariants}
        className="absolute bg-[#D13F0A] -z-10"
      />
    </MotionLink>
  );
};
