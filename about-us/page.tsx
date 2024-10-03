import React from "react";
import PageHero from "../../components/shared/PageHero";
import SimpleFeatured from "../../components/shared/SimpleFeatured";
import FeaturedCTA from "../../components/shared/FeaturedCTA";
import AccordionItem from "../../components/shared/AccordionItem";
import WhyChooseUs from "../../components/about_us/WhyChooseUs";
import FAQ from "../../components/shared/FAQ";
import ShortFaq from "../../components/shared/ShortFaq";

export default function AboutUsPage() {
  return (
    <div>
      <PageHero
        title="About Us"
        description="At Safeway Roofing, Chimney, we take pride in being your trusted roofing experts, committed to delivering top-quality services."
      />
      <SimpleFeatured
        image="/images/about-us-simple-featured.png"
        title="Your Trusted Partner for Quality Roofing Solutions"
        description={
          <p>
            Our mission is simple: to provide high-quality roofing solutions
            that meet the unique needs of each customer. We use only premium
            materials and the latest industry techniques to ensure the job is
            done right the first time. Our team is fully licensed, insured, and
            dedicated to maintaining the highest standards of safety and
            craftsmanship.
            <br />
            Our mission is simple: to provide high-quality roofing solutions
            that meet the unique needs of each customer. We use only premium
            materials and the latest industry techniques to ensure the job is
            done right the first time. Our team is fully licensed, insured, and
            dedicated to maintaining the highest standards of safety and
            craftsmanship.
          </p>
        }
      />
      <FeaturedCTA
        image="/images/about-us-featured-cta.png"
        title="Our Mission"
        description={
          <p>
            Our mission is simple: to provide high-quality roofing solutions
            that meet the unique needs of each customer. We use only premium
            materials and the latest industry techniques to ensure the job is
            done right the first time. Our team is fully licensed, insured, and
            dedicated to maintaining the highest standards of safety and
            craftsmanship. <br />
            <br />
            We are committed to delivering high-quality craftsmanship, using
            premium materials, and ensuring every project is completed with
            integrity, precision, and care. Our goal is to exceed customer
            expectations through reliable service, clear communication, and a
            dedication to long-lasting results.
          </p>
        }
        ctaLabel="Talk To a Roofing Specialist"
        ctaHref="#"
      />

      {/* Short */}
      <ShortFaq />

      <WhyChooseUs />
      <FAQ />
    </div>
  );
}
