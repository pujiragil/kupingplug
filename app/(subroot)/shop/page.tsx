// packages
import { ChevronDown } from "lucide-react";

// layouts
import SectionLayout from "@/layouts/sectionLayout";

// ui
import Text from "@/ui/text";
import Heading from "@/ui/head";
import { DropdownIcon } from "@/ui/assets/svg";

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
import CatalogToggle from "@/app/(subroot)/shop/catalogToggle";
import CatalogProduct from "@/app/(subroot)/shop/catalogProduct";

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
                    "group",
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
                    <ChevronDown
                      color="#6C7275"
                      className="h-6 w-6 transition-transform duration-200 group-data-[state=open]:rotate-180"
                    />
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
                    "group",
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
                    <ChevronDown
                      color="#6C7275"
                      className="h-6 w-6 transition-transform duration-200 group-data-[state=open]:rotate-180"
                    />
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
                  "group",
                  "h-auto",
                  "p-0",
                  "gap-1",
                  "max-w-[120px] md:max-w-[150px]",
                  "justify-start lg:justify-end",
                  "border-none outline-none",
                  "font-inter font-semibold",
                  "text-sm text-[#121212]",
                  "focus:ring-0 focus:ring-offset-0",
                )}
              >
                <SelectValue placeholder="sort by" />

                <SelectIcon asChild>
                  <ChevronDown
                    color="#121212"
                    className="h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180"
                  />
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
            <CatalogToggle />
          </div>
        </div>

        <CatalogProduct />
      </div>
    </SectionLayout>
  );
}
