import Image from "next/image";
import React from "react";
import { Homemade_Apple } from "next/font/google";
import { getRandomRecipe } from "../actions";
import authorImage from "../../../public/images/AuthorImage1.jpg";
import ShareOrFollow from "@/components/modules/share&follow/ShareOrFollow";
import aboutUsImage1 from "../../../public/images/aboutUs/aboutus.jpg";
import aboutUsImage2 from "../../../public/images/aboutUs/aboutus2.jpg";
import aboutUsImage3 from "../../../public/images/aboutUs/aboutus3.jpg";
import aboutUsImage4 from "../../../public/images/aboutUs/aboutus4.jpg";
import aboutUsImage5 from "../../../public/images/aboutUs/aboutus5.jpg";
import aboutUsImage6 from "../../../public/images/aboutUs/aboutus6.jpg";
import aboutUsImage7 from "../../../public/images/aboutUs/aboutus7.jpg";
import aboutUsImage8 from "../../../public/images/aboutUs/aboutus8.jpg";
import RecipeSlider from "@/components/modules/recipeSlider/RecipeSlider";
import SubscribeUs from "@/components/modules/subscribe/SubscribeUs";

const HomemadeApple = Homemade_Apple({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

const AboutUs = async () => {
  const allFeaturedRecipes = await getRandomRecipe();

  return (
    <div className='space-y-8 md:space-y-16'>
      <div className='flex flex-col md:flex-row items-center child:md:w-1/2 gap-6 h-full mt-16 '>
        <h4 className=' font-montserrat font-extrabold uppercase text-3xl sm:text-6xl lg:text-[80px] lg:leading-[1]'>
          Welcome to my Culinary Haven!
        </h4>
        <div className='flex flex-col items-start justify-between gap-5 h-full'>
          <p className='md:text-xl text-primary-dark/50'>
            Bonjour and welcome to the heart of my kitchen! I'm Isabella Russo,
            the culinary enthusiast behind this haven of flavors, Cooks Delight.
            Join me on a gastronomic journey where each dish carries a story,
            and every recipe is a crafted symphony of taste.
          </p>
          <button className='rounded-3xl bg-primary-orange px-6 py-2 font-medium text-sm uppercase'>
            Explore Recipes
          </button>
        </div>
      </div>
      <div className='rounded-3xl border border-[rgba(38,37,34,0.24)] p-4 space-y-8 md:space-y-16'>
        <div className='flex flex-col md:flex-row items-start child:w-full child:md:w-1/2 gap-2 lg:gap-4 xl:gap-10 '>
          <div className='space-y-3'>
            <Image
              src={authorImage}
              alt='authorImage'
              className='h-[480px] object-cover rounded-xl w-full'
            />
            <ShareOrFollow title={"follow me"} />
          </div>
          <div className='py-4 px-3 lg:px-6 space-y-2 lg:space-y-3 text-primary-dark/60 font-light text-sm md:text-base'>
            <h6 className='font-montserrat font-bold text-2xl xs:text-3xl xl:text-[40px] uppercase leading-[1] text-primary-dark'>
              From Italian Roots to Global Palates
            </h6>
            <p>
              Born and raised in the vibrant culinary landscape of Italy, my
              journey with food began in the heart of my family's kitchen.
              Surrounded by the aroma of fresh herbs, the sizzle of pans, and
              the laughter of loved ones, I developed a deep appreciation for
              the art of cooking. My culinary education took me from the
              historic streets of Rome to the bustling markets of Florence,
              where I honed my skills and cultivated a love for the simplicity
              and authenticity of Italian cuisine.
            </p>
            <p className=''>
              Driven by a relentless curiosity, I embarked on a global culinary
              exploration, seeking inspiration from the rich tapestry of flavors
              found in kitchens around the world. From the spicy markets of
              Marrakech to the sushi stalls of Tokyo, each experience added a
              unique brushstroke to my culinary canvas.
            </p>
            <p>
              Whether you're a seasoned home cook or just starting your culinary
              adventure, I'm delighted to have you here. Let's stir, simmer, and
              savor the beauty of creating something wonderful together.
            </p>
            <span className='block'>Warmest regards,</span>
            <span
              className={`${HomemadeApple.className} inline-block text-xl font-normal text-primary-dark`}
            >
              Isabella Russo
            </span>
          </div>
        </div>
        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 child:object-cover child:h-60 w-full gap-4 child:rounded-3xl'>
          <Image src={aboutUsImage1} alt='about us CooKing Image' />
          <Image src={aboutUsImage2} alt='about us CooKing Image' />
          <Image src={aboutUsImage3} alt='about us CooKing Image' />
          <Image src={aboutUsImage4} alt='about us CooKing Image' />
          <Image src={aboutUsImage5} alt='about us CooKing Image' />
          <Image src={aboutUsImage6} alt='about us CooKing Image' />
          <Image src={aboutUsImage7} alt='about us CooKing Image' />
          <Image src={aboutUsImage8} alt='about us CooKing Image' />
        </div>
      </div>
      <RecipeSlider recipes={allFeaturedRecipes} title='Featured Recipes' />
      <SubscribeUs />
    </div>
  );
};

export default AboutUs;
