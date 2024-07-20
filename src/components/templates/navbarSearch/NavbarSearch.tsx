"use client";
import { getSearchRecipe } from "@/app/actions";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Recipe = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};
const NavbarSearch = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean | null>(null);
  const [searchedRecipes, setSearchedRecipes] = useState<Recipe[]>([]);
  const searchValue = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const searchBox = useRef<HTMLDivElement | null>(null);

  // async function findRecipes() {
  //   if (!searchValue.current) return;
  //   setIsLoading(true);
  //   const res = await getSearchRecipe(searchValue.current.value);
  //   if (res.meals) {
  //     setSearchedRecipes(res.meals);
  //   }

  //   console.log(res);
  //   setIsLoading(false);
  // }
  async function findRecipes() {
    try {
      setIsLoading(true);
      if (!searchValue.current) return;
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue.current.value}`
      );
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const resData = await res.json();
      setSearchedRecipes(resData.meals);
    } catch (err) {
      console.log("there was error fetching recipes", err);
    } finally {
      setIsLoading(false);
    }
  }
  const useClickOutSide = (
    onClose: any,
    modalRef: React.RefObject<HTMLDivElement>
  ): void => {
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target;
        if (
          modalRef.current &&
          target instanceof Node &&
          !modalRef.current.contains(target)
        ) {
          onClose();
        }
      };
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
    }, [onClose, modalRef]);
  };

  useClickOutSide(() => setIsSearchOpen(false), searchBox);

  return (
    <div className='relative flex items-center gap-3 '>
      <span
        className='rounded-2xl p-3 bg-[#262522]/5 cursor-pointer'
        onClick={() => setIsSearchOpen(true)}
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
      <div
        className={`absolute right-0 bg-[#fffbf2] rounded-3xl w-[350px]  p-3 overflow-hidden border border-primary-dark/20  transition-all ease-linear duration-300 shadow-md placeholder:font-roboto placeholder:text-sm ${
          isSearchOpen
            ? " top-10 h-[400px] opacity-100 visible"
            : "-top-40 h-0 invisible opacity-0"
        }`}
        ref={searchBox}
      >
        <div className='flex items-center border-b py-1'>
          <input
            type='text'
            name=''
            id=''
            placeholder='Enter meal name'
            className='w-full outline-none  bg-transparent'
            ref={searchValue}
          />
          <span className='block cursor-pointer' onClick={findRecipes}>
            Search
          </span>
        </div>
        <ul className='flex flex-col items-center pb-4 child:py-2 w-full h-full overflow-y-auto divide-y'>
          {searchedRecipes?.slice(0, 10).map((recipe) => (
            <li
              className='flex w-full items-center justify-between gap-2 text-primary-dark/50 hover:text-primary-dark transition-all ease-linear '
              key={recipe.idMeal}
            >
              <div className='flex items-center gap-2 font-roboto font-medium '>
                <Image
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  width={40}
                  height={40}
                  className='rounded-4xl'
                />
                <span className='line-clamp-2 text-sm'>{recipe.strMeal}</span>
              </div>
              <Link
                href={"/recopies" + recipe.idMeal}
                className='flex items-center justify-end text-sm font-medium pr-2'
              >
                Read
              </Link>
            </li>
          ))}
          {error && searchedRecipes.length === 0 ? (
            <span className='text-sm font-medium text-primary-red text-center'>
              {error}
            </span>
          ) : null}
          {searchedRecipes.length === 0 && !error ? (
            <span className=''> 0 Results</span>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default NavbarSearch;
