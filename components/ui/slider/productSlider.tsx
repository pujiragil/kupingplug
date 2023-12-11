"use client";

// package
import { useKeenSlider } from "keen-slider/react";

// ui
import ProductCard from "@/ui/card/productCard";

// data
import products from "@/data/product.json";

// css
import "keen-slider/keen-slider.min.css";

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
        <div key={product.id} className="keen-slider__slide">
          <ProductCard data={product} />
        </div>
      ))}
    </div>
  );
}
