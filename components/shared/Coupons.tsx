import React from "react";

export default function Coupons() {
  return (
    <div className="container flex justify-center mb-[120px]">
      <div className="w-[974px]">
        <h2 className="font-bold text-[46px] text-center">Coupons</h2>

        <div className="grid md:grid-cols-3 gap-[30px] mt-[50px]">
          <div className="col-span-1 py-4">
            <div
              style={{ backgroundImage: "url(/images/coupons-bg-1.png)" }}
              className="px-5 pt-[31px] pb-4 rounded-[15px] bg-center bg-cover bg-no-repeat"
            >
              <h3 className="text-center text-[28px] text-[#102039] leading-[39px] font-bold">
                Any Roof Repairs
              </h3>
              <div className="mt-[30px]">
                {/* Pricing */}
                <h1 className="text-center font-bold text-primary">
                  <span className="text-[24px] ">$</span>
                  <span className="text-[54px]">200</span>
                  <span className="text-[26px]"> off</span>
                </h1>

                <div className="mt-[70px]">
                  <p className="text-center text-[#787878] text-[20px] leading-[30px]">
                    minumum purchase of $1000 required
                  </p>
                </div>
                <div className="mt-[22px]">
                  <p className="text-[#222222] text-opacity-40 text-[14px]">
                    <span className="text-[#222222]">Valid until:</span>
                    15-4-2024
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div
              style={{ backgroundImage: "url(/images/coupons-bg-2.png)" }}
              className="px-5 pt-[31px] pb-4 rounded-[15px] bg-center bg-cover bg-no-repeat"
            >
              <h3 className="text-center text-[28px] text-white leading-[39px] font-bold">
                Any Roof Repairs
              </h3>
              <div className="mt-[30px]">
                {/* Pricing */}
                <h1 className="text-center font-bold text-white">
                  <span className="text-[24px]">$</span>
                  <span className="text-[57px]">500</span>
                  <span className="text-[26px]"> off</span>
                </h1>

                <div className="mt-[96px]">
                  <p className="text-center text-white text-[20px] leading-[30px]">
                    minumum purchase of $9000 required
                  </p>
                </div>
                <div className="mt-[22px]">
                  <p className="text-white text-opacity-40 text-[14px]">
                    <span className="text-white">Valid until:</span>
                    15-4-2024
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 py-4">
            <div
              style={{ backgroundImage: "url(/images/coupons-bg-3.png)" }}
              className="px-5 pt-[31px] pb-4 rounded-[15px] bg-center bg-cover bg-no-repeat"
            >
              <h3 className="text-center text-[28px] text-[#102039] leading-[39px] font-bold">
                Chimney Repairs
              </h3>
              <div className="mt-[30px]">
                {/* Pricing */}
                <h1 className="text-center font-bold text-primary">
                  <span className="text-[24px]">$</span>
                  <span className="text-[54px]">20%</span>
                  <span className="text-[26px]"> off</span>
                </h1>

                <div className="mt-[70px]">
                  <p className="text-center text-[#787878] text-[20px] leading-[30px]">
                    minumum purchase of $800 required
                  </p>
                </div>
                <div className="mt-[22px]">
                  <p className="text-[#222222] text-opacity-40 text-[14px]">
                    <span className="text-[#222222]">Valid until:</span>
                    15-4-2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
