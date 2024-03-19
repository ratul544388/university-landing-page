"use client";

import { PrimaryButton } from "@/components/primary-button";
import Image from "next/image";
import Link from "next/link";

export const NewsAndEvents = () => {
  return (
    <section className="flex flex-col gap-6">
      <SectionHeader
        label="News from The Hub"
        actionLabel="View all"
        actionUrl="#view all"
      />
      <ItemCard
        image="/news/1.jpg"
        href="#"
        title="New Canada Research chair address health posicy, reducing inequity"
        date="March 13, 2024"
      />
      <ItemCard
        image="/news/2.jpg"
        href="#"
        title="New Canada Research chair address health posicy, reducing inequity"
        date="March 13, 2024"
      />
      <ItemCard
        image="/news/3.jpg"
        href="#"
        title="New Canada Research chair address health posicy, reducing inequity"
        date="March 11, 2024"
      />
      <SectionHeader
        label="Upcomming events"
        actionLabel="View all"
        actionUrl="#upcomming_events"
      />
      <ItemCard
        image="/news/3.jpg"
        href="#"
        title="New Canada Research chair address health posicy, reducing inequity"
        date="feb 11, 2024"
      />
      <ItemCard
        image="/news/3.jpg"
        href="#"
        title="New Canada Research chair address health posicy, reducing inequity"
        date="Jan 20, 2024"
      />
      <ItemCard
        image="/news/3.jpg"
        href="#"
        title="New Canada Research chair address health posicy, reducing inequity"
        date="Jan 11, 2024"
      />
    </section>
  );
};

const SectionHeader = ({
  label,
  actionLabel,
  actionUrl,
}: {
  label: string;
  actionLabel: string;
  actionUrl: string;
}) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-bold text-lg">{label}</h2>
      <PrimaryButton label={actionLabel} url={actionUrl} />
    </div>
  );
};

const ItemCard = ({
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
    <Link href={href} className="group bg-white">
      <Image
        src={image}
        alt="image"
        width={400}
        height={225}
        className="max-h-[350px] object-cover"
      />
      <div className="py-5 px-4">
        <h1 className="font-bold text-lg text-blue_dark group-hover:outline outline-blue">
          {title}
        </h1>
        <p className="text-sm text-text_black group-hover:outline outline-blue">
          {date}
        </p>
      </div>
    </Link>
  );
};
