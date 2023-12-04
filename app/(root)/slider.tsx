"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";
import Button from "@/components/ui/button";
import { StarIcon, WishlistIcon } from "@/components/ui/assets/svg";

function DummyProduct() {
  return (
    <div className="space-y-3">
      {/* card image */}
      <div className="group relative flex h-[308px] flex-col justify-between overflow-hidden bg-[#F3F5F7] p-3.5">
        <div className="z-10 flex items-center justify-between">
          <span className="rounded-[4px] bg-white px-3.5 py-1 font-inter text-base font-bold text-[#121212]">
            NEW
          </span>

          {/* hover button wishlist  */}
          <button className="shadow-[rgba(15, 15, 15, 0.12)] flex h-8 w-8 items-center justify-center rounded-full bg-white opacity-0 shadow-md transition-opacity duration-100 group-hover:opacity-100">
            <WishlistIcon className="h-5 w-5" />
          </button>
        </div>

        {/* background image with next image components */}
        <Image
          src="/images/sumplekuping.png"
          width={231}
          height={308}
          alt="sumplekuping"
          className="absolute left-0 top-0 z-0 h-full w-full object-cover"
        />

        {/* hover button cart */}
        <Button
          intent="primary"
          size="full"
          className="z-10 translate-y-[calc(100%+14px)] transition-transform duration-200 group-hover:translate-y-0"
        >
          Add to cart
        </Button>
      </div>

      {/* card content */}
      <div className="space-y-1">
        <div className="flex gap-0.5">
          <StarIcon className="h-4 w-4" />
          <StarIcon className="h-4 w-4" />
          <StarIcon className="h-4 w-4" />
          <StarIcon className="h-4 w-4" />
          <StarIcon className="h-4 w-4" />
        </div>

        <h4 className="font-inter text-base font-semibold text-[#141718]">
          Skullcandy - Crusher anc 2 wireless headphones
        </h4>

        <p className="font-inter text-sm font-semibold text-[#121212]">
          $299.99
        </p>
      </div>
    </div>
  );
}

export default function Slider() {
  const [slideRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: "auto",
      spacing: 16,
    },
  });

  return (
    <div ref={slideRef} className="keen-slider">
      <div
        className="keen-slider__slide"
        style={{ maxWidth: 231, minWidth: 231 }}
      >
        <DummyProduct />
      </div>
      <div
        className="keen-slider__slide"
        style={{ maxWidth: 231, minWidth: 231 }}
      >
        <DummyProduct />
      </div>
      <div
        className="keen-slider__slide"
        style={{ maxWidth: 231, minWidth: 231 }}
      >
        <DummyProduct />
      </div>
      <div
        className="keen-slider__slide"
        style={{ maxWidth: 231, minWidth: 231 }}
      >
        <DummyProduct />
      </div>
      <div
        className="keen-slider__slide"
        style={{ maxWidth: 231, minWidth: 231 }}
      >
        <DummyProduct />
      </div>
      <div
        className="keen-slider__slide"
        style={{ maxWidth: 231, minWidth: 231 }}
      >
        <DummyProduct />
      </div>
    </div>
  );
}
