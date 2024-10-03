import React from "react";
import AccordionItem from "./AccordionItem";

export default function FAQ() {
  return (
    <div className="container">
      <h2 className="text-[37px] md:text-[42px] leading-[45px] md:leading-[36px] font-bold text-center">
        <span className="text-primary">Frequently</span> asked questions
      </h2>
      <p className="text-[16px] md:text-[18px] text-center mt-5 md:mt-[25px] text-[#666666]">
        Everything you need to know about the product and billing.
      </p>

      <div className="mt-[50px] max-w-[768px] mx-auto mb-[120px]">
        <AccordionItem
          title="Windscreen replacement cost?"
          content="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        />
        <div className="border-t my-[30px] border-[#E0E2E6]" />
        <AccordionItem
          title="Should I replace my windscreen with a small chip?"
          content="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        />
        <div className="border-t my-[30px] border-[#E0E2E6]" />
        <AccordionItem
          title="Should I replace my windscreen with a small crack?"
          content="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        />
        <div className="border-t my-[30px] border-[#E0E2E6]" />
        <AccordionItem
          title="Will the rubber seals around the car frame be replaced?"
          content="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        />
        <div className="border-t my-[30px] border-[#E0E2E6]" />
        <AccordionItem
          title="How long does it take to replace a windscreen?"
          content="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        />
      </div>
    </div>
  );
}
