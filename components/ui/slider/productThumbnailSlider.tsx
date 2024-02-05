// package
import Image from "next/image";
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react";

function ThumbnailPlugin(
  mainRef: React.MutableRefObject<KeenSliderInstance | null>,
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("border-black");
        slide.classList.add("border-transparent");
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.remove("border-transparent");
      slider.slides[idx].classList.add("border-black");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

type ProductThumbnailSLiderProps = {
  products: string[];
  thumbnailInstanceRef: React.MutableRefObject<KeenSliderInstance | null>;
};

const ProductThumbnailSlider: React.FC<ProductThumbnailSLiderProps> = ({
  products,
  thumbnailInstanceRef,
}) => {
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: "auto",
        spacing: 16,
      },
    },
    [ThumbnailPlugin(thumbnailInstanceRef)],
  );

  return (
    <div ref={thumbnailRef} className="keen-slider">
      {products.map((product) => (
        <div
          key={product}
          className="keen-slider__slide flex max-h-[70px] min-h-[70px] min-w-[70px] max-w-[70px] cursor-pointer items-center justify-center border border-transparent p-1"
        >
          <Image
            width={231}
            height={308}
            src={`/images/${product}`}
            alt="sumplekuping"
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductThumbnailSlider;
