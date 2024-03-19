"use client";

import { BlinkButton } from "@/components/blink-button";
import { Container } from "@/components/container";
import { infoItems } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Info = () => {
  return (
    <Container className="grid gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-4 bg-white py-5 text-blue_dark md:mt-16">
      {infoItems.map(({ image, label, links, circleColor }) => (
        <div key={label} className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5">
          <div
            className={cn(
              "flex items-center justify-center h-16 min-w-16 border-[6px] border-orange rounded-full",
              circleColor
            )}
          >
            <Image src={image} alt="Image" width={30} height={30} />
          </div>
          <div className="flex flex-col gap-1 items-center sm:items-start">
            <h4 className="font-bold">{label}</h4>
            {links.map(({ label, href }) => (
              <BlinkButton size="sm" key={label} href={href} label={label} />
            ))}
          </div>
        </div>
      ))}
    </Container>
  );
};
