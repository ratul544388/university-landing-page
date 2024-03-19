"use client";

import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { PrimaryButton } from "@/components/primary-button";
import Image from "next/image";
import Link from "next/link";

export const Events = () => {
  return (
    <Container className="space-y-7 mt-12">
      <div className="flex items-center justify-between">
        <Heading>Upcoming events</Heading>
        <PrimaryButton
          label="View all"
          url="#news"
          className="text-text_black"
        />
      </div>
      <div className="grid md:grid-cols-3 gap-7">
        <NewsItem
          image="/events/1.jpg"
          href="#"
          title="New Canada Research chair address health posicy, reducing inequity"
          date="March 13, 2024"
        />
        <NewsItem
          image="/events/2.jpg"
          href="#"
          title="New Canada Research chair address health posicy, reducing inequity"
          date="March 13, 2024"
        />
        <NewsItem
          image="/events/3.jpg"
          href="#"
          title="New Canada Research chair address health posicy, reducing inequity"
          date="March 11, 2024"
        />
      </div>
    </Container>
  );
};

const NewsItem = ({
  image,
  title,
  date,
  href,
}: {
  image: string;
  title: string;
  date: string;
  href: string;
}) => {
  return (
    <Link href={href} className="group bg-white inline-block shadow-md">
      <Image
        src={image}
        alt="image"
        width={400}
        height={225}
        className="max-h-[350px] md:max-h-[250px] h-full w-full object-cover"
      />
      <div className="py-6 px-4 space-y-4">
        <h1 className="font-bold text-lg text-blue_dark group-hover:underline decoration-blue line-clamp-2">
          {title}
        </h1>
        <p className="text-sm font-medium text-text_black group-hover:underline decoration-blue">
          {date}
        </p>
      </div>
    </Link>
  );
};
