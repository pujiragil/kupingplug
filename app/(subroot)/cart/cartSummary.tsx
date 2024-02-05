"use client";

// package
import { useState } from "react";

// lib
import { cn } from "@/lib/utils";
import { useCartProductsStore } from "@/stores/zustand";

const cartSelectMenus: CartSelectItemProps["data"][] = [
  {
    name: "free",
    value: "Free Shipping",
    price: "$0.00",
  },
  {
    name: "express",
    value: "Express Shipping",
    price: "$4.50",
  },
  {
    name: "pickup",
    value: "Pick Up",
    price: "$1.20",
  },
];

const CartSummary = () => {
  const total = useCartProductsStore((state) => state.total);
  const [cartSelect, setCartSelect] = useState<string>(cartSelectMenus[0].name);

  const handleCartSelect = (value: string) => {
    setCartSelect(value);
  };

  return (
    <div className="h-fit w-full space-y-4 rounded-md border border-[#6C7275] p-4 lg:p-6">
      <p className="font-poppins text-lg font-semibold text-[#141718]">
        Cart summary
      </p>

      {/* <div className="space-y-4">
        <div className="space-y-3">
          {cartSelectMenus.map((menu) => (
            <CartSelectItem
              key={menu.name}
              selectedItem={cartSelect}
              data={menu}
              onSelect={handleCartSelect}
            />
          ))}
        </div> */}

      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between border-b border-[#EAEAEA] py-3">
            <p className="font-inter text-sm font-medium text-[#141718]">
              Subtotal
            </p>
            <p className="font-inter text-sm font-medium text-[#141718]">
              $120.00
            </p>
          </div>
          <div className="flex items-center justify-between py-3">
            <p className="font-poppins text-lg font-semibold text-[#141718]">
              Total
            </p>
            <p className="font-poppins text-lg font-semibold text-[#141718]">
              {total}
            </p>
          </div>
        </div>

        <button className="w-full rounded-lg bg-[#141718] px-6 py-2.5 font-inter text-lg font-medium text-white">
          Checkout
        </button>
      </div>
      {/*       </div> */}
    </div>
  );
};

type CartSelectItemProps = {
  selectedItem: string;
  data: { name: string; value: string; price: string };
  onSelect: (value: string) => void;
};

const CartSelectItem: React.FC<CartSelectItemProps> = ({
  selectedItem,
  data,
  onSelect,
}) => {
  return (
    <div
      key={data.name}
      onClick={() => onSelect(data.name)}
      className={cn(
        "flex cursor-pointer items-center justify-between rounded border border-[#141718] px-4 py-3",
        data.name === selectedItem && "bg-[#F3F5F7]",
      )}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#141718]">
          <span
            className={cn(
              "h-2.5 w-2.5 rounded-full",
              data.name === selectedItem && "bg-[#141718]",
            )}
          ></span>
        </span>

        <p className="font-inter text-sm font-medium text-[#141718]">
          {data.value}
        </p>
      </div>

      <p className="font-inter text-sm font-medium text-[#141718]">
        {data.price}
      </p>
    </div>
  );
};

export default CartSummary;
