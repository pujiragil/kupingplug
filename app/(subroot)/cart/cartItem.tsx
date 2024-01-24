"use client";

// package
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

// lib
import { formatCurrency } from "@/lib/utils";

// ui
import CartQuantity from "@/app/(subroot)/cart/cartQuantity";

export type CartItemProps = {
  product: {
    id: number;
    image: {
      src: string;
      alt: string;
    };
    name: string;
    color: string;
    quantity: number;
    price: number;
  };
};

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(product.quantity);
  const basePrice = formatCurrency(product.price);
  const totalPrice = formatCurrency(product.price * quantity);

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <>
      <td className="py-6 sm:w-6/12">
        <div className="flex gap-4 sm:items-center">
          <div className="h-[120px] min-w-[100px] bg-[#F3F5F7]">
            <Image
              src={product.image.src}
              alt={product.image.alt}
              width={231}
              height={308}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-full space-y-2">
            <div className="flex items-start justify-between gap-2">
              <p className="line-clamp-2 font-inter text-sm font-semibold text-[#141718] md:text-base">
                {product.name}
              </p>
              <p className="font-inter text-sm font-semibold text-[#141718] sm:hidden">
                {basePrice}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <p className="font-inter text-xs font-normal text-[#6C7275] md:text-sm">
                Color: {product.color}
              </p>
              <X stroke="#6C7275" className="h-6 w-6 sm:hidden" />
            </div>

            <div className="sm:hidden">
              <CartQuantity
                quantity={quantity}
                onMinusQuantity={handleMinusQuantity}
                onAddQuantity={handleAddQuantity}
              />
            </div>
          </div>
        </div>
      </td>
      <td className="hidden w-2/12 py-6 sm:table-cell">
        <div className="flex justify-center">
          <CartQuantity
            quantity={quantity}
            onMinusQuantity={handleMinusQuantity}
            onAddQuantity={handleAddQuantity}
          />
        </div>
      </td>
      <td className="hidden w-2/12 py-6 sm:table-cell">
        <p className="text-center font-inter text-base font-normal text-[#141718]">
          {basePrice}
        </p>
      </td>
      <td className="hidden w-2/12 py-6 sm:table-cell">
        <p className="text-center font-inter text-base font-semibold text-[#141718]">
          {totalPrice}
        </p>
      </td>
    </>
  );
};

export default CartItem;
