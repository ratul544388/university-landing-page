"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";
interface BlinkButtonProps {
  label: string;
  className?: string;
  href: string;
  size?: "default" | "sm";
  underline?: boolean;
}

const iconVariants = {
  hover: {
    scale: [1, 1.1, 1],
    transition: { repeat: Infinity, duration: 1.2 },
  },
};

const underlineVariants = {
  initial: {
    width: 0,
  },
  hover: {
    width: "100%",
  },
};

export const BlinkButton = ({
  label,
  href,
  className,
  size = "default",
  underline,
}: BlinkButtonProps) => {
  const MotionLink = motion(Link);
  return (
    <MotionLink
      initial="initial"
      whileHover="hover"
      href={href}
      className={cn(
        "font-semibold flex items-center gap-2 text-blue_dark hover:text-blue transition-colors",
        size === "sm" && "text-sm",
        className
      )}
    >
      <motion.span
        variants={iconVariants}
        className="p-1.5 rounded-full bg-orange"
      >
        <GoChevronRight
          className={cn("size-5 text-white", size === "sm" && "size-3")}
        />
      </motion.span>
      <p className="relative">
        {label}
        {underline && (
          <motion.span
            variants={underlineVariants}
            transition={{ duration: 0.5 }}
            className="h-0.5 bg-white absolute left-0 bottom-0"
          />
        )}
      </p>
    </MotionLink>
  );
};
