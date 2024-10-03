import React from "react";
import { Checkmark } from "../icons";

export default function SkylightsOurServices() {
  return (
    <div className="container mx-auto mb-[120px]">
      <div className="flex justify-center">
        <h2 className="text-center text-[46px] text-[#232323] font-bold leading-[66px] max-w-[650px]">
          our Skylight services Long Island INCLUDE
        </h2>
      </div>
      <div className="mt-[50px] text-[16px]">
        <div className="grid grid-cols-4 gap-5">
          <div className="bg-[#F7F7F7] hover:bg-white rounded-[20px] py-[26px] px-[32px] our-services-card-shadow">
            <div className="mt-2.5">
              <ul className="flex flex-col gap-3">
                <li>
                  <div className="flex items-center gap-2.5">
                    <Checkmark height={15} width={15} />
                    <div className="text-[#666666]">Skylight Leak Repair</div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2.5">
                    <Checkmark height={15} width={15} />
                    <div className="text-[#666666]">Skylight Flashing Repair</div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2.5">
                    <Checkmark height={15} width={15} />
                    <div className="text-[#666666]">Skylight Flashing Repair</div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2.5">
                    <Checkmark height={15} width={15} />
                    <div className="text-[#666666]">Skylight Snow Removal</div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2.5">
                    <Checkmark height={15} width={15} />
                    <div className="text-[#666666]">Skylight Covers</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* 2 */}
          <div className="bg-[#F7F7F7] hover:bg-white rounded-[20px] py-[26px] px-[32px] our-services-card-shadow">
            <div className="mt-2.5">
              <ul className="flex flex-col gap-3">
                <li>
                  <div className="flex items-center gap-2.5">
                    <Checkmark height={15} width={15} />
                    <div className="text-[#666666]">Roof Framing</div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2.5">
                    <Checkmark height={15} width={15} />
                    <div className="text-[#666666]">Roof Construction</div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2.5">
                    <Checkmark height={15} width={15} />
                    <div className="text-[#666666]">
                      Asphalt Shingle Roofing
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2.5">
                    <Checkmark height={15} width={15} />
                    <div className="text-[#666666]">Cedar Shake Roofing</div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2.5">
                    <Checkmark height={15} width={15} />
                    <div className="text-[#666666]">Tile Roofing</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* 3 */}
          <div className="bg-[#F7F7F7] hover:bg-white rounded-[20px] py-[26px] px-[32px] our-services-card-shadow">
            <div className="mt-2.5">
              <ul className="flex flex-col gap-3">
                <li>
                  <div className="flex items-center gap-2.5">
                    <Checkmark height={15} width={15} />
                    <div className="text-[#666666]">Slate Roofing</div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2.5">
                    <Checkmark height={15} width={15} />
                    <div className="text-[#666666]">Roof Fascia Repair</div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2.5">
                    <Checkmark height={15} width={15} />
                    <div className="text-[#666666]">Roof Tarp Installation</div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2.5">
                    <Checkmark height={15} width={15} />
                    <div className="text-[#666666]">Roof Waterproofing</div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2.5">
                    <Checkmark height={15} width={15} />
                    <div className="text-[#666666]">Roof Flashing Repair</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* 4 */}
          <div className="bg-[#F7F7F7] hover:bg-white rounded-[20px] py-[26px] px-[32px] our-services-card-shadow">
            <div className="mt-2.5">
              <ul className="flex flex-col gap-3">
                <li>
                  <div className="flex items-center gap-2.5">
                    <Checkmark height={15} width={15} />
                    <div className="text-[#666666]">Flat Roofing</div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2.5">
                    <Checkmark height={15} width={15} />
                    <div className="text-[#666666]">Flat Roof Repair</div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2.5">
                    <Checkmark height={15} width={15} />
                    <div className="text-[#666666]">Flat Roof Replacement</div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2.5">
                    <Checkmark height={15} width={15} />
                    <div className="text-[#666666]">Flat Roof Installation</div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2.5">
                    <Checkmark height={15} width={15} />
                    <div className="text-[#666666]">Torch Down Roofing</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
