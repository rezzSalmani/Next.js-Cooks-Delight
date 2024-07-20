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
    <section className='space-y-10'>
      <div className='flex items-center justify-between py-16'>
        <h4 className='font-montserrat font-extrabold text-[80px] w-1/2 uppercase leading-[1]'>
          Our Essential Cooking Tips
        </h4>
        <span className='inline-block w-2/5 text-xl text-primary-dark/60'>
          Welcome to Cooks Delight's treasure trove of cooking wisdom! Whether
          you're a seasoned chef or just starting your culinary journey, our
          cooking tips are designed to elevate your skills, enhance your kitchen
          experience, and bring joy to your cooking adventures.
        </span>
      </div>
      <div className='flex items-center justify-between gap-10  border border-[rgba(38,37,34,0.24)] rounded-3xl py-10 px-8 mt-16'>
        <div className='flex items-center gap-10'>
          <Image src={knifeSvg} alt='knife' />
          <div className='child:block space-y-2'>
            <span className='font-montserrat text-lg font-semibold text-primary-red uppercase'>
              Quality Tools
            </span>
            <span className='font-light w-[90%]'>
              Invest in high-quality knives, cutting boards, and cookware.
            </span>
          </div>
        </div>
        <div className='flex items-center gap-10'>
          <Image src={utensils} alt='knife' />
          <div className='child:block space-y-2'>
            <span className='font-montserrat text-lg font-semibold text-primary-red uppercase'>
              Essential Utensils
            </span>
            <span className='font-light w-[90%]'>
              Have a variety of utensils, including spatulas, tongs, and ladles.
            </span>
          </div>
        </div>
        <div className='flex items-center gap-10'>
          <Image src={measure} alt='knife' />
          <div className='child:block space-y-2'>
            <span className='font-montserrat text-lg font-semibold text-primary-red uppercase'>
              Measuring Accuracy
            </span>
            <span className='font-light w-[90%]'>
              Use measuring cups and spoons for precise ingredient quantities.
            </span>
          </div>
        </div>
      </div>
      <RecipeSlider recipes={recipes} title='Newest recipes' />
      <div className=''>
        <h6 className='font-montserrat font-bold text-[40px] uppercase'>
          Mastering the Basics
        </h6>
        <div className='grid grid-cols-3 gap-4 w-full'>
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
        <div className='grid grid-cols-3 gap-3'>
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
