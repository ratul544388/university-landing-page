"use client";

import { useScroll, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface MeetingPlaceProps {}

export const MeetingPlace = ({}: MeetingPlaceProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 -1", "1 1"],
  });
  return <></>;
};
