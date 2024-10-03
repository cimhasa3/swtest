import React from "react";
import ChimneyContactForm from "../../components/chimneys/ChimneyContactForm";
import ChimneyServices from "../../components/chimneys/ChimneyServices";
import SimpleFeatured from "../../components/shared/SimpleFeatured";
import ExploreOurGallery from "../../components/shared/ExploreOurGallery";
import ChimneyOurServices from "../../components/chimneys/ChimneyOurServices";
import PageHeroCTA from "../../components/shared/PageHeroCTA";

export default function ChimneysPage() {
  return (
    <div>
      <PageHeroCTA
        title="Need your chimney serviced?"
        subtitle="Providing Top-Notch Chimney Services For Over 20 Years"
        description="If you’re looking for a chimney service business LI that’s high-quality, you’ve come to the right place."
        ctaLabel="Get Started"
        ctaHref="#"
        bgImage="/images/chimney-header.png"
      />
      <ChimneyContactForm />
      <ChimneyServices />
      <SimpleFeatured
        title="Long Island NY Chimney Services"
        description="A chimney inspection is crucial for spotting unsafe conditions and leaks before using your chimney. If you notice water coming through the bricks, we can locate the source and waterproof the area to keep it dry. We offer free estimates for chimney repairs in Long Island, NY, including mortar and brick repairs, and installation of caps or covers for added protection. Regular application of a waterproof sealer will safeguard your chimney from water damage, preventing costly repairs and ensuring long-term safety. Call us today to address any issues and protect your chimney from further damage."
        image="/images/chimney-simple-featured.png"
      />
      <ChimneyOurServices />
      <ExploreOurGallery />
    </div>
  );
}
