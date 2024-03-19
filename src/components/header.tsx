"use client";

import { FaQuestionCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { PrimaryButton } from "./primary-button";
import { Container } from "./container";
import { Logo } from "./logo";
import Link from "next/link";
import { GoChevronDown } from "react-icons/go";
import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <header className="h-[110px] lg:h-[120] z-50 bg-blue_dark sticky -top-7 lg:-top-8 pt-7">
      <Container className="h-7 lg:h-8 absolute bg-blue top-0 text-xs">
        <nav className="h-full flex items-center justify-center lg:justify-end text-white">
          <p className="lg:hidden">Canada&apos; Open University</p>
          <NavLink label="myAULogin" href="#" small />
          <NavLink label="Conversation" href="#" small />
          <NavLink label="Nukskahtowin" href="#" small />
          <NavLink label="Library" href="#" small />
          <NavLink label="News" href="#" small />
          <NavLink label="Research" href="#" small />
          <NavLink label="Alumni" href="#" small />
          <NavLink label="Faculty" href="#" arrow small />
          <NavLink label="Support Services" href="#" small />
          <NavLink label="About AU" href="#" small />
        </nav>
      </Container>
      <Container className="flex h-full items-center gap-5 justify-between">
        <Logo />
        <nav className="flex items-center gap-4 h-full">
          <NavLink label="The AU advantage" href="#" arrow />
          <NavLink label="Programs and courses" href="#" arrow />
          <NavLink label="Applications and admissions" href="#" arrow />
          <NavLink label="Student support" href="#" arrow />
          <button className="flex items-center gap-2 h-full px-3 hover:bg-white/10 text-white">
            <FaQuestionCircle className="h-6 w-6" />
            <span className="text-sm font-medium hidden lg:block">Help</span>
          </button>
          <button className="flex items-center gap-2 h-full px-3 hover:bg-white/10 text-white">
            <FiSearch className="h-6 w-6" />
            <span className="text-sm font-medium hidden lg:block">Search</span>
          </button>
          <PrimaryButton label="Apply" url="#apply" />
        </nav>
      </Container>
    </header>
  );
};

const NavLink = ({
  label,
  href,
  arrow,
  small,
}: {
  label: string;
  href: string;
  arrow?: boolean;
  small?: boolean;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "h-full text-white text-sm font-medium hidden lg:flex items-center gap-2 hover:bg-white/10 px-3",
        small && "text-xs font-light hover:bg-transparent hover:underline"
      )}
    >
      {label}
      {arrow && (
        <GoChevronDown className="group-hover:rotate-45 transition duration-300" />
      )}
    </Link>
  );
};
