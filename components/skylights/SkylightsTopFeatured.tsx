import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import { Checkmark, GoogleGuaranteed } from "../icons";
import ContactFreeEstimate from "../shared/ContactFreeEstimate";
import Image from "next/image";

export default function SkylightsTopFeatured() {
  return (
    <div className="mt-[90px] mb-[120px]">
      <div className="container mx-auto">
        <div className="md:grid grid-cols-2 gap-5">
          {/* Section Left */}
          <Image
            src={"/images/skylights-top-featured.png"}
            height={469}
            width={539}
            alt={"Long Island Chimneys Chimney Leak Repair Long Island"}
          />

          {/* Section Right */}
          <div className="col-span-1 flex items-center">
            <div className="">
              <h2 className="text-[22px] md:text-[42px] font-bold">
                Local Skylight Contractor long island
              </h2>
              <p className="mt-5 text-primary">
                Residential and Commercial Roofing Services in Long Island, Roof
                Leak Repair, Roof Replacement
              </p>
              <p className="text-[16px] md:text-[18px] mt-5 text-[#666666] leading-[30px]">
                At SafeWay Roofing, we handle every aspect of your roofing needs
                with expertise and care. From routine maintenance and leak
                repairs to full roof replacements, our trained professionals
                ensure peace of mind with every project. We cover all types of
                roofs and respond quickly to emergencies. For top-quality
                service and materials, contact us at (800) 645-6676 for a free
                quote.
              </p>
              <div className="mt-5">
                <img src="/images/google-guaranteed.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
