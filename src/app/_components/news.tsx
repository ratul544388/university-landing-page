"use client";

import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { PrimaryButton } from "@/components/primary-button";
import Image from "next/image";
import Link from "next/link";

export const News = () => {
  return (
    <Container className="space-y-7">
      <div className="flex items-center justify-between">
        <Heading>News from The Hub</Heading>
        <PrimaryButton
          label="View all"
          url="#news"
          className="text-text_black"
        />
      </div>
      <div className="grid gap-7 md:grid-cols-3">
        <NewsItem
          image="/news/1.jpg"
          href="#"
          title="New Canada Research chair address health posicy, reducing inequity"
          date="March 13, 2024"
        />
        <NewsItem
          image="/news/2.jpg"
          href="#"
          title="New Canada Research chair address health posicy, reducing inequity"
          date="March 13, 2024"
        />
        <NewsItem
          image="/news/3.jpg"
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
        className="max-h-[350px] md:max-h-[250px] w-full h-full object-cover"
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
