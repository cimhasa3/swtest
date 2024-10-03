import React from "react";
import {
  ChimneyServices,
  FlatRoof,
  RoofingInstallation,
  RoofRepair,
  RoofReplacement,
  SidingWindows,
} from "../icons";
import ServiceCard from "../shared/ServiceCard";

export default function RoofingServices() {
  return (
    <div>
      <div className="container mx-auto mb-[340px]">
        <div className="grid md:grid-cols-3 gap-[320px] md:gap-[21px]">
          <ServiceCard
            title="Roof Repair"
            description="At SafeWay Roofing, we specialize in efficient and reliable roof repairs. Whether you're dealing with leaks, storm damage."
            icon={<RoofRepair height={100} width={100} />}
            image="/images/roofing-image-1.png"
          />
          <ServiceCard
            isMiddle
            title="Roof Replacement"
            description="For expert roof replacement, SafeWay Roofing offers top-quality materials and skilled installation."
            icon={<RoofReplacement height={100} width={100} />}
            image="/images/roofing-image-2.png"
          />
          <ServiceCard
            title="Flat Roof"
            description="SafeWay Roofing offers expert flat roof installation, repair, and maintenance. Our team ensures quality and durability."
            icon={<FlatRoof height={100} width={100} />}
            image="/images/roofing-image-3.png"
          />
        </div>
      </div>
    </div>
  );
}
