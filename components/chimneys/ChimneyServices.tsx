import React from "react";
import {
  CleanChimney,
  FixLeakyChimneys,
  FlatRoof,
  RebuildChimney,
  RoofingInstallation,
  RoofRepair,
  RoofReplacement,
  SidingWindows,
} from "../icons";
import ServiceCard from "../shared/ServiceCard";

export default function ChimneyServices() {
  return (
    <div>
      <div className="container mx-auto mb-[340px]">
        <div className="grid grid-cols-3 gap-[21px]">
          <ServiceCard
            title="We Clean Chimneys!"
            description="We provide thorough, mess-free chimney cleaning to keep your fireplace safe."
            icon={<CleanChimney height={100} width={100} />}
            image="/images/clean-chimneys.png"
          />
          <ServiceCard
            isMiddle
            title="We Rebuild Chimneys!"
            description="At Safeway Roofing and Chimney Inc., we specialize in rebuilding chimneys to ensure safety and functionality."
            icon={<RebuildChimney height={100} width={100} />}
            image="/images/rebuild-chimneys.png"
          />
          <ServiceCard
            title="We Fix Leaky Chimneys!"
            description="At SafeWay Roofing and Chimney Inc., we specialize in repairing leaky chimneys. Our expert team will identify and fix any issues"
            icon={<FixLeakyChimneys height={100} width={100} />}
            image="/images/fix-leaky-chimneys.png"
          />
        </div>
      </div>
    </div>
  );
}
