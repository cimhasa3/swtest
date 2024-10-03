import GutterContactForm from "@/components/gutter/GutterContactForm";
import GutterOurServices from "@/components/gutter/GutterOurServices";
import GutterServices from "@/components/gutter/GutterServices";
import ExploreOurGallery from "@/components/shared/ExploreOurGallery";
import PageHeroCTA from "@/components/shared/PageHeroCTA";
import SimpleFeatured from "@/components/shared/SimpleFeatured";
import React from "react";

export default function GutterPage() {
  return (
    <div>
      <PageHeroCTA
        title="Residential Gutter Cleaning Professionals LI!"
        subtitle="Fully Licensed & Insured!"
        description="Gutter Repair Company in Long Island, NY"
        ctaLabel="Get Started"
        ctaHref="#"
        bgImage="/images/banner-gutters.png"
      />
      <GutterContactForm />
      <GutterServices />
      <SimpleFeatured
        title="Gutter Cleaning Services Long Island, NY"
        description={
          <p>
            Looking for gutter cleaning services in Long Island? If leaves and
            debris are clogging your gutters, SafeWay Roofing can help. We
            recommend annual hand cleaning for effective maintenance and
            inspection, ensuring your gutters function properly. For a
            professional cleaning and free estimate, call us at (800) 645-6676.
            <br />
            <br />
            Struggling with clogged gutters in Long Island? SafeWay Roofing
            offers expert gutter cleaning services to remove leaves and debris
            and ensure your system functions efficiently.
          </p>
        }
        image="/images/gutter-simple-featured.png"
      />
      <GutterOurServices />
      <ExploreOurGallery />
    </div>
  );
}
