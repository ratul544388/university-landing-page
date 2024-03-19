"use client";
import EveningImage from "@/../public/evening.jpg";
import { BlinkButton } from "@/components/blink-button";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import Image from "next/image";
export const Nukshahtowin = () => {
  return (
    <Container className="relative mt-20">
      <Image
        src={EveningImage}
        alt="image"
        width={500}
        height={700}
        className="w-screen absolute left-0 top-0 h-full object-cover"
        placeholder="blur"
      />
      <div className="pt-[150px] pb-12 relative z-10 flex items-center flex-col">
        <Heading className="text-white">
          Visit Nukshahtowin, our indigenous metting place
        </Heading>
        <span className="h-1 w-[80px] bg-orange my-4" />
        <p className="text-sm text-white text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vel
          quam facere ex. Odit sapiente quo ducimus doloremque voluptate earum
          vel fugit itaque unde similique temporibus assumenda, magnam fuga
          possimus!
        </p>
        <BlinkButton
          label="visit Nukskahtowin"
          href="#"
          underline
          className="mt-9 text-white"
        />
        <p className="mt-[80px] text-xs text-white text-center">
          <i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            facere culpa tenetur ullam, eaque sapiente labore, atque accusantium
            voluptatum alias natus! Exercitationem corporis nostrum dolorem
            quibusdam quaerat fuga culpa iure!
          </i>
        </p>
      </div>
      <span className="absolute inset-0 bg-neutral-900/40" />
    </Container>
  );
};
