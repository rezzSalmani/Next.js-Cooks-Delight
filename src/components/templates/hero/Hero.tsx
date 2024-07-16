import Image from "next/image";
import React from "react";
import heroImage from "../../../../public/images/HeroSection.jpg";
type Props = {};

const Hero = (props: Props) => {
  return (
    <div className='w-full'>
      <div className='flex flex-col text-white items-center justify-center gap-3 w-full h-[580px] rounded-3xl bg-[url("/images/HeroSection.jpg")] bg-no-repeat bg-cover bg-center'>
        <h1 className='flex flex-col items-center md:text-[60px] lg:text-[80px] font-roboto font-bold uppercase leading-[1]'>
          Unleash Culinary
          <span>Excellence</span>
        </h1>
        <h4 className='text-xl md:w-1/2 lg:w-1/4 text-center'>
          Explore a world of flavors, discover handcrafted recipes, and let the
          aroma of our passion for cooking fill your kitchen
        </h4>
        <button className='uppercase font-roboto font-medium px-6 py-3 text-primary-dark bg-primary-orange rounded-3xl mt-6 active:scale-95 hover:bg-primary-orange/90 hover:shadow-md transition-all ease-linear'>
          explore recipes
        </button>
      </div>
    </div>
  );
};

export default Hero;
