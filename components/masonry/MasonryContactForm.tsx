import React from "react";
import ContactFreeEstimate from "../shared/ContactFreeEstimate";

export default function MasonryContactForm() {
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
                Long Island Masonry Company Safeway Roofing & Chimney
              </h2>
              <p className="mt-5 text-primary">
                Masonry Restoration and Construction Service in Long Island, NY
              </p>
              <p className="mt-5 text-[#666666] leading-[30px]">
                Every masonry project is unique, and SafeWay Roofing is
                dedicated to meeting your specific needs. Serving Long Island
                for over 20 years, our skilled team handles a wide range of
                services, from brick and paver installation to stucco, natural
                stone, and historical restoration. Whether you're working on a
                commercial property, a residential home, or a multi-family
                building, we provide tailored solutions and expert
                craftsmanship. Contact us today at (800) 645-6676 for a free,
                competitive quote and let us help bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
