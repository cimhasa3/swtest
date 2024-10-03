import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import { GAF, GoogleGuaranteed, IndustryLeading, MarqueeStar } from "../icons";
import ShortContactFreeEstimate from "../shared/ShortContactFreeEstimate";

export default function SkylightsHero() {
  return (
    <div
      className="bg-left md:bg-right bg-contain bg-no-repeat bg-[#F3F3F3]"
      style={{ backgroundImage: `url(/images/skylights-hero-bg.png)` }}
    >
      <div className="container py-10 md:py-16">
        <div className="grid grid-cols-2 gap-[25px]">
          <div className="col-span-1">
            <div className="max-w-[810px]">
              <div className="hidden text-[21px] leading-[25.4px] py-2.5 px-[30px] border border-[#1E1E1E] rounded-full md:inline-block">
                Chimney Experts
              </div>

              <div className="mt-[5px]">
                <h1 className="text-center md:text-left text-[40px] md:text-[56px] leading-[48px] md:leading-[80px] text-[#232323]">
                  Your Local Long Island{" "}
                  <span className="text-[#007EB1] font-[800] uppercase text-[34px] md:text-[56px]">
                    Skylight Experts
                    <br />
                  </span>{" "}
                  Proudly Serving Our Community
                </h1>
              </div>

              <div className="mt-5 md:text-[#666666] leading-[30px] max-w-[580px]">
                <p className="text-center md:text-left">
                  We specialize in new roofs and siding for your home. Since we
                  believe that quality is more important than quantity, we will
                  always provide excellent service.
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
                  Talk To a Skylight Specialist
                </PrimaryButton>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <ShortContactFreeEstimate />
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
