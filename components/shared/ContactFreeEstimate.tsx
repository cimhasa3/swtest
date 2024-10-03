import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

export default function ContactFreeEstimate() {
  return (
    <div>
      <div className="bg-[#F8F8F8] px-[22px] md:px-[34px] py-[39px] rounded-[30px]">
        <div className="max-w-[413px]">
          <h2 className="text-[28px] font-bold">Get a Free Estimate</h2>
          <p className="mt-2.5 text-[16px] leading-[26px] text-[#666666]">
            Fill out our from blow and a all country representative will be in
            touch.
          </p>
        </div>

        <div className="mt-[30px]">
          <div className="grid grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Name"
              className="text-[16px] md:text-[18px] placeholder:text-[#666666] py-[8px] px-[18px] bg-[#F3F3F3] rounded-[6px]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="text-[16px] md:text-[18px] placeholder:text-[#666666] py-[8px] px-[18px] bg-[#F3F3F3] rounded-[6px]"
            />
            <input
              type="email"
              placeholder="Email"
              className="text-[16px] md:text-[18px] placeholder:text-[#666666] py-[8px] px-[18px] bg-[#F3F3F3] rounded-[6px]"
            />
            <input
              type="text"
              placeholder="Address"
              className="text-[16px] md:text-[18px] placeholder:text-[#666666] py-[8px] px-[18px] bg-[#F3F3F3] rounded-[6px]"
            />
            <input
              type="text"
              placeholder="Estimate Type"
              className="col-span-2 text-[16px] md:text-[18px] placeholder:text-[#666666] py-[8px] px-[18px] bg-[#F3F3F3] rounded-[6px]"
            />
            <textarea
              rows={5}
              placeholder="How Can We Help?"
              className="col-span-2 text-[16px] md:text-[18px] placeholder:text-[#666666] py-[8px] px-[18px] bg-[#F3F3F3] rounded-[6px]"
            />
            <PrimaryButton className="py-[14px] px-10 font-medium">
              Submit
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
