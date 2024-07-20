"use server";
import path from "path";
import fs from "fs";
import { shuffleArray } from "@/utils/utils";
// export async function featuredRecipes() {
//   let allFeaturedRecipes: {
//     strMeal: string;
//     strMealThumb: string;
//     idMeal: string;
//     strCategory: string;
//     strInstructions: string;
//   }[] = [];

//   for (let i = 0; i < 5; i++) {
//     const res = await fetch(
//       "https://www.themealdb.com/api/json/v1/1/random.php"
//     );
//     const data = await res.json();
//     if (data) {
//       const meals = data.meals[0];
//       allFeaturedRecipes.push(meals);
//     }
//   }
//   return allFeaturedRecipes;
// }

export async function getSearchRecipe(value: string) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const resData = await res.json();
    return resData;
  } catch (err) {
    console.log("there was error fetching recipes", err);
    return { errorMessage: "there was a problem Getting Recipes" };
  }
}
export async function getByCategoryName(category: string) {
  let data = null;
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const resData = await res.json();
    data = resData.meals;

    return data;
  } catch (err) {
    console.log("error=>", err);
  }
}

export async function getRandomRecipe() {
  let recipes: [] = [];

  try {
    const dbPath = path.join(process.cwd(), "data", "recipesData.json");
    const data = fs.readFileSync(dbPath, "utf8");
    const parsedData = JSON.parse(data);
    recipes = parsedData.randomRecipes;
    recipes = shuffleArray(recipes);
    return recipes;
  } catch (error) {
    console.error(`Error reading or parsing file: ${error}`);
    return [];
  }
}
export async function getTips() {
  let tips;
  try {
    const dbPath = path.join(process.cwd(), "data", "recipesData.json");
    const data = fs.readFileSync(dbPath, "utf8");
    const parsedData = JSON.parse(data);
    tips = parsedData;
    return tips;
  } catch (error) {
    console.error(`Error reading or parsing file: ${error}`);
    return [];
  }
}
export async function getTipsGallery() {
  let tips: [] = [];
  try {
    const dbPath = path.join(process.cwd(), "data", "recipesData.json");
    const data = fs.readFileSync(dbPath, "utf8");
    const parsedData = JSON.parse(data);
    tips = parsedData.tipsGallery;
    return tips;
  } catch (error) {
    console.error(`Error reading or parsing file: ${error}`);
    return [];
  }
}
