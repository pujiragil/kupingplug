"use client";

import { useKeenSlider } from "keen-slider/react";

import products from "@/data/product.json";

import "keen-slider/keen-slider.min.css";
import ProductCard from "@/components/ui/card/productCard";

export default function ProductSlider() {
  const [slideRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: "auto",
      spacing: 16,
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
