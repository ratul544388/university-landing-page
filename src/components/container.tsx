"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  element?: "section" | "div";
}

export const Container = ({
  children,
  className,
  element = "section",
}: ContainerProps) => {
  return element === "section" ? (
    <section
      className={cn("mx-auto px-4 xs:px-8 md:px-[2.5rem] w-full", className)}
    >
      {children}
    </section>
  ) : (
    <div
      className={cn("mx-auto px-4 xs:px-8 md:px-[2.5rem] w-full", className)}
    >
      {children}
    </div>
  );
};
