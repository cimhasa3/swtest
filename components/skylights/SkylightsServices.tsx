import React from "react";
import {
  ChimneyServices,
  RoofingInstallation,
  SidingWindows,
  SkylightInstallation,
  SkylightRepair,
  SkylightReplacement,
} from "../icons";
import ServiceCard from "../shared/ServiceCard";

export default function SkylightsServices() {
  return (
    <div>
      <div className="container mx-auto mb-[340px]">
        <div className="grid md:grid-cols-3 gap-[320px] md:gap-[21px]">
          <ServiceCard
            title="Skylight REPAIR"
            description="At SafeWay Roofing, we specialize in efficient and reliable roof repairs. Whether you're dealing with leaks, storm damage."
            icon={<SkylightRepair height={100} width={100} />}
            image="/images/skylights-service1.png"
          />
          <ServiceCard
            isMiddle
            title="Skylight Replacement"
            description="For expert roof replacement, SafeWay Roofing offers top-quality materials and skilled installation."
            icon={<SkylightReplacement height={100} width={100} />}
            image="/images/skylights-service2.png"
          />
          <ServiceCard
            title="New Skylight Installation"
            description="SafeWay Roofing offers expert flat roof installation, repair, and maintenance. Our team ensures quality and durability."
            icon={<SkylightInstallation height={100} width={100} />}
            image="/images/skylights-service3.png"
          />
        </div>
      </div>
    </div>
  );
}
