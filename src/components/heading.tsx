"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

export const Heading = ({ children, className }: HeadingProps) => {
  return (
    <h1
      className={cn(
        "font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl text-blue_dark",
        className
      )}
    >
      {children}
    </h1>
  );
};
