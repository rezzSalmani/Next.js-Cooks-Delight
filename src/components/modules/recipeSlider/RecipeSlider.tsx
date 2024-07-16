"use client";
import RecipeItem from "@/components/modules/recipeItem/RecipeItem";
import React, { useEffect, useRef, useState } from "react";

const RecipeSlider = ({ recipes, title }: any) => {
  // const [allFeaturedRecipes, setAllFeaturedRecipes] = useState([]);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null); // Ref for the slider element
  const slider = sliderRef.current;
  const checkSliderPosition = () => {
    const slider = sliderRef.current;
    if (slider) {
      const isStart = slider.scrollLeft === 0;
      const isEnd =
        slider.scrollWidth === slider.clientWidth + slider.scrollLeft;
      setIsAtStart(isStart);
      setIsAtEnd(isEnd);
    }
  };

  //  for automatic slide
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        slideAutomatically();
      }
    }, 1500); // Slide every second

    return () => clearInterval(interval);
  }, [isHovering, isAtEnd]);

  //  for automatic slide
  const slideAutomatically = () => {
    const slider = sliderRef.current;
    if (slider) {
      if (isAtEnd) {
        slider.scrollLeft = 0; // Reset to start
      } else {
        slider.scrollLeft += 500; // Adjust the value as needed
      }
    }
  };
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", checkSliderPosition);
      // Initial check in case the slider is already at the end when the component mounts
      checkSliderPosition();
      return () => slider.removeEventListener("scroll", checkSliderPosition);
    }
  }, []);

  let startPos = 0;
  let isDragging = false;
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    startDragging(e);
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startDragging(e.touches[0]);
  };

  const startDragging = (
    e:
      | React.TouchEvent<HTMLDivElement>
      | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    isDragging = true;
    if (e instanceof TouchEvent) {
      startPos = e.touches[0].clientX;
    } else {
      startPos = e.clientX;
    }
    if (slider) {
      slider.style.scrollBehavior = "auto";
      slider.classList.add("no-select");
    }
  };
  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging) {
      // e.preventDefault();
      updateSliderPosition(e.touches[0].clientX);
    }
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isDragging) {
      updateSliderPosition(e.clientX);
    }
  };
  const updateSliderPosition = (currentPos: number) => {
    const diff = currentPos - startPos;
    if (slider) slider.scrollLeft -= diff;
    startPos = currentPos;
  };

  const onMouseUp = () => {
    stopDragging();
  };

  const onTouchEnd = () => {
    stopDragging();
  };

  const stopDragging = () => {
    isDragging = false;
    if (slider) slider.style.scrollBehavior = "smooth";
    document.body.classList.remove("no-select");
  };

  const slideLeft = () => {
    if (slider) {
      slider.scrollLeft -=
        window.innerWidth < 480 ? 300 : window.innerWidth < 680 ? 350 : 500;
    }
  };

  const slideRight = () => {
    if (slider) {
      slider.scrollLeft +=
        window.innerWidth < 480 ? 300 : window.innerWidth < 680 ? 350 : 500;
    }
  };

  return (
    <div
      className='w-full h-full border border-[rgba(38,37,34,0.24)] rounded-[32px] p-2 xs:p-4 space-y-5 md:space-y-10'
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={() => setIsHovering(true)}
      onTouchEnd={() => setIsHovering(false)}
    >
      <div className='flex items-center flex-wrap justify-between h-full mt-3 xs:mt-6 xs:mx-4 overflow-hidden'>
        <h5 className='uppercase font-montserrat font-bold text-2xl xs:text-3xl md:text-[40px]   '>
          {title}
        </h5>
        <div className='flex items-center justify-end  w-fit gap-2 child:block child:w-fit child:border child:rounded-full child:p-1 child:md:p-1.5 child:cursor-pointer'>
          {/* move to left */}
          <button
            onClick={slideLeft}
            className={`${
              isAtStart
                ? "text-primary-dark/40 border-primary-dark/40"
                : "text-primary-dark border-primary-dark"
            }`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 19.5 8.25 12l7.5-7.5'
              />
            </svg>
          </button>
          {/* move to right */}
          <button
            onClick={slideRight}
            className={`${
              isAtEnd
                ? "text-primary-dark/40 border-primary-dark/40"
                : "text-primary-dark border-primary-dark"
            }`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m8.25 4.5 7.5 7.5-7.5 7.5'
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className='flex items-center gap-2 xs:gap-4 w-full child:min-w-[320px] child:xs:min-w-[350px]  child:lg:min-w-[532px] overflow-y-hidden overflow-x-hidden whitespace-nowrap '
        style={{ scrollBehavior: "smooth" }}
        id='slider'
        ref={sliderRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseUp}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {recipes?.map((item: any) => (
          <RecipeItem recipe={item} key={item.idMeal} />
        ))}
      </div>
      {recipes?.length === 0 ? (
        <div className='flex items-center justify-center pb-6y md:pb-10'>
          <span className='text-xl text-primary-red text-center'>
            No Recipe Found! Please try Again.
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default RecipeSlider;
