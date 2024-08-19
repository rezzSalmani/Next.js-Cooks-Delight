"use client";
import RecipeItem from "@/components/modules/recipeItem/RecipeItem";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const RecipeSlider = ({ recipes, title }: any) => {
  const [swiperControll, setSwiperControll] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className='w-full h-full border border-[rgba(38,37,34,0.24)] rounded-[32px] p-2 xs:p-4 space-y-5 md:space-y-10'>
      <div className='flex items-center flex-wrap justify-between h-full mt-3 xs:mt-6 xs:mx-4 overflow-hidden'>
        <h5 className='uppercase font-montserrat font-bold text-xl xs:text-2xl sm:text-3xl md:text-[40px]   '>
          {title}
        </h5>
        <div className='flex items-center justify-end  w-fit gap-2 child:block child:w-fit child:border child:rounded-full  child:xs:p-1 child:md:p-1.5 child:cursor-pointer'>
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
              activeIndex >
              recipes.length -
                (typeof window !== "undefined"
                  ? window.innerWidth > 1024
                    ? 4
                    : window.innerWidth < 768
                    ? 2
                    : 3
                  : 1)
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
        className='flex items-center gap-2 xs:gap-4 w-full child:min-w-[320px] child:xs:min-w-[350px]  child:lg:min-w-[532px] overflow-y-hidden overflow-x-hidden whitespace-nowrap '
        style={{ scrollBehavior: "smooth" }}
        id='slider'
        spaceBetween={16}
        slidesPerView={1}
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
        {recipes?.map((item: any) => (
          <SwiperSlide key={item.idMeal}>
            <RecipeItem recipe={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      {recipes?.length === 0 ? (
        <div className='flex items-center justify-center pb-6y md:pb-10'>
          <span className='text-xl text-primary-red text-center'>
            No Recipe Found! Please try Again.
          </span>
        </div>
      ) : null}
    </section>
  );
};

export default RecipeSlider;
