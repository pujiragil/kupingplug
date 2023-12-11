import Link from "next/link";
import SectionLayout from "@/layouts/sectionLayout";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/ui/assets/svg";

const Footer = () => {
  return (
    <SectionLayout bg="bg-[#141718]">
      <div className="space-y-10 px-8 py-12 lg:space-y-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-0">
            <h3 className="font-poppins text-2xl font-medium text-white lg:border-r lg:border-[#6C7275] lg:pr-8">
              Kupingplug
            </h3>
            <span className="h-[1px] w-8 rounded-full bg-[#6C7275] lg:hidden"></span>
            <p className="font-inter text-sm font-normal text-[#FEFEFE] lg:pl-8">
              Headphone Store
            </p>
          </div>

          <ul className="flex flex-col gap-8 lg:flex-row lg:gap-10">
            <li className="text-center font-inter text-sm font-normal text-[#FEFEFE]">
              <Link href="/">Home</Link>
            </li>
            <li className="text-center font-inter text-sm font-normal text-[#FEFEFE]">
              <Link href="/">Shop</Link>
            </li>
            <li className="text-center font-inter text-sm font-normal text-[#FEFEFE]">
              <Link href="/">Product</Link>
            </li>
            <li className="text-center font-inter text-sm font-normal text-[#FEFEFE]">
              <Link href="/">Blog</Link>
            </li>
            <li className="text-center font-inter text-sm font-normal text-[#FEFEFE]">
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-8 border-t border-[#6C7275] py-6 lg:flex-row lg:justify-between lg:gap-0 lg:py-4">
          <div className="flex items-center justify-center gap-6 lg:order-2">
            <InstagramIcon
              fill="#FEFEFE"
              stroke="#FEFEFE"
              className="h-6 w-6"
            />
            <FacebookIcon stroke="#FEFEFE" className="h-6 w-6" />
            <YoutubeIcon stroke="#FEFEFE" className="h-6 w-6" />
          </div>

          <div className="flex flex-col gap-7 lg:order-1 lg:flex-row">
            <div className="flex justify-center gap-7 lg:order-2">
              <p className="font-poppins text-xs font-semibold text-[#FEFEFE]">
                Privacy Policy
              </p>
              <p className="font-poppins text-xs font-semibold text-[#FEFEFE]">
                Term of Use
              </p>
            </div>

            <p className="text-center font-poppins text-xs font-normal text-[#FEFEFE] lg:order-1">
              Copyright © 2023 Kupingplug. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Footer;
