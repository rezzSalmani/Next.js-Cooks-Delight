"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Swiper as SwiperType } from "swiper";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const TipsSlider = ({ tips }: { tips: Tip[] }) => {
  const [swiperControll, setSwiperControll] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='p-4 md:p-10 bg-primary-lightBlue rounded-4xl space-y-4 md:space-y-10'>
      <div className='flex items-center justify-between mt-6'>
        <h6 className='font-montserrat text-3xl md:text-[40px]  font-bold '>
          Nourishing Every Palate
        </h6>
        <div className='flex items-center flex-wrap justify-end  w-fit gap-2 child:block child:w-fit child:border child:rounded-full child:p-1 child:md:p-1.5 child:cursor-pointer'>
          {/* move to left */}
          <button
            onClick={() => swiperControll?.slidePrev()}
            className={`${
              activeIndex === 0
                ? "text-primary-dark/40 border-primary-dark/40"
                : "text-primary-dark border-primary-dark"
            }`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 19.5 8.25 12l7.5-7.5'
              />
            </svg>
          </button>
          {/* move to right */}
          <button
            onClick={() => swiperControll?.slideNext()}
            className={`${
              activeIndex > tips.length / 3
                ? "text-primary-dark/40 border-primary-dark/40"
                : "text-primary-dark border-primary-dark"
            }`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m8.25 4.5 7.5 7.5-7.5 7.5'
              />
            </svg>
          </button>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        onSwiper={(swiper) => setSwiperControll(swiper)}
        onSlideChange={() => {
          if (swiperControll?.activeIndex !== undefined) {
            setActiveIndex(swiperControll.activeIndex);
          }
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {tips?.map((tip) => (
          <SwiperSlide key={tip.id}>
            <div
              className={`flex items-end relative bg-center bg-cover min-h-[364px] md:min-h-[464px] bg-no-repeat rounded-3xl overflow-hidden p-6 group`}
              style={{ backgroundImage: `url(${tip.image})` }}
            >
              <span className='absolute inset-0 w-full h-full transition-all ease-in duration-300 custom-dark-overly lg:translate-y-80 group-hover:translate-y-0'></span>
              <div className='child:inline-flex text-[#f0ebe1] z-20 space-y-3 transition-all ease-in duration-300 lg:translate-y-80 group-hover:translate-y-0'>
                <span className='font-montserrat text-2xl font-bold'>
                  {tip.title}
                </span>
                <span className='font-light text-[#f0ebe1]/80'>
                  {tip.description}
                </span>
                <div className='items-center justify-between w-full text-sm pt-2'>
                  <span className='inline-block'>15 min - 01 JUN 23</span>
                  <button className='border border-[#f0ebe1] rounded-3xl py-1.5 px-6'>
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TipsSlider;
