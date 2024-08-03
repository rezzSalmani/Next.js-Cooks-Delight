"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import mainLogo from "../../../../public/images/svgs/logo.svg";
import { navLicks } from "../navbarLinks/NavLinks";
import { usePathname } from "next/navigation";
import NavbarSearch from "../navbarSearch/NavbarSearch";
import FooterSearch from "../footerSearch/FooterSearch";

const MobileMenu = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const pathName = usePathname();

  return (
    <div className='md:hidden flex items-center justify-between px-2 h-full w-full relative'>
      <div className='flex items-center gap-3 font-roboto font-bold h-full'>
        <Link href={"/"}>
          <Image src={mainLogo} alt='logo' />
        </Link>
        <div className='flex flex-col leading-5'>
          <span>Cooks</span>
          <span>Delight</span>
        </div>
      </div>
      <span
        className='block rounded-full bg-[rgba(38,37,34,0.16)] p-2 cursor-pointer'
        onClick={() => setIsMobileMenu(true)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      </span>
      <div
        className={`fixed flex flex-col w-full inset-0 mx-auto bg-primary-dark text-primary-light rounded-3xl p-3 transition-all ease-linear space-y-10 overflow-auto ${
          isMobileMenu
            ? "h-screen translate-y-0 opacity-100 visible "
            : "h-0 -translate-y-48 opacity-0 invisible"
        }`}
      >
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3 font-roboto font-bold'>
            <Link href={"/"}>
              <Image src={mainLogo} alt='logo' />
            </Link>
            <div className='flex flex-col leading-5'>
              <span>Cooks</span>
              <span>Delight</span>
            </div>
          </div>
          <span
            className='block w-fit p-2 bg-primary-orange/20 text-primary-orange cursor-pointer rounded-full'
            onClick={() => setIsMobileMenu(false)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='size-5'
            >
              <path d='M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z' />
            </svg>
          </span>
        </div>
        <ul className='flex flex-col items-center justify-center font-roboto font-medium uppercase text-lg child:flex child:items-center divide-y child:py-4 w-full child:w-full '>
          {navLicks.map((item) => (
            <li
              className='group flex items-center justify-center'
              key={item.title}
            >
              <Link
                onClick={() => setIsMobileMenu(false)}
                href={item.url}
                className={`hover:scale-105 transition-all ease-linear text-center `}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex items-center justify-center'>
          <button className='rounded-full w-fit bg-primary-light/10 font-roboto font-medium text-sm uppercase text-white px-6 py-3'>
            subscribe
          </button>
        </div>
        <div className='flex flex-col items-center gap-10 w-full '>
          <FooterSearch />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
