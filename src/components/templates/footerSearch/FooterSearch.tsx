"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
type Recipe = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
  strCategory: string;
};
const FooterSearch = () => {
  const [recipesDropDown, setRecipesDropDown] = useState(false);
  const [searchedRecipes, setSearchedRecipes] = useState<Recipe[] | null>(null);
  const searchValue = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  async function findRecipes() {
    if (!searchValue.current) return;
    if (searchValue.current.value.length < 3)
      return setError("please enter more then 3 letter");
    try {
      setRecipesDropDown(true);
      setIsLoading(true);
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue.current.value}`
      );
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const resData = await res.json();
      console.log(resData.meals);
      if (!resData.meals) return setSearchedRecipes([]);

      setSearchedRecipes(resData.meals);
    } catch (err) {
      console.log("there was error fetching recipes", err);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className='flex flex-col items-center justify-center gap-3 w-full border-primary-light/10 border-t pt-6'>
      <h6 className=' text-center text-xl font-montserrat font-semibold uppercase'>
        Search Your Favorite Recipe
      </h6>
      <div className='flex items-center bg-white rounded-4xl px-4 py-1'>
        <input
          ref={searchValue}
          type='text'
          className=' outline-none bg-transparent text-primary-dark'
          placeholder='Enter Meal'
        />
        <span
          className='text-primary-dark cursor-pointer hover:animate-pulse'
          onClick={findRecipes}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            />
          </svg>
        </span>
      </div>
      <ul
        className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 w-full transition-all ease-linear duration-300 ${
          recipesDropDown
            ? "h-full translate-y-4 opacity-100 visible"
            : "h-0 -translate-y-4 opacity-0 invisible"
        }`}
      >
        {searchedRecipes?.slice(0, 16).map((recipe) => (
          <li
            className='flex flex-col items-center gap-1 border border-primary-light/50 rounded-3xl p-2 transition-all ease-linear  hover:scale-105 hover:border-primary-orange '
            key={recipe.idMeal}
          >
            <Image
              className='rounded-full w-20 h-20 object-cover'
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              width={100}
              height={100}
            />
            <span className='font-medium font-montserrat text-center mt-2 h-12 line-clamp-2'>
              {recipe.strMeal}
            </span>
            <span className='text-sm text-primary-light/70 line-clamp-1 '>
              {recipe.strCategory}
            </span>
            <Link
              className='text-primary-orange'
              href={"/recipes" + recipe.idMeal}
            >
              Read More
            </Link>
          </li>
        ))}
      </ul>
      {error || searchedRecipes?.length === 0 ? (
        <span className='text-center text-sm font-medium text-primary-orange my-2 tex'>
          {error || "No Recipes found! Please Search another meal."}
        </span>
      ) : null}
    </div>
  );
};

export default FooterSearch;
