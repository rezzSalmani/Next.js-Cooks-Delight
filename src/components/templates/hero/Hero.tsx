import Image from "next/image";
import React from "react";
import heroImage from "../../../../public/images/HeroSection.jpg";
type Props = {};

const Hero = (props: Props) => {
  return (
    <section className='w-full'>
      <div className='flex flex-col text-white items-center justify-center gap-3 w-full h-[640px] md:h-[580px] rounded-3xl bg-[url("/images/HeroSection.jpg")] bg-no-repeat bg-cover bg-center overflow-hidden'>
        <h1 className=' text-4xl md:text-[60px] lg:text-[80px] font-montserrat font-extrabold text-center uppercase md:leading-[1] w-[90%] xs:w-4/5 md:w-1/2'>
          Unleash Culinary Excellence
        </h1>
        <h4 className='md:text-xl md:w-1/2 lg:w-1/4 text-center px-3'>
          Explore a world of flavors, discover handcrafted recipes, and let the
          aroma of our passion for cooking fill your kitchen
        </h4>
        <button className='uppercase font-roboto text-sm md:text-base font-semibold py-2 px-4 md:px-6 md:py-3 text-primary-dark bg-primary-orange rounded-3xl mt-3 md:mt-6 active:scale-95 hover:bg-primary-orange/90 hover:shadow-md transition-all ease-linear'>
          explore recipes
        </button>
      </div>
    </section>
  );
};

export default Hero;
