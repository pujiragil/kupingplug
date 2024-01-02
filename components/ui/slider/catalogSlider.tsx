"use client";

// package
import { useKeenSlider } from "keen-slider/react";

// ui
import * as ProductCard from "@/ui/card/productCard";

// data
import products from "@/data/product.json";

// css
import "keen-slider/keen-slider.min.css";

export default function CatalogSlider() {
  const [slideRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      spacing: 8,
      perView: 2,
    },
    mode: "snap",
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 16,
        },
        mode: "free-snap",
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 4,
          spacing: 16,
        },
        mode: "free-snap",
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 5,
          spacing: 16,
        },
        mode: "free-snap",
      },
    },
    renderMode: "performance",
  });

  return (
    <div ref={slideRef} className="keen-slider">
      {products.map((product) => (
        <div key={product.id} className="keen-slider__slide">
          <ProductCard.Root data={product}>
            <ProductCard.Thumbnail>
              <ProductCard.ThumbnailBadge>
                <ProductCard.Badge>new</ProductCard.Badge>
                <ProductCard.WishlistButton />
              </ProductCard.ThumbnailBadge>

              <ProductCard.Image />

              <div className="absolute bottom-0 left-0 w-full p-4">
                <ProductCard.Button
                  width="full"
                  className="translate-y-[calc(100%+20px)] transition-transform duration-200 ease-out group-hover:translate-y-0"
                >
                  Add to cart
                </ProductCard.Button>
              </div>
            </ProductCard.Thumbnail>

            <ProductCard.Content>
              <ProductCard.Ratings />
              <ProductCard.Name />
              <ProductCard.Price />
            </ProductCard.Content>
          </ProductCard.Root>
        </div>
      ))}
    </div>
  );
}
