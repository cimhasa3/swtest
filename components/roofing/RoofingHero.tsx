import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import { GAF, GoogleGuaranteed, IndustryLeading, MarqueeStar } from "../icons";

export default function Hero() {
  return (
    <div
      className="bg-left md:bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(/images/roofing-hero.png)` }}
    >
      <div className="container py-10 md:py-16">
        <div className="max-w-[700px]">
          <div className="hidden text-[21px] leading-[25.4px] py-2.5 px-[30px] border border-[#1E1E1E] rounded-full md:inline-block">
            Residential Roofing
          </div>

          <div className="mt-[5px]">
            <h1 className="text-center md:text-left text-[40px] md:text-[56px] leading-[48px] md:leading-[80px] text-[#232323]">
              Long Island’s Go-To{" "}
              <span className="text-primary font-[800] uppercase text-[34px] md:text-[56px]">
                Experts
              </span>{" "}
              for Roof Repairs and Replacements
            </h1>
          </div>

          <div className="mt-5 md:text-[#666666] leading-[30px] max-w-[620px]">
            <p className="text-center md:text-left">
              We specialize in roof repairs and replacements, offering reliable,
              high-quality roofing solutions for your home. At Safeway Roofing,
              our commitment to exceptional service ensures your roof will be
              built to last..
            </p>
            <ul className="mt-5 flex flex-col items-center md:items-start gap-2.5">
              <li>
                <div className="flex items-center gap-2.5">
                  <IndustryLeading height={21} width={21} />
                  <div className="">Industry-leading warranties</div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2.5">
                  <GAF height={21} width={21} />
                  <div className="">GAF Certified Roofing Contractor</div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2.5">
                  <IndustryLeading height={21} width={21} />
                  <div className="">Professional and responsive</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex md:hidden justify-center mt-[30px]">
            <GoogleGuaranteed width={369} height={46} />
          </div>

          <div className="mt-[30px] md:mt-5">
            <PrimaryButton className="px-10 py-5 w-full md:w-auto font-medium">
              Talk To a Roofing Specialist
            </PrimaryButton>
          </div>
        </div>

        {/* Marquee */}
      </div>
      <div className="bg-primary h-[54px] md:h-[78px] flex justify-center items-center -rotate-1 2xl:-rotate-0">
        {/* @ts-ignore */}
        <marquee>
          <div className="">
            <div className="flex gap-5 md:gap-10 items-center text-white text-[16px] md:text-[24px] font-bold">
              <p>FAMILY OWNED & OPERATED</p>
              <MarqueeStar />
              <p>AVAILABLE 24 HOURS 7 DAYS A WEEK </p>
              <MarqueeStar />
              <p>FREE ESTIMATES</p>
              <MarqueeStar />
              <p>SAME DAY SERVICE</p>
              <MarqueeStar />
            </div>
          </div>
          {/* @ts-ignore */}
        </marquee>
      </div>
    </div>
  );
}
