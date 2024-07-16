export async function GET(request: Request) {
  let allFeaturedRecipes: {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
    strCategory: string;
    strInstructions: string;
  }[] = [];

  for (let i = 0; i < 5; i++) {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php",
      { cache: "no-store" }
    );
    const data = await res.json();
    if (data) {
      const meals = data.meals[0];
      allFeaturedRecipes.push(meals);
    }
  }
  return Response.json(
    { message: "request successful", allFeaturedRecipes },
    { status: 200 }
  );
}
