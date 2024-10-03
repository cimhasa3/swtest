"use client";

import Image from "next/image";
import React, { useState } from "react";

interface ImageItemInterface {
  image: string;
  isSmall?: boolean;
}

export const ImageItem = ({ image, isSmall }: ImageItemInterface) => {
  return (
    <div
      className={`${
        isSmall ? `col-span-4 md:col-span-1` : `col-span-4 md:col-span-2`
      } h-[378px] bg-no-repeat bg-cover bg-center rounded-[30px]`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    ></div>
  );
};

interface ExploreOurGalleryInterface {
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
}

export default function ExploreOurGallery({
  image1 = "/images/gallery-roofing-img-1.png",
  image2 = "/images/gallery-roofing-img-1.png",
  image3 = "/images/gallery-roofing-img-1.png",
  image4 = "/images/gallery-roofing-img-1.png",
  image5 = "/images/gallery-roofing-img-1.png",
  image6 = "/images/gallery-roofing-img-1.png",
}: ExploreOurGalleryInterface) {
  const [activeTab, setActiveTab] = useState("ALL");

  return (
    <div className="container mb-[120px] ">
      <div className="md:w-[510px] mx-auto">
        <h2 className="text-[36px] md:text-[46px] font-bold text-center">
          Explore Our Gallery
        </h2>
        <p className="mt-5 text-[#787878] text-[16px] leading-[25px] text-center">
          Trage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate
        </p>
      </div>

      {/* Tab */}
      <div className="mx-auto px-2 md:px-10 py-6 border-[2px] rounded-[10px] md:w-[742px] flex justify-between mt-[50px]">
        <div
          onClick={() => {
            setActiveTab("ALL");
          }}
          className={`cursor-pointer font-medium text-[12px] md:text-[18px] px-2 md:px-0 ${
            activeTab === "ALL" ? "text-primary font-bold" : "text-[#121212]"
          }`}
        >
          ALL
        </div>
        <div
          onClick={() => {
            setActiveTab("COMMERICAL");
          }}
          className={`cursor-pointer font-medium text-[12px] md:text-[18px] px-2 md:px-0 ${
            activeTab === "COMMERICAL"
              ? "text-primary font-bold"
              : "text-[#121212]"
          }`}
        >
          COMMERICAL
        </div>
        <div
          onClick={() => {
            setActiveTab("INDUSTRIAL");
          }}
          className={`cursor-pointer font-medium text-[12px] md:text-[18px] px-2 md:px-0 ${
            activeTab === "INDUSTRIAL"
              ? "text-primary font-bold"
              : "text-[#121212]"
          }`}
        >
          INDUSTRIAL
        </div>
        <div
          onClick={() => {
            setActiveTab("RESIDENTIAL");
          }}
          className={`cursor-pointer font-medium text-[12px] md:text-[18px] px-2 md:px-0 ${
            activeTab === "RESIDENTIAL"
              ? "text-primary font-bold"
              : "text-[#121212]"
          }`}
        >
          RESIDENTIAL
        </div>
      </div>

      <div className="mt-[50px]">
        <div className="grid grid-cols-4 gap-[22px]">
          <ImageItem image={image1} />
          <ImageItem isSmall image={image2} />
          <ImageItem isSmall image={image3} />
          <ImageItem isSmall image={image4} />
          <ImageItem isSmall image={image5} />
          <ImageItem image={image6} />
        </div>
      </div>
    </div>
  );
}
