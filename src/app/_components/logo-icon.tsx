"use client";

import { cn } from "@/lib/utils";
import { FaUikit } from "react-icons/fa";

interface LogoIconProps {
  className?: string;
}

export const LogoIcon = ({ className }: LogoIconProps) => {
  return <FaUikit className={cn("size-10", className)} />;
};
