"use client";

// package
import { useState } from "react";
import Link from "next/link";

// ui
import { ArrowRightIcon, CloseIcon, DiscountIcon } from "@/ui/assets/svg";

// hooks
import { useRootContext } from "@/hooks/rootContext";

// lib
import { cn } from "@/lib/utils";

export default function PromoSection() {
  const isRootPage = useRootContext();
  const [showPromo, setShowPromo] = useState<boolean>(true);

  return (
    <div
      className={cn(
        isRootPage ? "bg-[#141718]" : "bg-[#F3F5F7]",
        !showPromo && "hidden",
      )}
    >
      <div className="relative mx-auto flex max-w-[1440px] justify-center px-8 py-2">
        {/* promo content */}
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <DiscountIcon
              fill={cn(isRootPage ? "#FEFEFE" : "#141718")}
              className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6"
            />

            <p
              className={cn(
                "flex gap-3 font-inter text-xs font-semibold md:text-sm",
                isRootPage ? "text-[#FEFEFE]" : "text-[#343839]",
              )}
            >
              30% off storewide — Limited time!
              <Link href="/shop">
                <span
                  className={cn(
                    "hidden items-center gap-1 border-b font-medium md:flex",
                    isRootPage
                      ? "border-[#FFAB00] text-[#FFAB00]"
                      : "border-[#377DFF] text-[#377DFF]",
                  )}
                >
                  Shop Now
                  <ArrowRightIcon
                    className="h-5 w-5"
                    stroke={cn(isRootPage ? "#FFAB00" : "#377DFF")}
                  />
                </span>
              </Link>
            </p>
          </div>

          {/* close button (mobile) */}
          <button className="md:hidden" onClick={() => setShowPromo(false)}>
            <CloseIcon
              className="h-4 w-4"
              fill={cn(isRootPage ? "#FEFEFE" : "#343839")}
            />
          </button>
        </div>

        {/* close button (tablet & desktop) */}
        <div className="absolute bottom-0 right-8 hidden h-full items-center md:flex">
          <button onClick={() => setShowPromo(false)}>
            <CloseIcon className="h-5 w-5" fill="#343839" />
          </button>
        </div>
      </div>
    </div>
  );
}
