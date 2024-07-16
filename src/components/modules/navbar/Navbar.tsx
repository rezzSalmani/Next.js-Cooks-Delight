import NavLinks from "@/components/templates/navbarLinks/NavLinks";
import Link from "next/link";
import React from "react";
import NavbarSearch from "../../templates/navbarSearch/NavbarSearch";
import Image from "next/image";
import mainLogo from "../../../../public/images/svgs/logo.svg";
const Navbar = () => {
  return (
    <header className='sticky  top-0 left-0 right-0 mx-auto z-40  mb-4'>
      <nav className='flex items-center justify-between w-full border border-[rgba(38,37,34,0.24)] rounded-4xl p-3 md:py-4  mt-2.5 backdrop-blur-lg shadow-lg'>
        {/* desktop navBar */}
        <div className='hidden md:flex items-center justify-between w-full text-primary-dark'>
          <div className='flex items-center gap-3 font-roboto font-bold'>
            <Link href={"/"}>
              <Image src={mainLogo} alt='logo' />
            </Link>
            <div className='flex flex-col leading-5'>
              <span>Cooks</span>
              <span>Delight</span>
            </div>
          </div>
          <NavLinks />
          <div className='flex items-center gap-4'>
            <NavbarSearch />
            <button className='rounded-full bg-primary-dark font-roboto font-medium text-sm uppercase text-white px-6 py-3'>
              subscribe
            </button>
          </div>
        </div>
        {/* mobile */}
        <div className='md:hidden flex items-center justify-between w-full'>
          <div className='flex items-center gap-3 font-roboto font-bold'>
            <Link href={"/"}>
              <Image src={mainLogo} alt='logo' />
            </Link>
            <div className='flex flex-col leading-5'>
              <span>Cooks</span>
              <span>Delight</span>
            </div>
          </div>
          <span className='block rounded-full bg-[rgba(38,37,34,0.16)] p-2 cursor-pointer'>
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
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
