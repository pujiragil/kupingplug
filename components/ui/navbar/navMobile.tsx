import { cn } from "@/utils/cn";

import Logo from "@/components/ui/assets/logo";
import {
  CartIcon,
  CloseIcon,
  FacebookIcon,
  InstagramIcon,
  NotificationCount,
  SearchIcon,
  WishlistIcon,
  YoutubeIcon,
} from "@/components/ui/assets/svg";
import Button from "@/components/ui/button";
import Link from "next/link";

const links = [
  {
    id: "home",
    path: "/",
    name: "Home",
  },
  {
    id: "shop",
    path: "/shop",
    name: "Shop",
  },
  {
    id: "product",
    path: "/product",
    name: "Product",
  },
  {
    id: "contact-us",
    path: "/contact-us",
    name: "Contact Us",
  },
];

export default function NavMobile({
  onClick,
  open,
}: {
  onClick: () => void;
  open: boolean;
}) {
  return (
    <div
      className={cn(
        "absolute left-0 top-0 z-10 flex h-screen w-full lg:hidden",
        open ? "transform-none" : "-translate-x-full",
        "transition-transform duration-100 ease-in",
      )}
    >
      <div className="flex h-full w-11/12 flex-col justify-between bg-white p-6 md:w-10/12">
        {/* top section */}
        <div className="flex flex-col gap-4">
          {/* logo */}
          <div className="flex items-center justify-between">
            <Logo />

            <button onClick={onClick}>
              <CloseIcon className="w-6" />
            </button>
          </div>

          {/* search input */}
          <div className="flex h-12 items-center gap-2 rounded-md border border-[#6C7275] px-4">
            <label htmlFor="search" className="cursor-pointer">
              <SearchIcon />
            </label>
            <input
              id="search"
              name="search"
              className="font-inter text-sm font-normal text-[#141718] outline-none placeholder:opacity-70"
              placeholder="Search"
            />
          </div>
          {/* navbar links */}
          <ul className="grid grid-cols-1">
            {links.map((link) => (
              <li
                key={link.id}
                className="border-b border-[#E8ECEF] first:pt-0"
              >
                <Link
                  href={link.path}
                  className="block py-4 font-inter text-sm font-medium text-[#141718]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* bottom section */}
        <div className="flex flex-col gap-5">
          {/* cart & wishlist */}
          <ul>
            <li>
              <Link
                href="/cart"
                className="flex items-center justify-between border-b border-[#E8ECEF] py-4"
              >
                <span className="font-inter text-sm font-medium text-[#141718]">
                  Cart
                </span>

                <div className="flex items-center gap-1.5">
                  <CartIcon className="w-6" />
                  <NotificationCount count={6} />
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                className="flex items-center justify-between border-b border-[#E8ECEF] py-4"
              >
                <span className="font-inter text-sm font-medium text-[#141718]">
                  Wishlist
                </span>

                <div className="flex items-center gap-1.5">
                  <WishlistIcon className="w-6" />
                  <NotificationCount count={12} />
                </div>
              </Link>
            </li>
          </ul>

          {/* login button */}
          <Button intent="primary" size="full" className="py-2.5 text-lg">
            Sign In
          </Button>

          {/* social media button */}
          <div className="flex items-center gap-6">
            <InstagramIcon className="w-6" />
            <FacebookIcon className="w-6" />
            <YoutubeIcon className="w-6" />
          </div>
        </div>
      </div>

      <div
        className="h-full w-1/12 bg-black/30 md:w-2/12"
        onClick={onClick}
      ></div>
    </div>
  );
}
