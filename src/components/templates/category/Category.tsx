"use client";
import RecipeItem from "@/components/modules/recipeItem/RecipeItem";
import React, { useEffect, useState } from "react";
import { CategoryItem } from "@/app/page";
import Image from "next/image";
import loader from "../../../../public/images/svgs/loading.gif";
interface CategoryProps {
  CATEGORY_ITEMS: CategoryItem[] | null;
}
// const CATEGORY_ITEMS = [
//   "All",
//   "vegan",
//   "breakfast",
//   "lunch",
//   "dinner",
//   "dessert",
//   "quick bite!",
// ];

const Category = ({ CATEGORY_ITEMS }: CategoryProps) => {
  const [activeCategory, setActiveCategory] = useState("Beef");
  const [categoryRecipes, setCategoryRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [recipeCount, setRecipeCount] = useState(8);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    getRecipeBaseCategory(activeCategory);
    setRecipeCount(8);
  }, [activeCategory]);

  async function getRecipeBaseCategory(categoryTitle: string) {
    try {
      setError(null);
      setIsLoading(true);
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryTitle}`
      );
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setCategoryRecipes(data.meals);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setError(
        "There was a Problem in getting Recipes. Please Try again Later!"
      );
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className='mt-20'>
      <div className='flex flex-col items-center justify-center child:block space-y-3 text-center '>
        <span className='bg-primary-red px-2 py-1 rounded-2xl text-sm font-medium text-white uppercase'>
          Recipes
        </span>
        <h5 className='text-[40px] font-montserrat font-bold child:block uppercase leading-10'>
          Embark on a<span>journey</span>
        </h5>
        <span className='text-[rgba(38,37,34,0.6)] font-light font-roboto w-4/5 leading-[140%]'>
          With our diverse collection of recipes we have something to satisfy
          every palate.
        </span>
      </div>
      <div className='flex items-center justify-center flex-wrap gap-3 mt-10'>
        {CATEGORY_ITEMS?.map((item, index) => (
          <button
            className={`font-roboto text-sm font-medium hover:text-primary-dark px-3 md:px-6 py-1 md:py-2 rounded-3xl border border-primary-dark/40 hover:border-primary-dark transition-all ease-linear uppercase hover:shadow-md active:scale-95 ${
              activeCategory === item.strCategory
                ? "bg-primary-green text-primary-dark"
                : "bg-transparent text-primary-dark/50"
            }`}
            key={index}
            onClick={() => setActiveCategory(item.strCategory)}
          >
            {item.strCategory}
          </button>
        ))}
      </div>
      {isLoading && (
        <div className='flex items-center justify-center w-full'>
          <Image
            src={loader}
            height={400}
            width={400}
            alt='Loading...'
            className='mix-blend-multiply'
          ></Image>
        </div>
      )}
      {error && !categoryRecipes.length ? (
        <div className='flex items-center justify-center py-10 md:py-20'>
          <span className='text-center font-montserrat font-medium text-primary-red'>
            {error}
          </span>
        </div>
      ) : (
        ""
      )}
      <div className='mt-8 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full child:mb-2'>
        {/* https://api.spoonacular.com/recipes/random?apiKey=c1836382aabf4e02baeba995e73d6d8a&number=12&include-tags=breakfast,lunch,dinner */}
        {!isLoading &&
          categoryRecipes
            ?.slice(0, recipeCount)
            .map((recipe, index) => (
              <RecipeItem
                recipe={recipe}
                key={index}
                activeCategory={activeCategory}
              />
            ))}
      </div>
      <div className='flex items-center justify-center py-5 md:py-10'>
        {!isLoading && categoryRecipes.length > 8 ? (
          <button
            className='border border-primary-dark/50  text-sm md:text-base rounded-4xl px-3 md:px-6 py-1.5 md:py-3 font-montserrat  shadow-md hover:shadow-xl transition-all ease-linear active:scale-95 hover:font-medium active:font-medium active:shadow-none hover:border-primary-dark'
            onClick={() => {
              setRecipeCount((prev) => (prev === 8 ? 12 : 8));
            }}
          >
            {recipeCount === 8 ? " Show More" : "Show Less"}
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Category;
