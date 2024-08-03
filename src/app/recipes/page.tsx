import RecipeItem from "@/components/modules/recipeItem/RecipeItem";
import { Homemade_Apple } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { getByCategoryName } from "../actions";

type CategoryType = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};
const HomemadeApple = Homemade_Apple({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});
type SearchParamsType = {
  searchParams?: {
    category?: string;
  };
};
const Recipes = async ({ searchParams }: SearchParamsType) => {
  let data: CategoryType[] | null = null;
  let categoryRecipes: [] | null = null;
  try {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const resData = await res.json();
    data = resData.categories;
  } catch (err) {
    console.log("error=>", err);
  }
  if (searchParams?.category) {
    const data = await getByCategoryName(searchParams.category);
    categoryRecipes = data;
  }

  return (
    <div className='space-y-10'>
      <div className='relative flex flex-col items-center justify-center space-y-4 md:space-y-8 bg-[url("/images/category.jpg")] h-[580px] bg-cover bg-center rounded-3xl text-center text-white overflow-hidden'>
        <span className='absolute inset-0 w-full h-full bg-black/20'></span>
        <h4 className='text-3xl md:text-[50px] lg:text-[80px] font-montserrat font-extrabold uppercase z-20'>
          Recipe Categories
        </h4>
        <span className='inline-block w-[90%] md:w-1/2 text-base md:text-xl lg:text-2xl z-20'>
          Welcome to our categories section, where culinary inspiration meets
          organization! Whether you're a seasoned chef or a beginner in the
          kitchen, we do our best to help you explore a world of flavors through
          various recipe categories
        </span>
      </div>
      <h6 className='text-center text-4xl font-bold font-montserrat '>
        Pick Your Plate
      </h6>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4'>
        {data?.map((category: CategoryType) => (
          <Link
            href={`/recipes?category=${category.strCategory}#recipes`}
            className='flex flex-col items-center justify-center group text-center rounded-2xl shadow-md hover:shadow-lg transition-all ease-linear cursor-pointer space-y-3 px-2 pt-4 border border-transparent hover:border-primary-dark/10 hover:scale-105'
            key={category.idCategory}
          >
            <Image
              src={category.strCategoryThumb}
              className='w-full md:max-h-44 object-cover transition-all ease-linear bg-blend-color-burn rounded-4xl'
              alt='category'
              width={300}
              height={300}
            />
            <span
              className={`${HomemadeApple.className} inline-block w-full text-xl xl:text-2xl  text-ellipsis overflow-hidden text-primary-dark/60 group-hover:text-primary-dark transition-colors ease-linear border-t border-primary-dark/10 py-4 `}
            >
              {category.strCategory}
            </span>
          </Link>
        ))}
      </div>
      {searchParams?.category ? (
        <div
          className='space-y-10'
          id='recipes'
          style={{ scrollBehavior: "smooth" }}
        >
          <h6 className='font-montserrat font-bold text-4xl text-center'>
            All Recipes in {searchParams.category} Category
          </h6>
          <div className='mt-8 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full child:mb-2'>
            {categoryRecipes &&
              categoryRecipes.map((recipe, index) => (
                <RecipeItem recipe={recipe} key={index} />
              ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Recipes;
