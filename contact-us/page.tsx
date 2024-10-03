import React from "react";
import PageHero from "../../components/shared/PageHero";
import ShortFaq from "../../components/shared/ShortFaq";
import FAQ from "../../components/shared/FAQ";
import GetInTouch from "../../components/contact_us/GetInTouch";

export default function ContactUsPage() {
  return (
    <div>
      <PageHero
        title="Contact Us"
        description="We’re here to help with all your roofing needs! Whether you have questions about our services"
      />
      <GetInTouch />
      <ShortFaq />
      <FAQ />
    </div>
  );
}
