"use client";

import { useState } from "react";
import { Minus, Plus } from "../icons";

interface AccordionInterface {
  title: string;
  content: string;
}

export default function AccordionItem({ title, content }: AccordionInterface) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="overflow-hidden">
      <button className="w-full text-left" onClick={toggleAccordion}>
        <div className="flex justify-between">
          <div className="text-[#232323] text-[16px] md:text-[20px] leading-[30px]">
            {title}
          </div>
          <div className="">
            {isOpen ? (
              <Minus width={24} height={26} />
            ) : (
              <Plus width={24} height={26} />
            )}
          </div>
        </div>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out origin-top transform ${
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 h-0"
        }`}
      >
        <div className="mt-2 text-[12px] md:text-[16px] text-[#666666] leading-5 md:leading-[24px]">
          {content}
        </div>
      </div>
    </div>
  );
}
