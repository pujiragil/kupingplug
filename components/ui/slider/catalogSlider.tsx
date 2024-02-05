"use client";

// package
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";

// ui
import * as ProductCard from "@/ui/card/productCard";

// data
import products from "@/data/product.json";

// css
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CatalogSlider() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [slideRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
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
    <div className="relative">
      {loaded && instanceRef.current && (
        <>
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}
      <div ref={slideRef} className="keen-slider">
        {products.map((product) => (
          <div key={product.id} className="keen-slider__slide">
            <ProductCard.Root data={product}>
              <ProductCard.Thumbnail>
                <ProductCard.ThumbnailBadge>
                  <ProductCard.Badge>new</ProductCard.Badge>
                  <ProductCard.WishlistButton />
                </ProductCard.ThumbnailBadge>

                <Link href="/product">
                  <ProductCard.Image />
                </Link>
              </ProductCard.Thumbnail>

              <Link href="/product">
                <ProductCard.Content>
                  <ProductCard.Ratings />
                  <ProductCard.Name />
                  <ProductCard.Price />
                </ProductCard.Content>
              </Link>
            </ProductCard.Root>
          </div>
        ))}
      </div>
    </div>
  );
}
