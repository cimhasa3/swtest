import React from "react";

interface PageHeroInterface {
  title: string;
  description: string;
}

export default function PageHero({ title, description }: PageHeroInterface) {
  return (
    <div className="bg-primary flex justify-center items-center py-[138px]">
      <div className="text-white max-w-[579px]">
        <h1 className="font-[800] text-[56px] leading-[80px] text-center">
          {title}
        </h1>
        <p className="mt-[5px] leading-[30px] text-[#F5F5F5] text-center">
          {description}
        </p>
      </div>
    </div>
  );
}
