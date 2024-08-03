import Image from "next/image";
import React from "react";
import knifeSvg from "../../../public/images/svgs/knife.svg";
import measure from "../../../public/images/svgs/measure.svg";
import utensils from "../../../public/images/svgs/utensils.svg";
import RecipeSlider from "@/components/modules/recipeSlider/RecipeSlider";
import { getRandomRecipe, getTips } from "../actions";
import RecipeItem from "@/components/modules/recipeItem/RecipeItem";
import TipsSlider from "@/components/templates/tipsSlider/TipsSlider";
import "swiper/css";
import SubscribeUs from "@/components/modules/subscribe/SubscribeUs";

const TipsTricksPage = async () => {
  const recipes = await getRandomRecipe();
  const { basicsRecipes }: { basicsRecipes: RecipeType[] } = await getTips();
  const { tipsGallery }: TipsGallery = await getTips();
  const { tipsAndTricks }: { tipsAndTricks: RecipeType[] } = await getTips();

  // const tipsGallery: TipsType[] = await getTipsGallery();
  return (
    <section className='space-y-6 md:space-y-10'>
      <div className='flex flex-col lg:flex-row items-center justify-between py-8 md:py-16 gap-4 text-center lg:text-left'>
        <h4 className='font-montserrat font-extrabold text-3xl sm:text-[48px] lg:text-[60px] xl:text-[80px] lg:w-1/2 uppercase leading-[1] '>
          Our Essential Cooking Tips
        </h4>
        <span className='inline-block lg:w-2/5 sm:text-lg lg:text-xl text-primary-dark/60'>
          Welcome to Cooks Delight's treasure trove of cooking wisdom! Whether
          you're a seasoned chef or just starting your culinary journey, our
          cooking tips are designed to elevate your skills, enhance your kitchen
          experience, and bring joy to your cooking adventures.
        </span>
      </div>
      <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-6 lg:gap-10 border border-[rgba(38,37,34,0.24)] rounded-3xl py-6 md:py-10 px-4 lg:px-8 mt-16 child:flex child:items-center child:md:flex-col child:lg:flex-row child:gap-6 child:lg:gap-10'>
        <div>
          <Image
            className='w-10 h-10 sm:w-[64px] sm:h-[64px]'
            src={knifeSvg}
            alt='knife'
          />
          <div className='child:block sm:space-y-2'>
            <span className='font-montserrat md:text-lg font-semibold text-primary-red uppercase'>
              Quality Tools
            </span>
            <span className='font-light text-sm md:text-base w-[90%]'>
              Invest in high-quality knives, cutting boards, and cookware.
            </span>
          </div>
        </div>
        <div>
          <Image
            className='w-10 h-10 sm:w-[64px] sm:h-[64px]'
            src={utensils}
            alt='knife'
          />
          <div className='child:block sm:space-y-2'>
            <span className='font-montserrat md:text-lg font-semibold text-primary-red uppercase'>
              Essential Utensils
            </span>
            <span className='font-light text-sm md:text-base w-[90%]'>
              Have a variety of utensils, including spatulas, tongs, and ladles.
            </span>
          </div>
        </div>
        <div>
          <Image
            className='w-10 h-10 sm:w-[64px] sm:h-[64px]'
            src={measure}
            alt='knife'
          />
          <div className='child:block sm:space-y-2'>
            <span className='font-montserrat md:text-lg font-semibold text-primary-red uppercase'>
              Measuring Accuracy
            </span>
            <span className='font-light text-sm md:text-base w-[90%]'>
              Use measuring cups and spoons for precise ingredient quantities.
            </span>
          </div>
        </div>
      </div>
      <RecipeSlider recipes={recipes} title='Newest recipes' />
      <div className='space-y-4'>
        <h6 className='font-montserrat font-bold text-3xl md:text-[40px] uppercase'>
          Mastering the Basics
        </h6>
        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4  w-full'>
          {basicsRecipes?.map((tips) => (
            <RecipeItem recipe={tips} />
          ))}
        </div>
      </div>
      <TipsSlider tips={tipsGallery} />
      <div className='space-y-4'>
        <h6 className='font-montserrat text-[40px] font-bold uppercase'>
          TIps & tricks
        </h6>
        <div className='grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3'>
          {tipsAndTricks?.map((tip) => (
            <RecipeItem recipe={tip} />
          ))}
        </div>
      </div>
      <SubscribeUs />
    </section>
  );
};

export default TipsTricksPage;
