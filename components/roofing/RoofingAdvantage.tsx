import React from "react";
import {
  Affordable,
  BestMaterials,
  CertifiedExcellence,
  CustomSolution,
} from "../icons";

export default function RoofingAdvantage() {
  return (
    <div className="py-[80px] md:py-[120px] relative">
      <div className=""></div>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-5">
          <div className="col-span-1">
            <div className="p-3 rounded-[30px] flex flex-col items-center gap-5 advantage-card-shadow">
              <div className="">
                <CertifiedExcellence height={87} width={87} />
              </div>
              <p className="text-center text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-[#666] hover:text-black">
                Certified excellence and quality guaranteed
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <div className="p-3 rounded-[30px] flex flex-col items-center gap-5 advantage-card-shadow">
              <div className="">
                <Affordable height={87} width={87} />
              </div>
              <p className="text-center text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-[#666] hover:text-black">
                Affordable without compromising workmanship
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <div className="p-3 rounded-[30px] flex flex-col items-center gap-5 advantage-card-shadow">
              <div className="">
                <BestMaterials height={87} width={87} />
              </div>
              <p className="text-center text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-[#666] hover:text-black">
                Only the best materials for long-lasting results
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <div className="p-3 rounded-[30px] flex flex-col items-center gap-5 advantage-card-shadow">
              <div className="">
                <CustomSolution height={87} width={87} />
              </div>
              <p className="text-center text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-[#666] hover:text-black">
                Custom solutions available <br />
                <span className="opacity-0">.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
