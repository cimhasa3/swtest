import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import { Checkmark } from "../icons";
import ContactFreeEstimate from "../shared/ContactFreeEstimate";

export default function ChimneyContactForm() {
  return (
    <div className="mt-[90px] mb-[60px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-5">
          {/* Section Left */}
          <div className="col-span-1">
            <ContactFreeEstimate />
          </div>

          {/* Section Right */}
          <div className="col-span-1 flex items-center">
            <div className="">
              <h2 className="text-[42px] leading-[54px] font-bold">
                Long Island Chimneys Chimney Leak Repair Long Island
              </h2>
              <p className="mt-5 text-primary">
                Long Island Chimney Repair Specialist, Chimney Sweep, Chimney
                Cleaning
              </p>
              <p className="mt-5 text-[#666666] leading-[30px]">
                Safeway Roofing and Chimney Inc., based in Long Island, NY,
                offers comprehensive and affordable chimney services. Our
                award-winning team provides chimney sweeping, inspections, gas
                log servicing, leak repairs, masonry, waterproofing, and more.
                We ensure your fireplace remains safe and functional with
                thorough, mess-free inspections and cleanings. Schedule your
                annual chimney inspection today by calling (800) 645-6676 for a
                free estimate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
