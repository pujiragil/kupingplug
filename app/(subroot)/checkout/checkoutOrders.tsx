"use client";

// package
import Image from "next/image";

// ui
import DeliveryOption from "@/app/(subroot)/checkout/deliveryOption";

const CheckoutOrders = () => {
  return (
    <div className="space-y-6 rounded-md border border-[#6C7275] p-6">
      <p className="font-poppins text-lg font-semibold text-[#141718]">
        Orders
      </p>

      <div>
        <div className="flex flex-col gap-4 border-b border-[#E8ECEF] py-3 first:pt-0 last:border-b-0 last:pb-0">
          <div className="flex items-center gap-4">
            <div className="h-[96px] min-w-[80px] bg-[#F3F5F7] md:h-[120px] md:min-w-[100px]">
              <Image
                src="/images/sumplekuping-1.png"
                alt="sumplekuping"
                width={231}
                height={308}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-full space-y-2">
              <div className="flex items-start justify-between gap-8">
                <p className="line-clamp-1 font-inter text-sm font-semibold text-[#141718] sm:line-clamp-2 md:w-2/3">
                  Skullcandy - Rail True Wireless Earbuds
                </p>
                <p className="hidden min-w-max font-inter text-sm font-semibold text-[#141718] sm:block">
                  2 x $120.00
                </p>
              </div>

              <p className="font-inter text-sm font-semibold text-[#141718] sm:hidden">
                2 x $120.00
              </p>

              <p className="font-inter text-xs font-normal text-[#6C7275]">
                Color: Black
              </p>

              <div className="hidden sm:block">
                <DeliveryOption />
              </div>
            </div>
          </div>

          <div className="sm:hidden">
            <DeliveryOption />
          </div>
        </div>
        <div className="flex flex-col gap-4 border-b border-[#E8ECEF] py-3 first:pt-0 last:border-b-0 last:pb-0">
          <div className="flex items-center gap-4">
            <div className="h-[96px] min-w-[80px] bg-[#F3F5F7] md:h-[120px] md:min-w-[100px]">
              <Image
                src="/images/sumplekuping-2.png"
                alt="sumplekuping"
                width={231}
                height={308}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-full space-y-2">
              <div className="flex items-start justify-between gap-8">
                <p className="line-clamp-1 font-inter text-sm font-semibold text-[#141718] sm:line-clamp-2 md:w-2/3">
                  Sony - WH-CH720N Wireless Noise Canceling
                </p>
                <p className="hidden min-w-max font-inter text-sm font-semibold text-[#141718] sm:block">
                  1 x $400.00
                </p>
              </div>

              <p className="font-inter text-sm font-semibold text-[#141718] sm:hidden">
                1 x $400.00
              </p>

              <p className="font-inter text-xs font-normal text-[#6C7275]">
                Color: White
              </p>

              <div className="hidden sm:block">
                <DeliveryOption />
              </div>
            </div>
          </div>

          <div className="sm:hidden">
            <DeliveryOption />
          </div>
        </div>
        <div className="flex flex-col gap-4 border-b border-[#E8ECEF] py-3 first:pt-0 last:border-b-0 last:pb-0">
          <div className="flex items-center gap-4">
            <div className="h-[96px] min-w-[80px] bg-[#F3F5F7] md:h-[120px] md:min-w-[100px]">
              <Image
                src="/images/sumplekuping-4.png"
                alt="sumplekuping"
                width={231}
                height={308}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-full space-y-2">
              <div className="flex items-start justify-between gap-8">
                <p className="line-clamp-1 font-inter text-sm font-semibold text-[#141718] sm:line-clamp-2 md:w-2/3">
                  Bose QuietComfort Headphones
                </p>
                <p className="hidden min-w-max font-inter text-sm font-semibold text-[#141718] sm:block">
                  3 x $79.00
                </p>
              </div>

              <p className="font-inter text-sm font-semibold text-[#141718] sm:hidden">
                3 x $79.00
              </p>

              <p className="font-inter text-xs font-normal text-[#6C7275]">
                Color: Black
              </p>

              <div className="hidden sm:block">
                <DeliveryOption />
              </div>
            </div>
          </div>

          <div className="sm:hidden">
            <DeliveryOption />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutOrders;
