"use client";
import StudentsImage from "@/../public/students.jpg";
import { BlinkButton } from "@/components/blink-button";
import { useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["0 0.5", "1 1"],
  });

  return (
    <section className="relative">
      <div ref={scrollRef} className="absolute h-[150vh] -z-10 w-full">
        <Image
          src={StudentsImage}
          alt="Students"
          width={1000}
          height={800}
          className="w-full h-[90vh] sticky top-[82px] object-cover"
          placeholder="blur"
        />
        <motion.span
          style={{ opacity: scrollYProgress }}
          className="absolute bg-neutral-900 inset-0"
        />
      </div>
      <div className="pt-[50vh] text-white relative z-10">
        <div className="bg-blue_light md:bg-[initial] flex flex-col items-center md:items-start md:flex-row gap-3 px-5 py-6 md:py-[initial]">
          <h1 className="md:min-w-[48%] text-end font-bold text-3xl lg:text-4xl xl:text-5xl">
            We are Canada&apos; Open University
          </h1>
          <span className="h-[170px] hidden md:block lg:h-[150px] min-w-1 bg-orange" />
          <div className="space-y-4">
            <p className="hidden md:block text-base lg:text-lg">
              Our world-class accredited online degrees and courses are designed
              so you can complete your education wherever and whenever it works
              for you.
            </p>
            <BlinkButton
              underline
              href="#get-started"
              label="Get started"
              className="font-bold text-white hover:text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
