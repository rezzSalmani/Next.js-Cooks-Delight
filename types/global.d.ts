interface Tip {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface TipsGallery {
  tipsGallery: Tip[];
}
interface RecipeType {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
  strCategory?: string;
  strInstructions: string;
}
