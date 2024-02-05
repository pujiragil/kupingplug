"use client";

// package
import Image from "next/image";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// ui
import ProductThumbnailSlider from "@/ui/slider/productThumbnailSlider";

// lib
import { cn } from "@/lib/utils";

// css
import "keen-slider/keen-slider.min.css";

interface ProductNavigationButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  position: "right" | "left";
  stroke: string;
}

const ProductNavigationButton: React.FC<ProductNavigationButtonProps> = ({
  position,
  stroke,
  ...props
}) => {
  const navigationIcon =
    position === "right" ? (
      <ArrowRight stroke={stroke} className="h-6 w-6" />
    ) : (
      <ArrowLeft stroke={stroke} className="h-6 w-6" />
    );
  return (
    <button
      disabled
      className={cn(
        "absolute top-1/2 -translate-y-[50%] rounded-full bg-white p-2 shadow",
        position === "right" ? "right-4" : "left-4",
      )}
      {...props}
    >
      {navigationIcon}
    </button>
  );
};

const ProductSlider = ({ images }: { images: string[] }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    created() {
      setLoaded(true);
    },
    slideChanged(slide) {
      setCurrentSlide(slide.track.details.rel);
    },
  });

  return (
    <div className="grid w-full gap-6 lg:sticky lg:top-0">
      <div className="relative flex w-full overflow-hidden">
        <div
          ref={sliderRef}
          className="keen-slider h-[420px] w-full bg-[#F3F5F7] lg:h-[400px]"
        >
          {images.map((image, idx, array) => (
            <div
              key={image}
              className="keen-slider__slide flex items-center justify-center"
            >
              <Image
                quality={100}
                width={231}
                height={308}
                src={`/images/${image}`}
                alt="sumplekuping"
                className={cn(
                  "h-full w-full",
                  idx === array.length - 1
                    ? "object-cover"
                    : "object-scale-down",
                )}
              />
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <ProductNavigationButton
              position="left"
              stroke={currentSlide === 0 ? "#6C7275" : "#141718"}
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />
            <ProductNavigationButton
              position="right"
              stroke={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
                  ? "#6C7275"
                  : "#141718"
              }
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      <div className="hidden w-full overflow-hidden lg:flex">
        <ProductThumbnailSlider
          products={images}
          thumbnailInstanceRef={instanceRef}
        />
      </div>
    </div>
  );
};

export default ProductSlider;
