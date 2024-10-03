import React from "react";
import {
  CleanChimney,
  FixLeakyChimneys,
  GutterCleaning,
  GutterRepair,
  GutterReplacement,
  RebuildChimney,
} from "../icons";
import ServiceCard from "../shared/ServiceCard";

export default function GutterServices() {
  return (
    <div>
      <div className="container mx-auto mb-[340px]">
        <div className="grid grid-cols-3 gap-[21px]">
          <ServiceCard
            title="Gutter Repair"
            description="SafeWay Roofing provides expert gutter repair services to fix cracks, gaps, and loose sections. Ensure your gutters."
            icon={<GutterRepair height={100} width={100} />}
            image="/images/gutter-repair.png"
          />
          <ServiceCard
            isMiddle
            title="Gutter Cleaning"
            description="Regular gutter cleaning is vital to prevent water damage and maintain your property’s integrity. Our expert team at Safeway Roofing"
            icon={<GutterCleaning height={100} width={100} />}
            image="/images/gutter-cleaning.png"
          />
          <ServiceCard
            title="Gutter Replacement"
            description="Upgrade your property's protection with expert gutter replacement from SafeWay Roofing. Our high-quality, durable gutters"
            icon={<GutterReplacement height={100} width={100} />}
            image="/images/gutter-replacement.png"
          />
        </div>
      </div>
    </div>
  );
}
