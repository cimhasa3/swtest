import React from "react";
import ContactFreeEstimate from "../shared/ContactFreeEstimate";

export default function GutterContactForm() {
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
                Gutter Installation & Repair long Island Safeway Roofing &
                Chimney
              </h2>
              <p className="mt-5 text-primary">
                Residential Gutter Replacement & Repair in Long Island
              </p>
              <p className="mt-5 text-[#666666] leading-[30px]">
                Gutters are essential for protecting your property from water
                damage by directing rain away from your roof, walls, and
                foundation. Without proper gutters, water can pool on your roof,
                seep into walls, and cause extensive damage to your home or
                business. If your gutters are old, damaged, or showing signs of
                wear, it’s time for a replacement or repair. SafeWay Roofing
                specializes in high-quality gutter services, ensuring your
                system works efficiently. For a free quote and to ensure your
                gutters are in top condition, call us at (800) 645-6676.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
