import MasonryContactForm from "@/components/masonry/MasonryContactForm";
import MasonryServices from "@/components/masonry/MasonryServices";
import PageHeroCTA from "@/components/shared/PageHeroCTA";
import React from "react";

export default function MasonryPage() {
  return (
    <div>
      <PageHeroCTA
        title="Masonry Services in Long Island"
        subtitle="Residential & Commercial Masonry Restoration LI!"
        description="Serving Long Island for over 20 years and 10,000 customers."
        ctaLabel="Get Started"
        ctaHref="#"
        bgImage="/images/masonry-header.png"
      />
      <MasonryContactForm />
      <MasonryServices />
    </div>
  );
}
