"use client";

import Link from "next/link";
import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Location,
  Phone,
  PhoneRound,
  Twitter,
  Youtube,
} from "../icons";
import { usePathname } from "next/navigation";

export default function TopHeader() {
  const pathname = usePathname();
  return (
    <div className="hidden bg-primary text-white h-[58px] md:flex items-center">
      <div className="container mx-auto">
        <div className="flex justify-between items-center text-[16px] font-Gilroy">
          {/* Section left */}
          <ul className="flex items-center">
            {pathname === "/" && (
              <li>
                <Link href="#">
                  <div className="flex items-center gap-[13px]">
                    <Phone height={15} width={15} />
                    <span>(000) 645-6676</span>
                  </div>
                </Link>
              </li>
            )}
            {pathname !== "/" && (
              <li>
                <Link href="#">
                  <div className="flex items-center gap-[13px]">
                  <Location height={15} width={15} />
                  <span>Suffolk County</span>
                  </div>
                </Link>
              </li>
            )}
            <li>
              <div className="flex items-center mx-[19px]">
                <div className="w-[1px] h-[19px] bg-white"></div>
              </div>
            </li>
            <li>
              <Link href="#">
                <div className="flex items-center gap-[13px]">
                  <Location height={15} width={15} />
                  <span>1546 Ocean Ave Bohemia, NY 11716</span>
                </div>
              </Link>
            </li>
          </ul>

          {/* Section right */}
          {pathname === "/" && (
            <div className="">
              <ul className="flex items-center gap-2.5">
                <li>
                  <Link href="#">
                    <div className="flex items-center bg-white p-1.5 rounded-[4px]">
                      <Instagram height={12} width={12} />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <div className="flex items-center bg-white p-1.5 rounded-[4px]">
                      <Twitter height={12} width={12} />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <div className="flex items-center bg-white p-1.5 rounded-[4px]">
                      <Linkedin height={12} width={12} />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <div className="flex items-center bg-white p-1.5 rounded-[4px]">
                      <Facebook height={12} width={12} />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <div className="flex items-center bg-white p-1.5 rounded-[4px]">
                      <Youtube height={12} width={12} />
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {pathname !== "/" && (
            <div className="flex items-center gap-[34px]">
              <div className="font-light">
                <Link href="">Financing</Link>
              </div>
              <div className="h-[18px] w-[1px] bg-white bg-opacity-20" />
              <div className="">
                <Link href="">
                  <div className="flex items-center gap-2.5">
                    <PhoneRound height={25} width={25} />
                    <div className="text-[22px] font-medium mt-1.5">
                      (800) 645-6676
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
