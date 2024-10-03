import Image from "next/image";
import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

export default function GetInTouch() {
  return (
    <div className="container">
      <div className="bg-[#F8F8F8] rounded-[30px] py-[35px] px-8 mt-[74px]">
        <div className="grid grid-cols-2 gap-[25px]">
          <div className="col-span-1">
            <Image
              src="/images/contact-get-in-touch.png"
              height={534}
              width={534}
              alt="Get In Touch"
            />
          </div>
          <div className="col-span-1">
            <div className="bg-[#F8F8F8] px-[34px] rounded-[30px]">
              <div className="max-w-[413px]">
                <h2 className="text-[28px] font-bold">Get a Free Estimate</h2>
                <p className="mt-2.5 text-[16px] leading-[26px] text-[#666666]">
                  Fill out our from blow and a all country representative will
                  be in touch.
                </p>
              </div>

              <div className="mt-[30px]">
                <div className="flex flex-col gap-5">
                  <input
                    type="text"
                    placeholder="Name"
                    className="placeholder:text-[#666666] py-[8px] px-[18px] bg-[#F3F3F3] rounded-[6px]"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="placeholder:text-[#666666] py-[8px] px-[18px] bg-[#F3F3F3] rounded-[6px]"
                  />

                  <textarea
                    rows={6}
                    placeholder="Message"
                    className="col-span-2 placeholder:text-[#666666] py-[8px] px-[18px] bg-[#F3F3F3] rounded-[6px]"
                  />
                  <PrimaryButton className="py-[14px] px-10 font-medium">
                    Submit
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
