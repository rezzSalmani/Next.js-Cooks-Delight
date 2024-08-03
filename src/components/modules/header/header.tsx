import NavLinks from "@/components/templates/navbarLinks/NavLinks";
import Link from "next/link";
import React from "react";
import NavbarSearch from "../../templates/navbarSearch/NavbarSearch";
import Image from "next/image";
import mainLogo from "../../../../public/images/svgs/logo.svg";
import MobileMenu from "@/components/templates/mobileMenu/MobileMenu";
const Header = () => {
  return (
    <header className='sticky top-0 left-0 right-0 mx-auto z-40 mb-4 w-full'>
      <nav className='flex items-center justify-between w-full border border-[rgba(38,37,34,0.24)] rounded-4xl p-3 md:py-4 mt-2.5 backdrop-blur-lg shadow-lg '>
        {/* desktop navBar */}
        <div className='hidden md:flex items-center justify-between w-full text-primary-dark'>
          <Link
            href={"/"}
            className='flex items-center gap-3 font-roboto font-bold'
          >
            <Image src={mainLogo} alt='logo' />
            <div className='flex flex-col leading-5'>
              <span>Cooks</span>
              <span>Delight</span>
            </div>
          </Link>

          <NavLinks />
          <div className='flex items-center gap-4'>
            <NavbarSearch />
            <button className='rounded-full bg-primary-dark font-roboto font-medium text-sm uppercase text-white px-6 py-3'>
              subscribe
            </button>
          </div>
        </div>
        {/* mobile */}
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Header;
