"use server";
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
