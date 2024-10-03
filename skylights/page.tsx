import SingleSubscription from "@/components/landing_page/SingleSubscription";
import Coupons from "@/components/shared/Coupons";
import ExploreOurGallery from "@/components/shared/ExploreOurGallery";
import FAQ from "@/components/shared/FAQ";
import ShortFaq from "@/components/shared/ShortFaq";
import SimpleFeatured from "@/components/shared/SimpleFeatured";
import Testimonials from "@/components/shared/Testimonials";
import SkylightAdvantage from "@/components/skylights/SkylightsAdvantages";
import SkylightsHero from "@/components/skylights/SkylightsHero";
import SkylightsOurServices from "@/components/skylights/SkylightsOurServices";
import SkylightsServices from "@/components/skylights/SkylightsServices";
import SkylightsTopFeatured from "@/components/skylights/SkylightsTopFeatured";
import React from "react";

export default function SkylightsPage() {
  return (
    <div>
      <SkylightsHero />
      <SkylightsTopFeatured />
      <SkylightsServices />
      <SimpleFeatured
        imgRight
        image="/images/skylights-simple-featured.png"
        title="Skylight Installation Long Island,"
        description={
          <p>
            At SafeWay Roofing, we provide reliable and competitive roofing
            services throughout Long Island, NY. Our experienced team of
            professional roofers excels in repairs, replacements, and flat roof
            installations for residential, commercial, and industrial
            properties. We ensure that every project is completed flawlessly, on
            time, and within budget. Whether you need a new flat roof or
            maintenance on an existing one, our experts will help you choose the
            right solution for your needs. Contact us today at (800) 645-6676 to
            schedule your roofing inspection and receive a free estimate.
          </p>
        }
      />

      <SkylightAdvantage />
      <SkylightsOurServices />
      <ExploreOurGallery />
      <Testimonials />
      <SingleSubscription />
      <FAQ />
      <Coupons />
      <ShortFaq />
    </div>
  );
}
