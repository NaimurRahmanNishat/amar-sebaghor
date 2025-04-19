"use client";
import bkash from "../../../public/sliderOne.png";
import nrbBank from "../../../public/sliderTwo.png";
import primeBank from "../../../public/sliderThree.png";
import selcommerce from "../../../public/sliderFour.jpeg";
import masterCard from "../../../public/sliderFive.jpg";
import estrnBank from "../../../public/sliderSix.png";
import sliderSeven from "../../../public/sliderSeven.png";
import sliderEight from "../../../public/sliderEight.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const partners = [
  bkash,
  nrbBank,
  primeBank,
  selcommerce,
  masterCard,
  estrnBank,
  sliderSeven,
  sliderEight,
];

const Slider = () => {
  return (
    <div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 6 },
          }}
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <Image
                src={partner}
                alt="partner-logo"
                className="w-[100px] h-[50px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
};

export default Slider;
