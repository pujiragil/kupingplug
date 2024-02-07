"use client";

import { cn } from "@/lib/utils";
import { Product } from "@/types/product";
import Image from "next/image";
import { useState } from "react";

const ProductVariant = ({ variants }: { variants: Product["variants"] }) => {
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);

  return (
    <div className="space-y-2">
      <p className="font-inter text-base font-semibold text-[#6C7275]">
        Choose Color
      </p>

      <div className="space-y-4">
        <p className="font-inter text-xl font-normal capitalize text-[#141718]">
          {selectedVariant.name}
        </p>

        <div className="flex-no-wrap flex gap-4 overflow-x-auto">
          {variants.map((variant) => (
            <div
              key={variant.name}
              onClick={() => setSelectedVariant(variant)}
              className={cn(
                "h-[70px] w-[70px] flex-none cursor-pointer overflow-hidden border p-1",
                selectedVariant.image.src === variant.image.src
                  ? "border-[#141718]"
                  : "border-transparent",
              )}
            >
              <Image
                width={231}
                height={308}
                src={`/images/${variant.image.src}`}
                alt={variant.image.alt}
                className="h-full w-full object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductVariant;
