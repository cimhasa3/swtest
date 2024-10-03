import React from "react";
import RoofingHero from "../../components/roofing/RoofingHero";
import RoofingContactForm from "../../components/roofing/RoofingContactForm";
import RoofingServices from "../../components/roofing/RoofingService";
import SimpleFeatured from "../../components/shared/SimpleFeatured";
import RoofingOurServices from "../../components/roofing/RoofingOurServices";
import Coupons from "../../components/shared/Coupons";
import ExploreOurGallery from "../../components/shared/ExploreOurGallery";
import RoofingAdvantage from "@/components/roofing/RoofingAdvantage";
import Testimonials from "@/components/shared/Testimonials";
import SingleSubscription from "@/components/landing_page/SingleSubscription";
import FAQ from "@/components/shared/FAQ";
import ShortFaq from "@/components/shared/ShortFaq";

export default function RoofingPage() {
  return (
    <div>
      <RoofingHero />
      <RoofingContactForm />
      <RoofingServices />
      <SimpleFeatured
        image="/images/roofing-simple-featured.png"
        title="Roofers Near Me in Long Island, NY"
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
      <RoofingAdvantage />
      <RoofingOurServices />
      <ExploreOurGallery />
      <Testimonials />
      <SingleSubscription />
      <FAQ />
      <Coupons />
      <ShortFaq />
    </div>
  );
}
