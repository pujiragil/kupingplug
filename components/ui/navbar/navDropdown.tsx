// package
import { useState } from "react";
import Link from "next/link";

// ui
import { NavDropdownProps, SubLinkProps } from "@/ui/navbar/definition";
import { DropdownIcon } from "@/ui/assets/svg";

export default function NavDropdown({ link }: { link: NavDropdownProps }) {
  const [dropdown, setDropdown] = useState<boolean>(false);

  return (
    <div
      onMouseOver={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
      className="relative"
    >
      <button className="flex items-center gap-0.5">
        {link.name} <DropdownIcon className="h-[18px] w-[18px]" />
      </button>
      {dropdown && (
        <div className="absolute left-0 top-full pt-4">
          <DropdownSubLinks subLinks={link.subLinks} />
        </div>
      )}
    </div>
  );
}

function DropdownSubLinks({ subLinks }: { subLinks?: SubLinkProps[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <ul className="min-w-[250px] rounded-lg border border-gray-400 bg-white p-1 shadow-lg">
      {/* map subLinks */}
      {subLinks?.map((link, idx) => (
        <li key={link.path} className="relative">
          {/* check for nested sublinks */}
          {link.subLinks ? (
            <div onMouseLeave={() => setActiveIndex(null)}>
              <button
                onMouseOver={() => setActiveIndex(idx)}
                className="flex w-full items-center justify-between rounded-md px-4 py-2 font-inter text-sm text-[#141718] hover:bg-gray-200"
              >
                <span>{link.name}</span>
                <DropdownIcon className="h-[18px] w-[18px] -rotate-90" />
              </button>
              {activeIndex === idx && (
                <div className="absolute left-full top-0 pl-4">
                  <DropdownSubLinks subLinks={link.subLinks} />
                </div>
              )}
            </div>
          ) : (
            <Link
              href={link.path}
              className="inline-block w-full rounded-md px-4 py-2 font-inter text-sm text-[#141718] hover:bg-gray-200"
            >
              {link.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
