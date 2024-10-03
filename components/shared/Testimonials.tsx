"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import React from "react";
import { Star } from "../icons";
import { Autoplay, Controller } from "swiper/modules";

interface TestimonialCardInterface {
  name?: string;
  image?: string;
  message?: string;
}

const TestimonialCard = ({
  name,
  message,
  image,
}: TestimonialCardInterface) => {
  return (
    <div className="bg-[#F7F7F7] rounded-[20px] p-5 card-shadow m-5 cursor-pointer">
      <p className="text-[#666] text-[16px] leading-[26px]">{message}</p>
      <div className="mt-[18px] flex items-center">
        <div className="bg-[#666] h-20 w-20 rounded-full bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${image})`}}></div>
        <div className="ml-2.5">
          <h4 className="text-[22px] font-semibold leading-[34px] text-[#232323]">
            {name}
          </h4>
          <p className="mt-1 text-[#121212] text-opacity-[82%]">Customer</p>
          <div className="mt-2 flex">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <div className="container mb-[120px]">
      <h2 className="text-[42px] font-bold text-center">Testimonials</h2>
      <div className="mt-[50px]">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Controller, Autoplay]}
          autoplay={{ delay: 1500, disableOnInteraction: false }} // Add autoplay configuration
          breakpoints={{
            // When the window width is >= 1024px
            1024: {
              slidesPerView: 3,
            },
            // When the window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // When the window width is <= 767px
            0: {
              slidesPerView: 1, // Show 1 slide on mobile
            },
          }}
        >
          <SwiperSlide>
            <TestimonialCard
              name="Mark T."
              message="I had the pleasure of working with Safeway Home Improvements when our roof sustained significant storm damage. From the initial inspection to the final touches, the entire process was seamless. The team was incredibly professional"
              image="/images/user1.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              name="Gustavo Herwitz"
              message="I had the pleasure of working with Safeway Home Improvements when our roof sustained significant storm damage. From the initial inspection to the final touches, the entire process was seamless. The team was incredibly professional"
              image="/images/user2.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              name="Ahmad Philips"
              message="I had the pleasure of working with Safeway Home Improvements when our roof sustained significant storm damage. From the initial inspection to the final touches, the entire process was seamless. The team was incredibly professional"
              image="/images/user3.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              name="Mark T."
              message="I had the pleasure of working with Safeway Home Improvements when our roof sustained significant storm damage. From the initial inspection to the final touches, the entire process was seamless. The team was incredibly professional"
              image="/images/user1.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              name="Gustavo Herwitz"
              message="I had the pleasure of working with Safeway Home Improvements when our roof sustained significant storm damage. From the initial inspection to the final touches, the entire process was seamless. The team was incredibly professional"
              image="/images/user2.png"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
