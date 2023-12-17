// package
import Link from "next/link";
import { usePathname } from "next/navigation";

// ui
import NavDropdown from "@/ui/navbar/navDropdown";
import { NavLinkProps } from "@/ui/navbar/definition";

// lib
import { cn } from "@/lib/utils";

const links: NavLinkProps[] = [
  {
    id: "home",
    path: "/",
    name: "Home",
  },
  {
    id: "shop",
    path: "/shop",
    name: "Shop",
    subLinks: [
      {
        id: "all-categories",
        path: "/shop",
        name: "All Categories",
      },
      {
        id: "earphones",
        path: "/shop?category=earphones",
        name: "Earphones",
        subLinks: [
          {
            id: "earbud",
            path: "/shop?category=earphones&type=earbud",
            name: "Earbuds",
          },
          {
            id: "iem",
            path: "/shop?category=earphones&type=iem",
            name: "IEMs (In-Ear Monitors)",
          },
        ],
      },
      {
        id: "headsets",
        path: "/shop?category=headsets",
        name: "Headsets (microphone)",
        subLinks: [
          {
            id: "gaming-headset",
            path: "/shop?category=gaming-headset",
            name: "Gaming Headset",
          },
        ],
      },
      {
        id: "headphones",
        path: "/shop?category=headphones",
        name: "Headphones",
        subLinks: [
          {
            id: "bluetooth",
            path: "/shop?category=headphones&type=bluetooth",
            name: "Bluetooth",
          },
          {
            id: "tws",
            path: "/shop?category=headphones&type=tws",
            name: "TWS",
          },
        ],
      },
    ],
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

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex lg:justify-center lg:gap-10">
      {links.map((link) => (
        <li
          key={link.id}
          className={cn(
            "font-inter text-sm font-medium text-[#141718] hover:opacity-100",
            pathname !== link.path && "opacity-70",
          )}
        >
          {link.subLinks ? (
            <NavDropdown link={link} />
          ) : (
            <Link href={link.path}>{link.name}</Link>
          )}
        </li>
      ))}
    </ul>
  );
}
