import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className='flex items-center flex-col lg:flex-row gap-3 border border-[rgba(38,37,34,0.24)] rounded-4xl p-4 w-full h-full'>
      <div className='flex flex-col items-center gap-3'>
        <div className='flex flex-col md:flex-row items-start w-full h-full gap-3'>
          <div className='flex flex-col items-start justify-center child:block space-y-3 text-left h-1/2 xl:mt-12'>
            <span className='bg-primary-red px-2 py-1 rounded-2xl text-sm font-medium text-white uppercase'>
              about us
            </span>
            <h5 className='text-2xl xs:text-3xl md:text-[40px] font-montserrat font-bold child:block uppercase leading-[1]'>
              Our Culinary Chronicle
            </h5>
            <span className='text-[rgba(38,37,34,0.6)] font-light text-sm md:text-base font-roboto md:w-4/5 xl:leading-[140%] text-justify'>
              Our journey is crafted with dedication, creativity, and an
              unrelenting commitment to delivering delightful culinary
              experiences. Join us in savoring the essence of every dish and the
              stories that unfold.
            </span>
            <button className='text-sm font-medium uppercase text-primary-dark py-1.5 md:py-2 px-3 md:px-6 border border-primary-dark rounded-3xl hover:shadow-md hover:bg-primary-light/30 transition-all ease-linear active:scale-95'>
              Read More
            </button>
          </div>
          <Image
            width={700}
            height={700}
            src={"/images/RecipeCard.jpg"}
            alt='about us image'
            className='rounded-3xl md:w-fit h-[324px] object-cover md:object-none'
          />
        </div>
        <Image
          width={700}
          height={400}
          src={"/images/RecipeCard2.jpg"}
          alt='about us image'
          className='w-full h-[324px] object-cover rounded-3xl '
        />
      </div>
      <div className='h-[324px] lg:h-[665px] w-full lg:max-w-[412px]'>
        <Image
          width={700}
          height={700}
          src={"/images/aboutUs/aboutus.jpg"}
          alt='about us image'
          className=' object-cover object-top lg:object-center h-full rounded-3xl'
        />
      </div>
    </div>
  );
};

export default AboutUs;
