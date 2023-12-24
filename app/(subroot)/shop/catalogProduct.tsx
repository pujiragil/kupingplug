"use client";

import * as ProductCard from "@/ui/card/productCard";
import products from "@/data/product.json";
import { cn } from "@/lib/utils";
import { useProductDetail } from "@/stores/zustand";
import { WishlistIcon } from "@/components/ui/assets/svg";

const CatalogProduct = () => {
  const showDetail = useProductDetail((state) => state.showDetail);
  return (
    <div className="space-y-8 py-20 pt-8 lg:space-y-20">
      <div
        className={cn(
          "grid  gap-x-2 gap-y-4 lg:gap-x-4 lg:gap-y-8",
          showDetail
            ? "grid-cols-1 lg:grid-cols-2"
            : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
        )}
      >
        {products.map((product) => (
          <ProductCard.Root
            key={product.id}
            data={product}
            className={
              showDetail ? "sm:grid-cols-2 sm:place-items-center" : undefined
            }
          >
            <ProductCard.Thumbnail>
              <ProductCard.ThumbnailBadge>
                <div className="space-y-1.5">
                  <ProductCard.Badge>new</ProductCard.Badge>
                  <ProductCard.Badge intent="discount">
                    50% off
                  </ProductCard.Badge>
                </div>

                {!showDetail && <ProductCard.WishlistButton />}
              </ProductCard.ThumbnailBadge>

              <ProductCard.Image />

              {!showDetail && (
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <ProductCard.Button
                    size="full"
                    className="translate-y-[calc(100%+20px)] px-6 py-2 transition-transform duration-200 ease-out group-hover:translate-y-0"
                  >
                    Add to cart
                  </ProductCard.Button>
                </div>
              )}
            </ProductCard.Thumbnail>

            <ProductCard.Content
              className={showDetail ? "space-y-3 p-6" : undefined}
            >
              <ProductCard.Ratings />
              <ProductCard.Name />
              <ProductCard.Price />
              {showDetail && (
                <>
                  <ProductCard.Description className="line-clamp-2 lg:line-clamp-3" />

                  <div className="flex flex-col gap-2">
                    <ProductCard.Button size="full" className="px-6 py-2">
                      Add to cart
                    </ProductCard.Button>
                    <ProductCard.Button
                      size="full"
                      className="flex items-center justify-center gap-2 border-2 border-transparent bg-white px-6 py-2 text-[#141718] hover:border-[#141718]"
                    >
                      <WishlistIcon fill="#141718" className="h-5 w-5" />
                      Wishlist
                    </ProductCard.Button>
                  </div>
                </>
              )}
            </ProductCard.Content>
          </ProductCard.Root>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="rounded-full border border-[#141718] px-10 py-1.5 font-inter text-base font-medium text-[#141718]">
          Show more
        </button>
      </div>
    </div>
  );
};

export default CatalogProduct;
