"use client";

import ProductCard from "@/components/ui/card/productCard";
import useEmblaCarousel from "embla-carousel-react";
import products from "@/data/product.json";

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ align: "start" });

  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div className="grid auto-cols-[50%] grid-flow-col gap-x-2 md:auto-cols-[33.3%] md:gap-x-4 lg:auto-cols-[25%] xl:auto-cols-[20%]">
        {products.map((product) => (
          <div key={product.id} className="embla__slide">
            <ProductCard data={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
