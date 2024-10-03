import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Link from "next/link";

interface PageHeroCTAInterface {
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  bgImage: string;
}

export default function PageHeroCTA({
  title,
  subtitle,
  description,
  ctaLabel,
  ctaHref,
  bgImage,
}: PageHeroCTAInterface) {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="h-[458px] bg-[#009DDC] flex  items-center"
    >
      <div className="container text-white">
        <h1 className="text-[56px] leading-[64px] font-extrabold  text-center max-w-[918px] mx-auto">
          {title}
        </h1>
        <h4 className="text-center mt-[15px] text-[22px] leading-[30px] text-[#F5F5F5] font-medium">
          {subtitle}
        </h4>
        <p className="mt-5 text-center max-w-[651px] mx-auto">{description}</p>

        <div className="flex justify-center mt-[25px]">
          <Link href={ctaHref}>
            <PrimaryButton
              className="bg-white font-medium px-5"
              style={{
                color: "#232323",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
            >
              {ctaLabel}
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
