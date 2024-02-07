// package
import { notFound } from "next/navigation";
import { MinusIcon, PlusIcon } from "lucide-react";

// layouts
import SectionLayout from "@/layouts/sectionLayout";

// lib
import { formatCurrency } from "@/lib/utils";

// ui
import { StarIcon, WishlistIcon } from "@/ui/assets/svg";
import Button from "@/ui/button";
import ProductSlider from "@/ui/slider/productSlider";
import ProductTab from "@/app/(subroot)/products/productTab";
import ProductVariant from "@/app/(subroot)/products/productVariant";
import ProductRecommendation from "@/app/(subroot)/products/productRecommendation";
import { Product } from "@/types/product";

async function getProductById(productId: string) {
  const res = await fetch(
    `https://kupingplug.vercel.app/api/products/${productId}`,
  );

  if (res.status === 404) return notFound();

  return res.json();
}

export default async function Page({
  params,
}: {
  params: { productId: string };
}) {
  const product: Product = await getProductById(params.productId);

  return (
    <SectionLayout>
      <div className="mx-auto space-y-6 p-8 lg:space-y-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(min-content,_400px)_1fr_280px]">
          <div className="relative h-full w-full">
            <ProductSlider images={product.images} />
          </div>

          <div className="mx-auto max-w-[420px] md:max-w-[520px] lg:max-w-none">
            <div className="space-y-4 border-b border-[#E8ECEF] pb-6">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1">
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                </div>

                <span className="font-inter text-xs font-normal text-[#141718]">
                  11 Reviews
                </span>
              </div>

              <h1 className="font-poppins text-[40px] font-medium text-[#141718]">
                {product.name}
              </h1>

              <p className="font-inter text-base font-normal text-[#6C7275]">
                {product.description}
              </p>

              <p className="font-poppins text-[28px] font-medium text-[#141718]">
                <span className="align-middle">
                  {formatCurrency(product.price)}
                </span>
                <span className="ml-3 align-middle text-xl text-[#6C7275] line-through decoration-2">
                  $400.00
                </span>
              </p>
            </div>

            <div className="space-y-3 border-b border-[#E8ECEF] py-6">
              <p className="font-inter text-base font-normal text-[#343839]">
                Offer expires in:
              </p>

              <div className="flex gap-4">
                <div className="w-fit">
                  <div className="flex h-[60px] w-[60px] items-center justify-center bg-[#F3F5F7] font-poppins text-[34px] font-medium text-[#141718]">
                    02
                  </div>
                  <p className="text-center font-inter text-xs font-normal text-[#6C7275]">
                    Days
                  </p>
                </div>
                <div className="w-fit">
                  <div className="flex h-[60px] w-[60px] items-center justify-center bg-[#F3F5F7] font-poppins text-[34px] font-medium text-[#141718]">
                    12
                  </div>
                  <p className="text-center font-inter text-xs font-normal text-[#6C7275]">
                    Hours
                  </p>
                </div>
                <div className="w-fit">
                  <div className="flex h-[60px] w-[60px] items-center justify-center bg-[#F3F5F7] font-poppins text-[34px] font-medium text-[#141718]">
                    45
                  </div>
                  <p className="text-center font-inter text-xs font-normal text-[#6C7275]">
                    Minutes
                  </p>
                </div>
                <div className="w-fit">
                  <div className="flex h-[60px] w-[60px] items-center justify-center bg-[#F3F5F7] font-poppins text-[34px] font-medium text-[#141718]">
                    05
                  </div>
                  <p className="text-center font-inter text-xs font-normal text-[#6C7275]">
                    Seconds
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 py-6">
              <div className="space-y-2">
                <p className="font-inter text-base font-semibold text-[#6C7275]">
                  Measurements
                </p>
                <p className="font-inter text-xl font-normal text-[#141718]">
                  17 1/2x20 5/8
                </p>
              </div>

              <ProductVariant variants={product.variants} />
            </div>

            <div className="space-y-4 border-b border-[#E8ECEF] py-6 lg:hidden">
              <div className="flex h-10 gap-2 lg:h-[52px]">
                <div className="flex h-full w-1/2 items-center justify-between rounded bg-[#F5F5F5] px-2 md:w-3/5 lg:px-4">
                  <MinusIcon
                    stroke="#141718"
                    className="h-4 w-4 lg:h-5 lg:w-6"
                  />
                  <span className="font-inter text-sm font-semibold text-[#141718] lg:text-base">
                    1
                  </span>
                  <PlusIcon
                    stroke="#141718"
                    className="h-4 w-4 lg:h-5 lg:w-6"
                  />
                </div>

                <Button
                  variant="ghost"
                  width="full"
                  className="flex h-full items-center justify-center gap-2 rounded border border-[#141718]"
                >
                  <WishlistIcon
                    stroke="#141718"
                    className="h-4 w-4 lg:h-6 lg:w-6"
                  />
                  <span className="font-inter text-sm font-medium text-[#141718] lg:text-base">
                    Wishlist
                  </span>
                </Button>
              </div>

              <Button
                width="full"
                fontSize="sm"
                className="h-10 rounded lg:h-[52px] lg:text-base"
              >
                Add to Cart
              </Button>
            </div>

            <div className="space-y-2 pt-6">
              <div className="grid grid-cols-[100px_1fr] font-inter text-xs lg:grid-cols-[140px_1fr] lg:text-sm">
                <span className="text-[#6C7275]">SKU</span>
                <span className="text-[#141718]">1117</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] font-inter text-xs lg:grid-cols-[140px_1fr] lg:text-sm">
                <span className="text-[#6C7275]">CATEGORY</span>
                <span className="text-[#141718]">
                  {product.categories.map((category) => (
                    <span
                      key={category}
                      className="after:ml-0.5 after:mr-1 after:content-[','] last:after:mx-0 last:after:content-['']"
                    >
                      {category}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </div>

          <div className="hidden h-fit flex-col gap-8 rounded border border-[#E8ECEF] p-4 lg:flex">
            <div className="space-y-2">
              <p className="font-poppins font-semibold text-[#141718]">
                Set quantity
              </p>
              <div className="flex items-end justify-between">
                <p className="font-inter text-sm text-[#6C7275]">Subtotal</p>
                <div className="space-y-1 text-right">
                  <p className="font-inter text-sm text-[#6C7275] line-through">
                    $400.00
                  </p>
                  <p className="font-poppins text-xl font-semibold text-[#141718]">
                    $199.00
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex h-10 items-center justify-between rounded bg-[#F5F5F5] px-2 lg:px-4">
                <MinusIcon stroke="#141718" className="h-4 w-4 lg:h-5 lg:w-6" />
                <span className="font-inter text-sm font-semibold text-[#141718]">
                  1
                </span>
                <PlusIcon stroke="#141718" className="h-4 w-4 lg:h-5 lg:w-6" />
              </div>
              <Button
                variant="ghost"
                width="full"
                className="flex h-10 items-center justify-center gap-2 rounded border border-[#141718]"
              >
                <WishlistIcon stroke="#141718" className="h-4 w-4" />
                <span className="font-inter text-sm font-medium text-[#141718]">
                  Wishlist
                </span>
              </Button>
              <Button width="full" fontSize="sm" className="h-10 rounded">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        <ProductTab tabs={product.tabs} />
        <ProductRecommendation />
      </div>
    </SectionLayout>
  );
}
