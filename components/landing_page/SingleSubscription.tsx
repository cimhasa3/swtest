import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

export default function SingleSubscription() {
  return (
    <div className="container mb-[120px]">
      <div className="md:grid grid-cols-5 gap-[30px]">
        <div className="col-span-3">
          <div className="text-primary text-[24px] font-bold">Financing</div>
          <h2 className="mt-5 font-bold text-[35px] leading-[45px] max-w-[600px]">
            Flexible Financing Made Easy: Affordable Solutions for Your Roofing
            Project
          </h2>
          <p className="mt-5 text-[#666] leading-[30px] max-w-[630px]">
            At Safeway Roofing, we know budgeting for a roof replacement can be
            challenging. That’s why we’ve simplified our process to make quoting
            and decision-making easy, providing clear guidance every step of the
            way. Our goal is to take the stress out of the experience, providing
            clear, transparent pricing and expert guidance every step of the
            way.
          </p>
          <div className="mt-5">
            <PrimaryButton>Read more</PrimaryButton>
          </div>
        </div>

        <div className="col-span-2 mt-8 md:mt-0">
          <div
            className="px-7 md:px-[42px] bg-center bg-cover md:w-[451px] md:h-[484px]"
            style={{
              backgroundImage: `url(/images/single-subscription-bg.png)`,
            }}
          >
            <h2 className="text-[33.56px] font-black italic text-[#007EB1] pt-4">
              $163.45
            </h2>
            <div className="italic font-bold text-[20px] mt-2 text-primary">
              Per Month
            </div>
            <div className="flex justify-between items-center text-[#333] mt-[18px]">
              <div className="">Janice T, Miller Place NY</div>
              <div className="text">25/5/21</div>
            </div>
            <div className="mt-[14px] flex items-center gap-2">
              <div className="uppercase text-primary font-bold whitespace-nowrap">
                Roof Replacement
              </div>
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              <div className="uppercase text-primary font-bold">Gutters</div>
            </div>
            <div className="mt-4 text-[#333]">
              Square Feet:{" "}
              <span className="text-[#007EB1] font-bold">2800</span>
            </div>
            <div className="mt-4 text-[#333]">
              Gutters: <span className="text-[#007EB1] font-bold">385 ft</span>
            </div>
            <div className="mt-4 text-[#333]">
              Down Payment: <span className="text-[#007EB1] font-bold">$0</span>
            </div>
            <div className="mt-4 text-[#333]">
              Term Length:{" "}
              <span className="text-[#007EB1] font-bold">5 Years</span>
            </div>
            <div className="mt-[20px] mb-7">
              <PrimaryButton className="w-full">Lets Get Started</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
