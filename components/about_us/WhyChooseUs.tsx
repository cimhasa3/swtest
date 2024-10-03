import React from "react";
import {
  Affordable,
  BestMaterials,
  CertifiedExcellence,
  CustomSolution,
  Experienced,
  HighQuality,
  Outstanding,
  TimelyProject,
} from "../icons";

export default function WhyChooseUs() {
  return (
    <div className="container mb-[120px] flex flex-col items-center">
      <h2 className="text-center text-[42px] font-bold leading-[54px]">
        Why Choose Us?
      </h2>
      <p className="max-w-[860px] text-center mt-[20px] text-[#666666] leading-[30px]">
        We understand that your roof is a critical part of protecting your home
        or business, which is why we approach every project—big or small—with
        the same level of care and attention to detail.
      </p>

      <div className="grid grid-cols-4 gap-5 mt-[63px]">
        <div className="col-span-1">
          <div className="p-3 rounded-[30px] flex flex-col items-center gap-5 advantage-card-shadow">
            <div className="">
              <Experienced height={87} width={87} />
            </div>
            <p className="text-center text-[20px] leading-[30px] text-[#666]">
              Experienced and certified roofing professionals
            </p>
          </div>
        </div>

        <div className="col-span-1">
          <div className="p-3 rounded-[30px] flex flex-col items-center gap-5 advantage-card-shadow">
            <div className="">
              <HighQuality height={87} width={87} />
            </div>
            <p className="text-center text-[20px] leading-[30px] text-[#666]">
              High-quality materials and craftsmanship
            </p>
          </div>
        </div>

        <div className="col-span-1">
          <div className="p-3 rounded-[30px] flex flex-col items-center gap-5 advantage-card-shadow">
            <div className="">
              <TimelyProject height={87} width={87} />
            </div>
            <p className="text-center text-[20px] leading-[30px] text-[#666]">
              Timely project completion <br />
              <span className="opacity-0">.</span>
            </p>
          </div>
        </div>

        <div className="col-span-1">
          <div className="p-3 rounded-[30px] flex flex-col items-center gap-5 advantage-card-shadow">
            <div className="">
              <Outstanding height={87} width={87} />
            </div>
            <p className="text-center text-[20px] leading-[30px] text-[#666]">
              Outstanding customer service and support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
