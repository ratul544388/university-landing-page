"use client";

import { LogoIcon } from "@/app/_components/logo-icon";
import Image from "next/image";
import Link from "next/link";
import { FaUikit } from "react-icons/fa";

export const Logo = () => {
  return (
    <Link href="/" className="flex gap-0.5">
      <LogoIcon className="text-orange"/>
      <h2 className="leading-4 font-medium text-white mt-0.5 hidden sm:block">
        Fandomia <br />
        University
      </h2>
    </Link>
  );
};
