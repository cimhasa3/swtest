import Image from "next/image";
import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Link from "next/link";

interface FeaturedCTAInterface {
  image: string;
  title: string;
  description: any;
  ctaLabel: string;
  ctaHref: string;
}

export default function FeaturedCTA({
  image,
  title,
  description,
  ctaHref,
  ctaLabel,
}: FeaturedCTAInterface) {
  return (
    <div className="bg-[#007EB1]">
      <div className="container mx-auto pt-[78px] pb-[68px]">
        <div className="grid md:grid-cols-2 gap-[78px]">
          <div className="col-span-1">
            <h2 className="text-[34px] md:text-[46px] font-bold text-white">{title}</h2>
            <div className="py-5 text-white font-[300] text-[16px] md:text-[18px] leading-[30px]">
              {description}
            </div>

            {/* @ts-ignore */}
            <Link href={ctaHref || "#"}>
              {/* @ts-ignore */}
              <PrimaryButton style={{ color: "#000000" }}
                className="px-[40px] text-black bg-white text-[18px] font-medium "
              >
                {ctaLabel}
              </PrimaryButton>
            </Link>
          </div>
          <div className="col-span-1">
            {/* @ts-ignore */}
            <img src={image} height={563} width={602} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
}
