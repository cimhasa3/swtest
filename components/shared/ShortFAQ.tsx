import React from "react";
import AccordionItem from "./AccordionItem";

export default function FAQ() {
  return (
    <div className="container">
      <div className="mt-[50px] max-w-[768px] mx-auto mb-[120px]">
        <AccordionItem
          title="Suffolk County, NY"
          content="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        />
        <div className="border-t my-[30px] border-[#E0E2E6]" />
        <AccordionItem
          title="Nassau County, NY"
          content="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        />
      </div>
    </div>
  );
}
