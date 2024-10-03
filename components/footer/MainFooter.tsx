import React from "react";
import {
  FacebookWhite,
  InstagramWhite,
  LocationBlue,
  Logo,
  PhoneBlue,
  YoutubeWhite,
} from "../icons";
import Link from "next/link";

export default function MainFooter() {
  return (
    <div className="bg-[#F7F7F7]">
      <div className="container mx-auto pt-[25px] pb-[17px]">
        <div className="flex flex-col md:flex-row justify-between pb-[75px]">
          {/* Section left */}
          <div className="flex flex-col items-center md:items-start">
            <Logo height={61} width={210} />
            <p className="text-center md:text-left font-light text-[#232323] text-opacity-80 mt-[18px] max-w-[384px] leading-[28px]">
              Safeway Roofing is a family-owned company that has been installing
              and renovationg roofing in NY & California for 15 Years.
            </p>
            <ul className="mt-5 flex items-center gap-5">
              <li>
                <Link href="#">
                  <div className="bg-primary p-2 rounded-full">
                    <FacebookWhite height={24} width={24} />
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <div className="bg-primary p-2 rounded-full">
                    <InstagramWhite height={24} width={24} />
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <div className="bg-primary p-2 rounded-full">
                    <YoutubeWhite height={24} width={24} />
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Section right */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-[30px] md:gap-[100px]">
            <div className="mt-[30px] md:mt-0">
              <h2 className="font-semibold text-[#232323] text-[22px]">
                Resources
              </h2>
              <ul className="mt-5 flex flex-col gap-5">
                <li>
                  <Link href="#">
                    <div className="text-center md:text-left text-[#232323] font-light text-opacity-80">
                      Pricacy Policy
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <div className="text-center md:text-left text-[#232323] font-light text-opacity-80">
                      About Us
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <div className="text-center md:text-left text-[#232323] font-light text-opacity-80">
                      Contact Us
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <div className="text-center md:text-left text-[#232323] font-light text-opacity-80">
                      Blog
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="">
              <h2 className="text-center md:text-left font-semibold text-[#232323] text-[22px]">
                Trading Hours
              </h2>
              <ul className="mt-5 flex flex-col gap-[5px]">
                <li>
                  <div className="text-[#232323] font-bold">
                    Monday To Sunday
                  </div>
                </li>
                <li>
                  <div className="text-center md:text-left text-[#232323] font-light text-opacity-80">
                    Open 24 Hours
                  </div>
                </li>
              </ul>
            </div>

            <div className="max-w-[193px]">
              <h2 className="text-center md:text-left font-semibold text-[#232323] text-[22px]">
                Contact Us
              </h2>
              <ul className="mt-5 flex flex-col gap-5">
                <li>
                  <Link href="#">
                    <div className="text-center md:text-left text-[#232323] font-light text-opacity-80 flex flex-col items-center md:items-start md:flex-row gap-2.5">
                      <LocationBlue height={26} width={26} />
                      <div className="text-center md:text-left">
                        1546 Ocean Ave Bohemia, NY 11716
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <div className="text-center md:text-left text-[#232323] font-light text-opacity-80 flex flex-col md:flex-row items-center md:items-start gap-2">
                      <PhoneBlue height={24} width={16} />
                      <div className="">(800) 645-6676</div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="md:mt-[65px]">
          <div className="text-center border-t pt-3 leading-[43px] font-medium text-[#232323] text-opacity-80">
            © All Copyright 2023 by Safeway
          </div>
        </div>
      </div>
    </div>
  );
}
