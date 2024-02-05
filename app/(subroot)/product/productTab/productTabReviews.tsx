// package
import Image from "next/image";

// types
import { ProductReviews } from "@/types/product";

// lib
import { formatRating } from "@/lib/utils";

// ui
import { DropdownIcon, StarIcon } from "@/components/ui/assets/svg";

const ProductTabReviews = ({ data }: { data: ProductReviews }) => {
  const totalReviews = data.length;

  return (
    <div className="space-y-10 pb-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <p className="font-poppins text-2xl font-medium text-[#141718]">
          {totalReviews} Reviews
        </p>

        <div className="flex items-center justify-between rounded-lg border-2 border-[#E8ECEF] p-2 pl-4  lg:w-64">
          <p className="font-inter text-base font-semibold text-[#141718]">
            Newest
          </p>
          <DropdownIcon stroke="#6C7275" className="h-6 w-6" />
        </div>
      </div>

      <div className="space-y-6">
        {data.map((review) => (
          <div
            key={review.id}
            className="flex gap-4 border-b border-[#E8ECEF] pb-4 lg:flex-row"
          >
            <Image
              width={72}
              height={72}
              src={`/images/${review.profile.image.src}`}
              alt={review.profile.image.alt}
              className="hidden h-[72px] w-[72px] rounded-full object-cover object-center lg:block"
            />
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <Image
                  width={72}
                  height={72}
                  src={`/images/${review.profile.image.src}`}
                  alt={review.profile.image.alt}
                  className="h-[72px] w-[72px] rounded-full object-cover object-center lg:hidden"
                />

                <div className="space-y-2">
                  <p className="font-inter text-lg font-semibold text-[#141718]">
                    {review.profile.name}
                  </p>
                  <div className="flex items-center gap-1">
                    {formatRating(review.rating).map((rating) => (
                      <StarIcon
                        key={rating}
                        fill="#141718"
                        className="h-4 w-4"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="font-inter text-sm font-normal text-[#353945]">
                {review.comment}
              </p>
            </div>
          </div>
        ))}

        <div className="flex justify-center">
          <button className="rounded-full border border-[#141718] px-10 py-2 font-inter text-base font-medium text-[#141718]">
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTabReviews;
