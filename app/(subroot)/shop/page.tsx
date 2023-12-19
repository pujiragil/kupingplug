// packages
import { ChevronDown } from "lucide-react";

// layouts
import SectionLayout from "@/layouts/sectionLayout";

// ui
import Text from "@/ui/text";
import Heading from "@/ui/head";
import ProductCard from "@/ui/card/productCard";
import { DropdownIcon } from "@/ui/assets/svg";

// data
import products from "@/data/product.json";

// ui
import {
  Select,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";

// lib
import { cn } from "@/lib/utils";

const categories = [
  {
    value: "all-headphones",
    text: "All Headphones",
  },
  {
    value: "tws",
    text: "TWS",
  },
  {
    value: "headset",
    text: "Headset",
  },
  {
    value: "gaming-headset",
    text: "Gaming Headset",
  },
  {
    value: "earbud",
    text: "Earbud",
  },
];

const prices = [
  {
    value: "all-price",
    text: "All Price",
  },
  {
    value: "0-100",
    text: "$0.00 - $100.00",
  },
  {
    value: "100-200",
    text: "$100.00 - $200.00",
  },
  {
    value: "200-300",
    text: "$200.00 - $300.00",
  },
  {
    value: "300-400",
    text: "$300.00 - $400.00",
  },
  {
    value: "400+",
    text: "$400.00 +",
  },
];

const sorts = [
  {
    value: "related-products",
    text: "Related Products",
  },
  {
    value: "price-low-to-high",
    text: "Price Low to High",
  },
  {
    value: "price-high-to-low",
    text: "Price High to Low",
  },
  {
    value: "newest-products",
    text: "Newest Products",
  },
  {
    value: "best-ratings",
    text: "Best Ratings",
  },
  {
    value: "largest-discount",
    text: "Largest Discount",
  },
  {
    value: "most-viewed",
    text: "Most Viewed",
  },
  {
    value: "best-sellers",
    text: "Best Sellers",
  },
  {
    value: "most-reviews",
    text: "Most Reviews",
  },
  {
    value: "available-stock",
    text: "Available Stock",
  },
];

export default function Page() {
  return (
    <SectionLayout>
      <div className="px-8">
        <div className="relative flex h-[300px] flex-col items-center justify-center gap-4 bg-[#F3F5F7] text-center">
          <div className="flex items-center gap-4">
            <Text
              size="sm"
              color="gray"
              weight={500}
              className="flex items-center gap-1"
            >
              Home{" "}
              <DropdownIcon stroke="#6C7275" className="h-3 w-3 -rotate-90" />
            </Text>
            <Text size="sm" weight={500}>
              Shop
            </Text>
          </div>
          <Heading as="h1" intent="shop-page">
            Shop Page
          </Heading>
          <Text className="lg:text-lg">
            Listen to the amazing music sound. Mari ngrungokne sworo.
          </Text>
        </div>

        <div className="grid gap-8 py-8 lg:grid-cols-[2fr_1fr_2fr] lg:items-end lg:gap-4">
          {/* filter select menu */}
          <div className="flex flex-col gap-6 md:flex-row lg:col-span-1 lg:items-center lg:gap-4">
            {/* categories */}
            <div className="w-full space-y-2">
              <Text size="sm" weight={600} color="gray" transform="uppercase">
                categories
              </Text>

              <Select defaultValue={categories[0].value}>
                <SelectTrigger
                  className={cn(
                    "h-auto",
                    "rounded-lg",
                    "border-2 border-[#6C7275]",
                    "p-2 pl-4",
                    "font-inter font-semibold",
                    "text-sm text-[#141718]",
                    "focus:ring-0 focus:ring-offset-0",
                  )}
                >
                  <SelectValue />

                  <SelectIcon asChild>
                    <ChevronDown color="#6C7275" className="h-6 w-6" />
                  </SelectIcon>
                </SelectTrigger>

                <SelectContent className="rounded-xl">
                  {categories.map((category) => (
                    <SelectItem
                      key={category.value}
                      value={category.value}
                      className={cn(
                        "cursor-pointer",
                        "rounded-lg",
                        "p-2",
                        "font-inter font-normal",
                        "text-sm text-[#6C7275]",
                        "focus:bg-[#F3F5F7] focus:text-[#141718]",
                        "data-[state=checked]:font-semibold data-[state=checked]:text-[#141718]",
                      )}
                    >
                      {category.text}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {/* price */}
            <div className="w-full space-y-2">
              <Text size="sm" weight={600} color="gray" transform="uppercase">
                price
              </Text>

              <Select defaultValue={prices[0].value}>
                <SelectTrigger
                  className={cn(
                    "h-auto",
                    "rounded-lg",
                    "border-2 border-[#6C7275]",
                    "p-2 pl-4",
                    "font-inter font-semibold",
                    "text-sm text-[#141718]",
                    "focus:ring-0 focus:ring-offset-0",
                  )}
                >
                  <SelectValue />

                  <SelectIcon asChild>
                    <ChevronDown color="#6C7275" className="h-6 w-6" />
                  </SelectIcon>
                </SelectTrigger>

                <SelectContent className="rounded-xl">
                  {prices.map((category) => (
                    <SelectItem
                      key={category.value}
                      value={category.value}
                      className={cn(
                        "cursor-pointer",
                        "rounded-lg",
                        "p-2",
                        "font-inter font-normal",
                        "text-sm text-[#6C7275]",
                        "focus:bg-[#F3F5F7] focus:text-[#141718]",
                        "data-[state=checked]:font-semibold data-[state=checked]:text-[#141718]",
                      )}
                    >
                      {category.text}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center justify-between border-y border-[#EAEAEA] py-2 lg:col-start-3 lg:justify-end lg:gap-8 lg:border-y-0 lg:py-0">
            {/* sort by */}
            <Select>
              <SelectTrigger
                className={cn(
                  "h-auto",
                  "max-w-[120px] md:max-w-[150px]",
                  "gap-1",
                  "justify-start",
                  "lg:justify-end",
                  "border-none outline-none",
                  "p-0",
                  "font-inter font-semibold",
                  "text-sm text-[#121212]",
                  "focus:ring-0 focus:ring-offset-0",
                )}
              >
                <SelectValue placeholder="sort by" />

                <SelectIcon asChild>
                  <ChevronDown color="#121212" className="h-5 w-5" />
                </SelectIcon>
              </SelectTrigger>

              <SelectContent className="w-[200px] rounded-xl">
                {sorts.map((sort) => (
                  <SelectItem
                    key={sort.value}
                    value={sort.value}
                    className={cn(
                      "cursor-pointer",
                      "rounded-lg",
                      "p-2",
                      "font-inter font-normal",
                      "text-sm text-[#6C7275]",
                      "focus:bg-[#F3F5F7] focus:text-[#141718]",
                      "data-[state=checked]:font-semibold data-[state=checked]:text-[#141718]",
                    )}
                  >
                    {sort.text}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* product card shape */}
            <div className="flex">
              <div className="border border-r-0 border-[#E8ECEF] px-2.5 py-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H6C6.39782 1.5 6.77936 1.65804 7.06066 1.93934C7.34196 2.22064 7.5 2.60218 7.5 3V6C7.5 6.39782 7.34196 6.77936 7.06066 7.06066C6.77936 7.34196 6.39782 7.5 6 7.5H3C2.60218 7.5 2.22064 7.34196 1.93934 7.06066C1.65804 6.77936 1.5 6.39782 1.5 6V3ZM9 3C9 2.60218 9.15804 2.22064 9.43934 1.93934C9.72064 1.65804 10.1022 1.5 10.5 1.5H13.5C13.8978 1.5 14.2794 1.65804 14.5607 1.93934C14.842 2.22064 15 2.60218 15 3V6C15 6.39782 14.842 6.77936 14.5607 7.06066C14.2794 7.34196 13.8978 7.5 13.5 7.5H10.5C10.1022 7.5 9.72064 7.34196 9.43934 7.06066C9.15804 6.77936 9 6.39782 9 6V3ZM16.5 3C16.5 2.60218 16.658 2.22064 16.9393 1.93934C17.2206 1.65804 17.6022 1.5 18 1.5H21C21.3978 1.5 21.7794 1.65804 22.0607 1.93934C22.342 2.22064 22.5 2.60218 22.5 3V6C22.5 6.39782 22.342 6.77936 22.0607 7.06066C21.7794 7.34196 21.3978 7.5 21 7.5H18C17.6022 7.5 17.2206 7.34196 16.9393 7.06066C16.658 6.77936 16.5 6.39782 16.5 6V3ZM1.5 10.5C1.5 10.1022 1.65804 9.72064 1.93934 9.43934C2.22064 9.15804 2.60218 9 3 9H6C6.39782 9 6.77936 9.15804 7.06066 9.43934C7.34196 9.72064 7.5 10.1022 7.5 10.5V13.5C7.5 13.8978 7.34196 14.2794 7.06066 14.5607C6.77936 14.842 6.39782 15 6 15H3C2.60218 15 2.22064 14.842 1.93934 14.5607C1.65804 14.2794 1.5 13.8978 1.5 13.5V10.5ZM9 10.5C9 10.1022 9.15804 9.72064 9.43934 9.43934C9.72064 9.15804 10.1022 9 10.5 9H13.5C13.8978 9 14.2794 9.15804 14.5607 9.43934C14.842 9.72064 15 10.1022 15 10.5V13.5C15 13.8978 14.842 14.2794 14.5607 14.5607C14.2794 14.842 13.8978 15 13.5 15H10.5C10.1022 15 9.72064 14.842 9.43934 14.5607C9.15804 14.2794 9 13.8978 9 13.5V10.5ZM16.5 10.5C16.5 10.1022 16.658 9.72064 16.9393 9.43934C17.2206 9.15804 17.6022 9 18 9H21C21.3978 9 21.7794 9.15804 22.0607 9.43934C22.342 9.72064 22.5 10.1022 22.5 10.5V13.5C22.5 13.8978 22.342 14.2794 22.0607 14.5607C21.7794 14.842 21.3978 15 21 15H18C17.6022 15 17.2206 14.842 16.9393 14.5607C16.658 14.2794 16.5 13.8978 16.5 13.5V10.5ZM1.5 18C1.5 17.6022 1.65804 17.2206 1.93934 16.9393C2.22064 16.658 2.60218 16.5 3 16.5H6C6.39782 16.5 6.77936 16.658 7.06066 16.9393C7.34196 17.2206 7.5 17.6022 7.5 18V21C7.5 21.3978 7.34196 21.7794 7.06066 22.0607C6.77936 22.342 6.39782 22.5 6 22.5H3C2.60218 22.5 2.22064 22.342 1.93934 22.0607C1.65804 21.7794 1.5 21.3978 1.5 21V18ZM9 18C9 17.6022 9.15804 17.2206 9.43934 16.9393C9.72064 16.658 10.1022 16.5 10.5 16.5H13.5C13.8978 16.5 14.2794 16.658 14.5607 16.9393C14.842 17.2206 15 17.6022 15 18V21C15 21.3978 14.842 21.7794 14.5607 22.0607C14.2794 22.342 13.8978 22.5 13.5 22.5H10.5C10.1022 22.5 9.72064 22.342 9.43934 22.0607C9.15804 21.7794 9 21.3978 9 21V18ZM16.5 18C16.5 17.6022 16.658 17.2206 16.9393 16.9393C17.2206 16.658 17.6022 16.5 18 16.5H21C21.3978 16.5 21.7794 16.658 22.0607 16.9393C22.342 17.2206 22.5 17.6022 22.5 18V21C22.5 21.3978 22.342 21.7794 22.0607 22.0607C21.7794 22.342 21.3978 22.5 21 22.5H18C17.6022 22.5 17.2206 22.342 16.9393 22.0607C16.658 21.7794 16.5 21.3978 16.5 21V18Z"
                    fill="#6C7275"
                  />
                </svg>
              </div>
              <div className="border border-r-0 border-[#E8ECEF] px-2.5 py-2">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.75 13.5C9.34674 13.5 9.91903 13.7371 10.341 14.159C10.7629 14.581 11 15.1533 11 15.75V19.25C11 19.8467 10.7629 20.419 10.341 20.841C9.91903 21.2629 9.34674 21.5 8.75 21.5H5.25C4.65326 21.5 4.08097 21.2629 3.65901 20.841C3.23705 20.419 3 19.8467 3 19.25V15.75C3 15.1533 3.23705 14.581 3.65901 14.159C4.08097 13.7371 4.65326 13.5 5.25 13.5H8.75ZM18.75 13.5C19.3467 13.5 19.919 13.7371 20.341 14.159C20.7629 14.581 21 15.1533 21 15.75V19.25C21 19.8467 20.7629 20.419 20.341 20.841C19.919 21.2629 19.3467 21.5 18.75 21.5H15.25C14.6533 21.5 14.081 21.2629 13.659 20.841C13.2371 20.419 13 19.8467 13 19.25V15.75C13 15.1533 13.2371 14.581 13.659 14.159C14.081 13.7371 14.6533 13.5 15.25 13.5H18.75ZM8.75 3.5C9.34674 3.5 9.91903 3.73705 10.341 4.15901C10.7629 4.58097 11 5.15326 11 5.75V9.25C11 9.84674 10.7629 10.419 10.341 10.841C9.91903 11.2629 9.34674 11.5 8.75 11.5H5.25C4.65326 11.5 4.08097 11.2629 3.65901 10.841C3.23705 10.419 3 9.84674 3 9.25V5.75C3 5.15326 3.23705 4.58097 3.65901 4.15901C4.08097 3.73705 4.65326 3.5 5.25 3.5H8.75ZM18.75 3.5C19.3467 3.5 19.919 3.73705 20.341 4.15901C20.7629 4.58097 21 5.15326 21 5.75V9.25C21 9.84674 20.7629 10.419 20.341 10.841C19.919 11.2629 19.3467 11.5 18.75 11.5H15.25C14.6533 11.5 14.081 11.2629 13.659 10.841C13.2371 10.419 13 9.84674 13 9.25V5.75C13 5.15326 13.2371 4.58097 13.659 4.15901C14.081 3.73705 14.6533 3.5 15.25 3.5H18.75Z"
                    fill="#6C7275"
                  />
                </svg>
              </div>
              <div className="border border-r-0 border-[#E8ECEF] px-2.5 py-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.75 13C9.34674 13 9.91903 13.2371 10.341 13.659C10.7629 14.081 11 14.6533 11 15.25V18.75C11 19.3467 10.7629 19.919 10.341 20.341C9.91903 20.7629 9.34674 21 8.75 21H5.25C4.65326 21 4.08097 20.7629 3.65901 20.341C3.23705 19.919 3 19.3467 3 18.75V15.25C3 14.6533 3.23705 14.081 3.65901 13.659C4.08097 13.2371 4.65326 13 5.25 13H8.75ZM18.75 13C19.3467 13 19.919 13.2371 20.341 13.659C20.7629 14.081 21 14.6533 21 15.25V18.75C21 19.3467 20.7629 19.919 20.341 20.341C19.919 20.7629 19.3467 21 18.75 21H15.25C14.6533 21 14.081 20.7629 13.659 20.341C13.2371 19.919 13 19.3467 13 18.75V15.25C13 14.6533 13.2371 14.081 13.659 13.659C14.081 13.2371 14.6533 13 15.25 13H18.75ZM8.75 3C9.34674 3 9.91903 3.23705 10.341 3.65901C10.7629 4.08097 11 4.65326 11 5.25V8.75C11 9.34674 10.7629 9.91903 10.341 10.341C9.91903 10.7629 9.34674 11 8.75 11H5.25C4.65326 11 4.08097 10.7629 3.65901 10.341C3.23705 9.91903 3 9.34674 3 8.75V5.25C3 4.65326 3.23705 4.08097 3.65901 3.65901C4.08097 3.23705 4.65326 3 5.25 3H8.75ZM18.75 3C19.3467 3 19.919 3.23705 20.341 3.65901C20.7629 4.08097 21 4.65326 21 5.25V8.75C21 9.34674 20.7629 9.91903 20.341 10.341C19.919 10.7629 19.3467 11 18.75 11H15.25C14.6533 11 14.081 10.7629 13.659 10.341C13.2371 9.91903 13 9.34674 13 8.75V5.25C13 4.65326 13.2371 4.08097 13.659 3.65901C14.081 3.23705 14.6533 3 15.25 3H18.75Z"
                    fill="#6C7275"
                  />
                  <path d="M3 6H10.998V18H3V6Z" fill="#6C7275" />
                  <path d="M13.002 6H21V18H13.002V6Z" fill="#6C7275" />
                </svg>
              </div>
              <div className="border border-[#E8ECEF] bg-[#F3F5F7] px-2.5 py-2">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 15.75C13 15.1533 13.2371 14.581 13.659 14.159C14.081 13.7371 14.6533 13.5 15.25 13.5L18.75 13.5C19.3467 13.5 19.919 13.7371 20.341 14.159C20.7629 14.581 21 15.1533 21 15.75L21 19.25C21 19.8467 20.7629 20.419 20.341 20.841C19.919 21.2629 19.3467 21.5 18.75 21.5L15.25 21.5C14.6533 21.5 14.081 21.2629 13.659 20.841C13.2371 20.419 13 19.8467 13 19.25L13 15.75ZM13 5.75C13 5.15326 13.2371 4.58097 13.659 4.15901C14.081 3.73705 14.6533 3.5 15.25 3.5L18.75 3.5C19.3467 3.5 19.919 3.73705 20.341 4.15901C20.7629 4.58097 21 5.15326 21 5.75L21 9.25C21 9.84674 20.7629 10.419 20.341 10.841C19.919 11.2629 19.3467 11.5 18.75 11.5L15.25 11.5C14.6533 11.5 14.081 11.2629 13.659 10.841C13.2371 10.419 13 9.84674 13 9.25L13 5.75ZM3 15.75C3 15.1533 3.23705 14.581 3.65901 14.159C4.08097 13.7371 4.65326 13.5 5.25 13.5L8.75 13.5C9.34674 13.5 9.91903 13.7371 10.341 14.159C10.7629 14.581 11 15.1533 11 15.75L11 19.25C11 19.8467 10.7629 20.419 10.341 20.841C9.91903 21.2629 9.34674 21.5 8.75 21.5L5.25 21.5C4.65326 21.5 4.08097 21.2629 3.65901 20.841C3.23705 20.419 3 19.8467 3 19.25L3 15.75ZM3 5.75C3 5.15326 3.23705 4.58097 3.65901 4.15901C4.08097 3.73705 4.65326 3.5 5.25 3.5L8.75 3.5C9.34674 3.5 9.91903 3.73705 10.341 4.15901C10.7629 4.58097 11 5.15326 11 5.75L11 9.25C11 9.84674 10.7629 10.419 10.341 10.841C9.91903 11.2629 9.34674 11.5 8.75 11.5L5.25 11.5C4.65326 11.5 4.08097 11.2629 3.65901 10.841C3.23705 10.419 3 9.84674 3 9.25L3 5.75Z"
                    fill="#141718"
                  />
                  <path
                    d="M6 21.5L6 13.502L18 13.502L18 21.5L6 21.5Z"
                    fill="#141718"
                  />
                  <path
                    d="M6 11.498L6 3.5L18 3.5L18 11.498L6 11.498Z"
                    fill="#141718"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 py-20 pt-8 lg:space-y-20">
          <div className="grid grid-cols-2 gap-x-2 gap-y-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-8 xl:grid-cols-5">
            {products.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>

          <div className="flex justify-center">
            <button className="rounded-full border border-[#141718] px-10 py-1.5 font-inter text-base font-medium text-[#141718]">
              Show more
            </button>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
