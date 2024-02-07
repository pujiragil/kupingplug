"use client";

// ui
import * as ProductCard from "@/ui/card/productCard";

// data
import products from "@/data/product.json";

const ProductRecommendation = () => {
  return (
    <div className="space-y-10 lg:space-y-12">
      <h2 className="font-poppins text-[28px] font-medium text-[#141718]">
        You might also like
      </h2>

      <div className="flex flex-nowrap gap-4 overflow-x-scroll pb-10 scrollbar scrollbar-track-[#E8ECEF] scrollbar-thumb-[#343839] scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-h-2 lg:pb-12">
        {products.map((product) => (
          <ProductCard.Root
            key={product.id}
            data={product}
            className="w-[231px] flex-none"
          >
            <ProductCard.Thumbnail>
              <ProductCard.ThumbnailBadge>
                <div className="space-y-2">
                  <ProductCard.Badge intent="default">new</ProductCard.Badge>
                  <ProductCard.Badge intent="discount">-50%</ProductCard.Badge>
                </div>
                <ProductCard.WishlistButton />
              </ProductCard.ThumbnailBadge>

              <ProductCard.Image />
            </ProductCard.Thumbnail>

            <ProductCard.Content>
              <ProductCard.Ratings />
              <ProductCard.Name />
              <ProductCard.Price />
            </ProductCard.Content>
          </ProductCard.Root>
        ))}
      </div>
    </div>
  );
};

export default ProductRecommendation;
