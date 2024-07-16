"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLicks = [
  { title: "Home", url: "/" },
  { title: "recipes", url: "/recipes" },
  { title: "cooking tips", url: "/tips" },
  { title: "about us", url: "/about-us" },
];
const NavLinks = ({ isFooter = false }) => {
  const currentPath = usePathname();
  return (
    <ul
      className={`flex items-center flex-wrap text-nowrap justify-center font-roboto font-medium child:relative uppercase text-sm lg:text-base child:flex child:items-center ${
        isFooter
          ? "divide-x divide-primary-light/20 gap-2 md:gap-4 child:pl-2 child:md:pl-4 "
          : " gap-8"
      }`}
    >
      {navLicks.map((item) => (
        <li className='group' key={item.title}>
          <Link
            href={item.url}
            className={`${
              !isFooter && currentPath && item.url === currentPath
                ? "text-primary-dark"
                : "text-primary-dark/60 "
            } ${isFooter ? "text-primary-light" : "text-primary-dark"}`}
          >
            {item.title}
          </Link>
          {!isFooter ? (
            <span className='absolute left-0 right-0 mx-auto -bottom-2 w-0 group-hover:w-full h-1 rounded-xl bg-primary-red transition-all ease-linear duration-250 delay-100'></span>
          ) : null}
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
