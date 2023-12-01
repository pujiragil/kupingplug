"use client";

import { useState } from "react";

import Logo from "@/components/ui/assets/logo";
import {
  CartIcon,
  HamburgerMenu,
  NotificationCount,
  SearchIcon,
  UserIcon,
  WishlistIcon,
} from "@/components/ui/assets/svg";
import NavLinks from "@/components/ui/navbar/navLinks";
import NavMobile from "@/components/ui/navbar/navMobile";

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="bg-[#ffc95c]">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-4 lg:justify-normal">
        <div className="flex items-center gap-1 lg:basis-1/4">
          <button className="lg:hidden" onClick={() => setOpen(true)}>
            <HamburgerMenu className="w-6" />
          </button>

          <Logo />
        </div>

        <div className="hidden basis-2/4 lg:block">
          <NavLinks />
        </div>

        <div className="flex items-center gap-1 lg:basis-1/4 lg:justify-end lg:gap-4">
          <SearchIcon className="hidden lg:block" />
          <UserIcon className="hidden lg:block" />
          <CartIcon className="w-6" />
          <NotificationCount count={2} className="text-[#FFAB00]" />
        </div>

        {/* mobile navbar  */}
        <NavMobile open={open} onClick={() => setOpen(false)} />
      </nav>
    </div>
  );
};

export default Navbar;
