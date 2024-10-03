import React from "react";

interface ServiceCardInterface {
  title: string;
  icon: any;
  description: string;
  image: string;
  isMiddle?: boolean;
}

export default function ServiceCard({
  title,
  description,
  image,
  icon,
  isMiddle,
}: ServiceCardInterface) {
  return (
    <div className="rounded-[20px] relative max-w-[400px]">
      <div
        className="h-[313px] bg-cover bg-center bg-no-repeat overflow-hidden rounded-[20px]"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      <div className="absolute left-[125px] md:left-[150px] top-[250px] md:top-[263px]">
        {icon}
      </div>

      <div className="p-[25px] pt-[147px] service-card-shadow rounded-[20px] absolute top-[250px] h-[340px]">
        <h3
          className={`text-center text-[24px] md:text-[28px] leading-[28px] font-extrabold ${
            isMiddle
              ? `text-primary
        `
              : `text-[#232323]`
          }`}
        >
          {title}
        </h3>
        <p className="text-[16px] leading-[26px] text-center mt-[18px] md:mt-5 text-[#666] pb-[11px]">
          {description}
        </p>
      </div>
    </div>
  );
}
