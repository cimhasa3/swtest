import Image from "next/image";
import React from "react";

interface SimpleFeaturedInterface {
  image: string;
  title: string;
  description: any;
  imgRight?: boolean;
}
export default function SimpleFeatured({
  image,
  title,
  description,
  imgRight = false,
}: SimpleFeaturedInterface) {
  return (
    <div className="container mx-auto py-[120px]">
      <div className="grid md:grid-cols-2 gap-[76px]">
        {!imgRight && (
          <div className="col-span-1">
            {/* @ts-ignore */}
            <Image src={image} height={469} width={539} alt={title} />
          </div>
        )}

        <div className="col-span-1">
          <h2 className="text-[42px] font-bold leading-[54px]">{title}</h2>
          <div className="mt-[15px] text-[#666666] leading-[30px]">
            {description}
          </div>
        </div>

        {imgRight && (
          <div className="col-span-1">
            {/* @ts-ignore */}
            <Image src={image} height={469} width={539} alt={title} />
          </div>
        )}
      </div>
    </div>
  );
}
