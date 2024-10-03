"use client";

import React from "react";
import { Logo, Phone, PhoneRound } from "../icons";
import Link from "next/link";
import PrimaryButton from "../buttons/PrimaryButton";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const pathname = usePathname();

  return (
    <div className="md:container mx-auto">
      <div className="h-[104px] flex justify-between items-center">
        <div className="flex justify-center  w-full md:block md:w-auto">
          <Logo height={86} width={294} />
        </div>
        {pathname === "/" && (
          <ul className="hidden md:flex items-center gap-[50px]">
            <li>
              <Link href="/">
                <div className={`text-[#666666] ${pathname==="/"&&`text-primary`}`}>Home</div>
              </Link>
            </li>
            <li>
              <Link href="/roofing">
                <div className={`text-[#666666] `}>Roofing</div>
              </Link>
            </li>
            <li>
              <Link href="/siding">
                <div className={`text-[#666666] `}>Siding</div>
              </Link>
            </li>
            <li>
              <Link href="/window">
                <div className={`text-[#666666] `}>Window</div>
              </Link>
            </li>
            <li>
              <Link href="/about-us">
                <div className={`text-[#666666] `}>About Us</div>
              </Link>
            </li>
            <li>
              <Link href="#">
                <div className={`text-[#666666] `}>Our Work</div>
              </Link>
            </li>
          </ul>
        )}
        {pathname !== "/" && (
          <ul className="hidden md:flex items-center gap-[50px]">
            <li>
              <Link href="/">
                <div className={`text-[#666666] `}>Home</div>
              </Link>
            </li>
            <li>
              <Link href="/roofing">
                <div className={`text-[#666666] ${pathname==="/roofing"&&`text-primary`}`}>Roofing</div>
              </Link>
            </li>
            <li>
              <Link href="/siding">
                <div className={`text-[#666666] ${pathname==="/siding"&&`text-primary`}`}>Siding</div>
              </Link>
            </li>
            <li>
              <Link href="/gutters">
                <div className={`text-[#666666] ${pathname==="gutters"&&`text-primary`}`}>Gutters</div>
              </Link>
            </li>
            <li>
              <Link href="/skylights">
                <div className={`text-[#666666] ${pathname==="/skylights"&&`text-primary`}`}>Skylights</div>
              </Link>
            </li>
            <li>
              <Link href="#">
                <div className={`text-[#666666] ${pathname===""&&`text-primary`}`}>About Us</div>
              </Link>
            </li>
            <li>
              <Link href="#">
                <div className={`text-[#666666] ${pathname===""&&`text-primary`}`}>More</div>
              </Link>
            </li>
          </ul>
        )}
        {pathname === "/" && (
          <div className="hidden md:block">
            <PrimaryButton>
              <div className="flex items-center gap-2.5">
                <PhoneRound height={25} width={25} />
                (800) 645-6676
              </div>
            </PrimaryButton>
          </div>
        )}
      </div>
      <div className="bg-primary h-[48px] flex justify-between items-center md:hidden">
        <div className="flex items-center gap-2.5 text-white px-5">
          <Phone />
          <div className="text-[22] font-medium">(800) 645-6676</div>
        </div>
        <div className="bg-black h-full text-white flex items-center gap-2.5 px-[26px]">
          <div className="text-[22px]">Menu</div>
          <Menu size={24} />
        </div>
      </div>
    </div>
  );
}
