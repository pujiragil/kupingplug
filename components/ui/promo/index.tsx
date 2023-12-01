"use client";

import {
  ArrowRightIcon,
  CloseIcon,
  DiscountIcon,
} from "@/components/ui/assets/svg";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useState } from "react";

export default function PromoSection() {
  const [showPromo, setShowPromo] = useState<boolean>(true);

  return (
    <div className={cn("bg-[#141718]", !showPromo && "hidden")}>
      <div className="relative mx-auto flex max-w-[1440px] justify-center px-8 py-2">
        {/* promo content */}
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <DiscountIcon className="h-4 w-4" />

            <p className="flex gap-3 font-inter text-xs font-semibold text-[#FEFEFE] md:text-sm">
              30% off storewide — Limited time!
              <Link href="/shop">
                <span className="hidden items-center gap-1 border-b border-[#FFAB00] font-medium text-[#FFAB00] md:flex">
                  Shop Now
                  <ArrowRightIcon className="h-5 w-5" stroke="#FFAB00" />
                </span>
              </Link>
            </p>
          </div>

          {/* close button (mobile) */}
          <button className="md:hidden" onClick={() => setShowPromo(false)}>
            <CloseIcon className="h-4 w-4" fill="#FEFEFE" />
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
