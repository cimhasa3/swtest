import React from "react";
import { ChimneyServices, RoofingInstallation, SidingWindows } from "../icons";
import ServiceCard from "../shared/ServiceCard";

export default function Services() {
  return (
    <div>
      <div className="container mx-auto mb-[340px]">
        <div className="grid md:grid-cols-3 gap-[320px] md:gap-[21px]">
          <ServiceCard
            title="Roofing Installation"
            description="When your roof shows signs of damage, prompt repairs are crucial. Our team is here to help, offering expert repair and replacement"
            icon={<RoofingInstallation height={100} width={100} />}
            image="/images/roofing-installation.png"
          />
          <ServiceCard
            isMiddle
            title="Siding & Windows"
            description="Our team provides rapid,effective siding repairs,siding & Window replacment"
            icon={<SidingWindows height={100} width={100} />}
            image="/images/siding-windows.png"
          />
          <ServiceCard
            title="Chimney Services"
            description="Our team provides export chimney repair and maintence to ensure your system is safe and efficient"
            icon={<ChimneyServices height={100} width={100} />}
            image="/images/chimney-services.png"
          />
        </div>
      </div>
    </div>
  );
}
