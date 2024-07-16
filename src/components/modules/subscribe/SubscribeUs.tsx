import React from "react";

const SubscribeUs = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center px-6 md:px-[117px] py-8 md:py-16 bg-primary-red rounded-4xl text-primary-light w-full space-y-3 overflow-hidden'>
      <span className='font-medium text-lg uppercase'>Subscribe</span>
      <h5 className='w-[90%] font-montserrat text-4xl md:text-[80px] uppercase font-extrabold child:block leading-[1]'>
        Join the fun Subscribe now!
      </h5>
      <span className='inline-block md:w-1/2 text-xl'>
        Subscribe to our newsletter for a weekly serving of recipes, cooking
        tips, and exclusive insights straight to your inbox.
      </span>
      <div className='flex flex-col gap-3 items-center justify-center w-full pt-9'>
        <div className='flex rounded-4xl bg-white w-full md:w-[426px] px-4 py-1.5'>
          <input
            type='text'
            name=''
            id=''
            className='w-full outline-none text-primary-dark placeholder:text-lg py-1'
            placeholder='Email Address'
          />
          <button className='hidden md:block rounded-full bg-primary-dark font-roboto font-medium text-sm uppercase text-white px-6 py-3 active:scale-95 transition-all ease-linear hover:shadow-lg'>
            subscribe
          </button>
        </div>
        <button className='md:hidden block w-full rounded-full bg-primary-dark font-roboto font-medium text-sm uppercase text-white px-6 py-3.5 active:scale-95 transition-all ease-linear hover:shadow-lg'>
          subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscribeUs;
