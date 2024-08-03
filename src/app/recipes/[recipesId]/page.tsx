import ShareOrFollow from "@/components/modules/share&follow/ShareOrFollow";
import RecipeSlider from "@/components/modules/recipeSlider/RecipeSlider";
import SubscribeUs from "@/components/modules/subscribe/SubscribeUs";
import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";

async function RecipeDetail({ params }: { params: { recipesId: string } }) {
  let data = null;
  let similarRecipes = null;
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${+params.recipesId}`
    );

    const resData = await res.json();
    data = resData.meals[0];
  } catch (err) {
    console.log(err);
  }
  if (!data) notFound();
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${data.strCategory}`
    );
    if (!res.ok) similarRecipes = [];
    const resData = await res.json();
    similarRecipes = resData.meals.slice(0, 8);
  } catch (err) {
    console.log(err);
  }

  const ingredientsArray = [];

  for (const key in data) {
    if (key.startsWith("strIngredient") && data[key]) {
      const ingredientKey = key;
      const measureKey = `strMeasure${ingredientKey.replace(
        "strIngredient",
        ""
      )}`;
      if (data[measureKey]) {
        ingredientsArray.push({
          strIngredient: data[ingredientKey],
          strMeasure: data[measureKey],
        });
      }
    }
  }

  return (
    <div className='space-y-8'>
      <div className='flex items-center justify-center w-full py-10 md:py-16 px-6 md:px-10 rounded-4xl border border-[rgba(38,37,34,0.24)] bg-transparent '>
        <div className='space-y-14 w-full'>
          {/* title */}
          <div className='flex flex-col items-center justify-center text-center space-y-6'>
            <span className='rounded-2xl text-lg bg-primary-red py-1 px-4 uppercase text-primary-light'>
              Recipe
            </span>
            <h2 className='w-[90%] px-8 md:px-0 md:w-4/5 xl:w-1/2 font-montserrat leading-[1] text-4xl md:text-[60px] lg:text-[80px] font-extrabold  child:block  '>
              {data.strMeal}
            </h2>
            <span className='inline-block px-8 md:px-0 lg:w-2/5 text-base md:text-lg lg:text-xl text-primary-dark/50 '>
              Welcome to Cooks Delight, where culinary dreams come alive! Today,
              we embark on a journey of flavors with a dish that promises to
              elevate your dining experience – our Citrus Infusion Delight:
              Lemon Garlic Roasted Chicken.
            </span>
            {/* recipe details */}
            <div className='flex items-center justify-center flex-wrap gap-4 md:gap-6 child:flex child:items-center child:gap-2 font-semibold text-lg uppercase font-montserrat'>
              <div>
                <span>
                  <svg
                    width='18'
                    height='21'
                    viewBox='0 0 18 21'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M16.03 6.39L17.45 4.97C17 4.46 16.55 4 16.04 3.56L14.62 5C13.07 3.74 11.12 3 9 3C6.61305 3 4.32387 3.94821 2.63604 5.63604C0.948212 7.32387 0 9.61305 0 12C0 14.3869 0.948212 16.6761 2.63604 18.364C4.32387 20.0518 6.61305 21 9 21C14 21 18 16.97 18 12C18 9.88 17.26 7.93 16.03 6.39ZM10 13H8V6H10V13ZM12 0H6V2H12V0Z'
                      fill='black'
                    />
                  </svg>
                </span>
                <span>1 hour</span>
              </div>
              <span className='block rounded-full w-2 h-2 bg-primary-dark'></span>
              <div>
                <span>
                  <svg
                    width='14'
                    height='15'
                    viewBox='0 0 14 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7.00012 3C7.28345 3 7.52112 2.904 7.71312 2.712C7.90512 2.52 8.00078 2.28267 8.00012 2C8.00012 1.71667 7.90412 1.47933 7.71212 1.288C7.52012 1.09667 7.28278 1.00067 7.00012 1C6.71678 1 6.47945 1.096 6.28812 1.288C6.09678 1.48 6.00078 1.71733 6.00012 2C6.00012 2.28333 6.09612 2.521 6.28812 2.713C6.48012 2.905 6.71745 3.00067 7.00012 3ZM8.71012 3H11.0561C11.4661 3 11.8194 3.13133 12.1161 3.394C12.4121 3.65667 12.5888 3.99133 12.6461 4.398L13.8981 13.168C13.9688 13.652 13.8434 14.0787 13.5221 14.448C13.2008 14.816 12.7894 15 12.2881 15H1.71212C1.21078 15 0.79945 14.8157 0.478117 14.447C0.156783 14.0783 0.03145 13.6517 0.102117 13.167L1.35412 4.398C1.41145 3.99133 1.58812 3.65667 1.88412 3.394C2.18145 3.13133 2.53512 3 2.94512 3H5.29112C5.20312 2.85867 5.13278 2.70267 5.08012 2.532C5.02678 2.36067 5.00012 2.18333 5.00012 2C5.00012 1.436 5.19245 0.961667 5.57712 0.577C5.96178 0.192333 6.43612 0 7.00012 0C7.56412 0 8.03845 0.192333 8.42312 0.577C8.80778 0.961667 9.00012 1.436 9.00012 2C9.00012 2.18333 8.97378 2.36067 8.92112 2.532C8.86845 2.70267 8.79812 2.85867 8.71012 3Z'
                      fill='black'
                    />
                  </svg>
                </span>
                <span>hard prep</span>
              </div>
              <span className='block rounded-full w-2 h-2 bg-primary-dark'></span>
              <div>
                <span>
                  <svg
                    width='16'
                    height='15'
                    viewBox='0 0 16 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M8 0C8.22733 0 8.44535 0.0901548 8.60609 0.250631C8.76684 0.411108 8.85714 0.628761 8.85714 0.855709V2.04229C10.8194 2.25339 12.6342 3.18115 13.9527 4.6472C15.2712 6.11325 16.0004 8.01413 16 9.98441C16 10.4383 15.8194 10.8736 15.4979 11.1946C15.1764 11.5155 14.7404 11.6958 14.2857 11.6958H1.71429C1.25963 11.6958 0.823594 11.5155 0.502103 11.1946C0.180612 10.8736 7.08999e-09 10.4383 7.08999e-09 9.98441C-8.30288e-05 8.01433 0.729207 6.11373 2.0477 4.64792C3.36619 3.1821 5.18083 2.25451 7.14286 2.04343V0.856849C7.14271 0.74438 7.16477 0.632985 7.20778 0.529034C7.25078 0.425083 7.3139 0.330615 7.3935 0.251034C7.47311 0.171454 7.56765 0.108321 7.67172 0.0652459C7.77579 0.0221712 7.88734 -9.99724e-08 8 0ZM0.891429 13.2886C0.6641 13.2886 0.446083 13.3787 0.285337 13.5392C0.124592 13.6997 0.0342858 13.9173 0.0342858 14.1443C0.0342858 14.3712 0.124592 14.5889 0.285337 14.7494C0.446083 14.9098 0.6641 15 0.891429 15H15.1086C15.3359 15 15.5539 14.9098 15.7147 14.7494C15.8754 14.5889 15.9657 14.3712 15.9657 14.1443C15.9657 13.9173 15.8754 13.6997 15.7147 13.5392C15.5539 13.3787 15.3359 13.2886 15.1086 13.2886H0.891429Z'
                      fill='#262522'
                    />
                  </svg>
                </span>
                <span>4 serves</span>
              </div>
              <span className='block rounded-full w-2 h-2 bg-primary-dark'></span>
              <div>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='size-5'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.5 2A2.5 2.5 0 0 0 2 4.5v3.879a2.5 2.5 0 0 0 .732 1.767l7.5 7.5a2.5 2.5 0 0 0 3.536 0l3.878-3.878a2.5 2.5 0 0 0 0-3.536l-7.5-7.5A2.5 2.5 0 0 0 8.38 2H4.5ZM5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
                <span>{data.strCategory || "unknown"}</span>
              </div>
              <span className='block rounded-full w-2 h-2 bg-primary-dark'></span>
              <div>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='size-5'
                  >
                    <path d='M7.75 2.75a.75.75 0 0 0-1.5 0v1.258a32.987 32.987 0 0 0-3.599.278.75.75 0 1 0 .198 1.487A31.545 31.545 0 0 1 8.7 5.545 19.381 19.381 0 0 1 7 9.56a19.418 19.418 0 0 1-1.002-2.05.75.75 0 0 0-1.384.577 20.935 20.935 0 0 0 1.492 2.91 19.613 19.613 0 0 1-3.828 4.154.75.75 0 1 0 .945 1.164A21.116 21.116 0 0 0 7 12.331c.095.132.192.262.29.391a.75.75 0 0 0 1.194-.91c-.204-.266-.4-.538-.59-.815a20.888 20.888 0 0 0 2.333-5.332c.31.031.618.068.924.108a.75.75 0 0 0 .198-1.487 32.832 32.832 0 0 0-3.599-.278V2.75Z' />
                    <path
                      fillRule='evenodd'
                      d='M13 8a.75.75 0 0 1 .671.415l4.25 8.5a.75.75 0 1 1-1.342.67L15.787 16h-5.573l-.793 1.585a.75.75 0 1 1-1.342-.67l4.25-8.5A.75.75 0 0 1 13 8Zm2.037 6.5L13 10.427 10.964 14.5h4.073Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
                <span>{data.strArea || "unknown"}</span>
              </div>
            </div>
          </div>
          {/* instruction and image */}
          <div className='flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-10 w-full h-full'>
            <div className='space-y-3 w-fit'>
              <h6 className='text-3xl md:text-[40px] uppercase font-montserrat font-bold text-[#333]'>
                Instructions
              </h6>
              <p className=' text-justify text-lg text-primary-dark/60 font-light'>
                {data.strInstructions || "There is no Instructions!"}
              </p>
            </div>
            {/* image */}
            <div className='w-full xl:min-w-[600px] h-[300px] md:h-[400px]'>
              <Image
                src={data.strMealThumb}
                className='w-full h-full rounded-3xl object-cover'
                alt={data.strMeal}
                width={700}
                height={700}
              />
            </div>
          </div>
          {/* youTube and INGREDIENTS */}
          <div className='flex flex-col-reverse lg:flex-row items-start gap-4 py-6 border-b border-[rgba(38,37,34,0.08)]'>
            {data.strYoutube ? (
              <div className='w-full space-y-4'>
                <h6 className=' font-montserrat uppercase text-3xl font-bold'>
                  Watch Step by Step Cooking in Youtube
                </h6>
                <iframe
                  className='w-full h-[350px] md:h-[450px] xl:h-[550px] rounded-2xl'
                  width='1200'
                  height='600'
                  src={`https://www.youtube.com/embed/${new URL(
                    data?.strYoutube
                  ).searchParams.get("v")}`}
                ></iframe>
              </div>
            ) : null}
            <div className={`flex flex-col md:flex-row items-start gap-4`}>
              <div className='w-full border border-[rgba(38,37,34,0.24)] shadow-md py-6 px-3 rounded-2xl bg-primary-light space-y-4 max-h-[400px] overflow-y-auto'>
                <h6 className='font-montserrat font-semibold text-lg text-primary-red uppercase'>
                  Ingredients
                </h6>
                <ul className='font-roboto font-medium list-disc'>
                  {ingredientsArray?.map((ingredient, index) => (
                    <li
                      className='flex items-center justify-between'
                      key={index}
                    >
                      <span>{ingredient.strIngredient} </span>
                      <span className=' text-primary-dark/60'>
                        {ingredient.strMeasure}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='space-y-1'>
                <div className='border border-[rgba(38,37,34,0.24)] shadow-md py-6 px-3 rounded-2xl bg-primary-light'>
                  <h6 className='font-montserrat font-semibold text-lg text-primary-red uppercase'>
                    Nutritional Value
                  </h6>
                  <ul className='child:flex child:items-center font-medium  child:justify-between '>
                    <li className=''>
                      <span>Calories:</span> <span>~250</span>
                    </li>
                    <li className=''>
                      <span>Protein</span> <span>~30g</span>
                    </li>
                    <li className=''>
                      <span>Total Fat:</span> <span>~5g</span>
                    </li>
                    <li className=''>
                      <span>Carbohydrates:</span> <span>~250</span>
                    </li>
                  </ul>
                </div>
                <span className='inline-block text-xs font-medium uppercase text-primary-dark/50'>
                  Note: Nutritional values are approximate and may vary based on
                  specific ingredients and portion sizes.
                </span>
              </div>
            </div>
          </div>
          {/* author section */}
          <div className='flex flex-col lg:flex-row justify-between gap-4 items-end'>
            <div className='flex flex-col xs:flex-row items-start gap-4'>
              <Image
                src={"/images/AuthorImage.jpg"}
                className='w-20 h-20 sm:w-26 sm:h-2/6 rounded-full border border-primary-lightBlue'
                alt={"Isabella Russo"}
                width={120}
                height={80}
              />
              <div className=''>
                <span className='text-lg font-semibold font-montserrat text-primary-dark/80'>
                  Isabella Russo
                </span>
                <p className='w-fit lg:w-[500px] text-primary-dark/60 text-sm'>
                  In the world of pots and pans, I'm on a mission to turn every
                  meal into a masterpiece. Cooks Delight is not just a blog;
                  it's a shared space where the love for food transcends
                  boundaries. Here, we celebrate the art of crafting meals that
                  not only nourish the body but also feed the soul.
                </p>
                <div className='flex items-end justify-end'>
                  <button className=' px-6 py-2 font-medium text-sm rounded-3xl border border-primary-dark/70 hover:bg-primary-light/60 transition-all ease-linear text-primary-dark/70 hover:text-primary-dark'>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            {/* share socials */}
            <ShareOrFollow title='Share' />
          </div>
        </div>
      </div>
      <RecipeSlider recipes={similarRecipes} title={"Similar recipes"} />
      <SubscribeUs />
    </div>
  );
}

export default RecipeDetail;
