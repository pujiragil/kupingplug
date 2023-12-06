"use client";

import { useKeenSlider } from "keen-slider/react";

import products from "@/data/product.json";

import "keen-slider/keen-slider.min.css";
import ProductCard from "@/components/ui/card/productCard";

export default function Slider() {
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
        <div
          key={product.id}
          style={{ minWidth: 231, maxWidth: 231 }}
          className="keen-slider__slide"
        >
          <ProductCard data={product} />
        </div>
      ))}
    </div>
  );
}
