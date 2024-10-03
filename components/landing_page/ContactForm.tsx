import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import { Checkmark } from "../icons";
import ContactFreeEstimate from "../shared/ContactFreeEstimate";

export default function ContactForm() {
  return (
    <div className="mt-[28px] md:mt-[90px] mb-[60px]">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:grid grid-cols-2 gap-5">
          {/* Section Left */}
          <div className="col-span-1">
            <ContactFreeEstimate />
          </div>

          {/* Section Right */}
          <div className="col-span-1 flex items-center">
            <div className="">
              <h2 className="text-[22px] md:text-[42px] font-bold">
                Long Island Roofing, Chimney Siding and Windows.
              </h2>
              <p className="text-[16px] md:text-[18px] mt-5 text-[#666666] leading-[30px]">
                At Safeway Home Improvements, we provide quality craftsmanship
                and materials for a reasonable price. With a strong belief that
                we should treat others as we would like to be treated, our team
                focuses on providing a superior experience that leaves customers
                fully satisfied.
              </p>

              <ul className="mt-5 flex flex-col gap-5">
                <li>
                  <div className="flex items-center gap-2.5">
                    <Checkmark height={19} width={19} />
                    <div className="text-[16px] md:text-[18px] leading-[30px] text-[#232323]">
                      A+ Rating with the Better Business Bureau 
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2.5">
                    <Checkmark height={19} width={19} />
                    <div className="text-[16px] md:text-[18px] leading-[30px] text-[#232323]">
                      GAF Certified Roofing Contractor
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2.5">
                    <Checkmark height={19} width={19} />
                    <div className="text-[16px] md:text-[18px] leading-[30px] text-[#232323]">
                      CertainTeed Master Shingle Applicator
                    </div>
                  </div>
                </li>
              </ul>

              <p className="text-primary font-medium text-[14px] md:text-[16px] leading-[26px] max-w-[555px] mt-5">
                we believe that working with safeway roofing guarantees the
                homeowner&apos;s best interests because safeway roofing works
                honestly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
