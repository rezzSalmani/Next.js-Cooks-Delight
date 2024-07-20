import AboutUs from "@/components/templates/aboutUs/AboutUs";
import Category from "@/components/templates/category/Category";
import Hero from "@/components/templates/hero/Hero";
import Services from "@/components/templates/services/Services";
import RecipeSlider from "@/components/modules/recipeSlider/RecipeSlider";
import SubscribeUs from "@/components/modules/subscribe/SubscribeUs";
import { getRandomRecipe } from "./actions";

interface CategoryResponse {
  meals: {
    strCategory: string;
  }[];
}
export interface CategoryItem {
  strCategory: string;
}
export default async function Home() {
  let CATEGORY_ITEMS: CategoryItem[] | null = null;
  try {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data: CategoryResponse = await res.json();
    CATEGORY_ITEMS = data.meals;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }

  const allFeaturedRecipes = await getRandomRecipe();
  // const res = await fetch("http://localhost:3000/api/featuredRecipes");
  // const resData = await res.json();

  // let allFeaturedRecipes: {
  //   strMeal: string;
  //   strMealThumb: string;
  //   idMeal: string;
  //   strCategory: string;
  //   strInstructions: string;
  // }[] = [];

  // for (let i = 0; i < 5; i++) {
  //   const res = await fetch(
  //     "https://www.themealdb.com/api/json/v1/1/random.php",
  //     { cache: "no-cache" }
  //   );
  //   const data = await res.json();
  //   if (data) {
  //     const meals = data.meals[0];
  //     allFeaturedRecipes.push(meals);
  //     console.log(meals.idMeal);
  //   }
  // }

  return (
    <main className='flex min-h-screen flex-col items-center gap-4'>
      <Hero />
      <Services />
      <RecipeSlider recipes={allFeaturedRecipes} title={"featured recipes"} />
      <Category CATEGORY_ITEMS={CATEGORY_ITEMS} />
      <AboutUs />
      <SubscribeUs />
    </main>
  );
}
