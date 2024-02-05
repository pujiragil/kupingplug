"use client";

// package
import { MinusIcon, PlusIcon } from "lucide-react";

// ui
import { Button } from "@/ui/card/productCard";
import { WishlistIcon } from "@/ui/assets/svg";

const ProductQuantity = () => {
  return (
    <div className="hidden h-fit flex-col gap-8 rounded border border-[#E8ECEF] p-4 lg:flex">
      <div className="space-y-2">
        <p className="font-poppins font-semibold text-[#141718]">
          Set quantity
        </p>
        <div className="flex items-end justify-between">
          <p className="font-inter text-sm text-[#6C7275]">Subtotal</p>
          <div className="space-y-1 text-right">
            <p className="font-inter text-sm text-[#6C7275] line-through">
              $400.00
            </p>
            <p className="font-poppins text-xl font-semibold text-[#141718]">
              $199.00
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex h-10 items-center justify-between rounded bg-[#F5F5F5] px-2 lg:px-4">
          <MinusIcon stroke="#141718" className="h-4 w-4 lg:h-5 lg:w-6" />
          <span className="font-inter text-sm font-semibold text-[#141718]">
            1
          </span>
          <PlusIcon stroke="#141718" className="h-4 w-4 lg:h-5 lg:w-6" />
        </div>
        <Button
          variant="ghost"
          width="full"
          className="flex h-10 items-center justify-center gap-2 rounded border border-[#141718]"
        >
          <WishlistIcon stroke="#141718" className="h-4 w-4" />
          <span className="font-inter text-sm font-medium text-[#141718]">
            Wishlist
          </span>
        </Button>
        <Button width="full" fontSize="sm" className="h-10 rounded">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductQuantity;
