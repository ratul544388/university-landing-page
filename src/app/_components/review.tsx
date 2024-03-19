"use client";

import { Container } from "@/components/container";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
import { LogoIcon } from "./logo-icon";

export const Review = () => {
  return (
    <section className="bg-[#f2f2f2] mt-20 py-8 relative overflow-hidden">
      <Container className="relative z-10 flex flex-col lg:flex-row gap-8 items-center max-w-[1100px]">
        <Image
          src="/review.jpg"
          alt="review"
          width={140}
          height={140}
          className="rounded-full border-[8px] lg:border-[10px] size-[140px] lg:size-[300px] object-cover border-orange"
        />
        <div>
          <p className="text-medium md:text-xl lg:text-2xl xl:font-semibold text-text_light text-center">
            <i>
              I chose Athabasca University for the flexibility and the ability
              to study from home. I have a daughter, and during the pandemic my
              daughter was home. So I wanted to be there for her.
            </i>
          </p>
          <h3 className="font-bold text-neutral-700 mt-4 lg:text-xl">
            Heari Braun
          </h3>
          <p className="font-light mt-2">
            <i>Bachelor of science 2023</i>
          </p>
          <div className="flex items-center group gap-1 text-blue_dark hover:text-blue transition-colors mt-3">
            <Link href="#" className="font-medium group-hover:underline">
              Learn more about Shiri&apos;s AU experience
            </Link>
            <HiOutlineExternalLink className="h4 w-4 text-blue" />
          </div>
          <Separator className="mt-12 lg:hidden" />
        </div>
      </Container>
      <Container className="max-w-[1100px] hidden lg:block mt-8">
        <Separator />
      </Container>
      <LogoIcon className="size-[340px] -bottom-12 text-muted-foreground/20 absolute -left-24" />
      <LogoIcon className="size-32 sm:size-72 text-muted-foreground/20 absolute top-10 -right-12 sm:-right-32 text-white" />
    </section>
  );
};
