import Image from "next/image";
import Link from "next/link";
import React from "react";
import { memo } from "react";
type RecipeItemProps = {
  recipe: {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
    strCategory?: string;
    strInstructions: string;
  };
  activeCategory?: string | null;
};
function checkIfVegan(food: string) {
  return (
    food.includes("Potatoes") ||
    food.includes("Apple") ||
    food.includes("Vegan")
  );
}
const RecipeItem = ({ recipe, activeCategory = null }: RecipeItemProps) => {
  return (
    <div className='flex flex-col shadow-sm rounded-4xl overflow-hidden '>
      <Image
        src={recipe.strMealThumb}
        alt='featured recipes'
        width={500}
        height={500}
        className='fix-Image rounded-t-4xl h-40 md:h-[234px] object-cover object-center hover:scale-105 transition-all ease-linear'
      />
      <div className='relative px-3 md:px-6 pt-3 pb-3 bg-[#fffbf2] rounded-b-4xl space-y-1 md:space-y-3 h-full'>
        {/* special recipe */}
        <span className='absolute -top-12 right-10'>
          {activeCategory === "Vegan" ||
          activeCategory === "Vegetarian" ||
          (recipe?.strCategory && recipe?.strCategory === "Vegetarian") ||
          checkIfVegan(recipe.strMeal) ? (
            <Image
              src={"/images/svgs/vegan.svg"}
              alt='special recipe'
              className='w-16 h-16'
              width={70}
              height={70}
            />
          ) : null}
        </span>
        <h6 className='font-montserrat font-bold text-base sm:text-xl md:text-2xl truncate  hover:animate-pulse'>
          {recipe.strMeal}
        </h6>
        <span className='font-light text-sm md:text-base text-primary-dark/50 text-wrap line-clamp-3'>
          {(recipe.strInstructions && recipe.strInstructions) ||
            `Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken`}
        </span>

        <span className='flex items-center font-semibold text-xs gap-1'>
          <span>40 Min</span>-<span>easy prep</span>-<span>3 serves</span>
        </span>
        <div className='w-full flex items-end justify-end pt-1'>
          <Link
            href={"/recipes/" + recipe.idMeal}
            className='border font-semibold font-roboto text-primary-dark/70 text-xs xs:text-sm  hover:text-primary-dark border-primary-dark/50 hover:border-primary-dark uppercase rounded-4xl  px-3 py-1 md:px-6 md:py-2 transition-all ease-linear hover:shadow-md active:scale-95'
          >
            view recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(RecipeItem);
