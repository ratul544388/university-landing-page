"use client";

import { BlinkButton } from "@/components/blink-button";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import Image from "next/image";

export const SelectYourPath = () => {
  return (
    <section>
      <Container className="flex flex-col items-center text-white bg-white py-14">
        <Heading>Select your path</Heading>
        <p className="font-light text-center text-black mt-3">
          At AU, we are driven by a strong commitment to empower learners
          worldwide. As Canada&apos;s Open University, we embrace accessibility
          and flexibility, delivering exceptional online and distance learning
          opportunities. Our affordable courses, comprehensive undergraduate and
          graduate degree programs, and diverse professional development options
          aim to unlock the barriers of traditional education, fostering
          lifelong growth and success. Choose the online learning path that
          works for you!
        </p>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-8 mt-12">
          <Card
            image="/select-your-path/mobile.png"
            title="Online undergraduate programs"
            description=""
            actionLabel="Explore AU undergraduate programs"
            actionUrl="#"
          />
          <Card
            image="/select-your-path/desktop.png"
            title="Online graduate programs"
            description=""
            actionLabel="Explore AU graduate programs"
            actionUrl="#"
          />
          <Card
            image="/select-your-path/web.png"
            title="Online courses"
            description=""
            actionLabel="Explore AU courses"
            actionUrl="#"
          />
          <Card
            image="/select-your-path/coding.png"
            title="Online professional development"
            description=""
            actionLabel="View professional development courses"
            actionUrl="#"
          />
        </div>
      </Container>
    </section>
  );
};

export const Card = ({
  image,
  title,
  description,
  actionLabel,
  actionUrl,
}: {
  image: string;
  title: string;
  description: string;
  actionLabel: string;
  actionUrl: string;
}) => {
  return (
    <div className="p-7 bg-gradient-to-r from-[#31466F] to-[#485682] flex flex-col gap-3 hover:scale-[1.07] transition duration-500">
      <div className="border-[3.5px] border-orange size-20 rounded-full bg-white flex items-center justify-center">
        <Image src={image} alt="image" width={45} height={45} />
      </div>
      <h3 className="font-semibold text-xl">{title}</h3>
      <span className="w-12 h-1 bg-orange" />
      <p className="text-xs">
        Lorem ipsum dolor sit, amet cctetur adipisicing elit. Quod consur
        architecto amet obcaecati excturi otam id quibusdam maiores modi. Iste
        illo quaerat ipsum odit, fugit natus molestiae sapiente rerum, vitae,
        eveniet cumque officia! Reiciendis, magnam repudiandae doloremque.
      </p>
      <BlinkButton
        label={actionLabel}
        href={actionUrl}
        size="sm"
        underline
        className="text-white hover:text-white mt-1"
      />
    </div>
  );
};
