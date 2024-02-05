"use client";

// package
import { useState } from "react";
import Image from "next/image";
import {
  Check,
  Heart,
  MoreHorizontal,
  MoreVertical,
  Trash,
} from "lucide-react";

// lib
import { cn, formatCurrency } from "@/lib/utils";

// ui
import CartQuantity from "@/app/(subroot)/cart/cartQuantity";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  const [check, setCheck] = useState<boolean>(true);
  const basePrice = formatCurrency(product.price);
  const totalPrice = formatCurrency(product.price * quantity);

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleCheck = () => {
    setCheck((prevCheck) => !prevCheck);
  };

  return (
    <>
      <td
        className={cn("py-6 sm:w-6/12", check ? "opacity-100" : "opacity-50")}
      >
        <div className="flex items-start gap-4">
          <div
            onClick={handleCheck}
            className={cn(
              "hidden h-5 w-5 flex-none cursor-pointer items-center justify-center rounded border border-[#141718] sm:flex",
              check ? "bg-[#141718]" : "bg-white",
            )}
          >
            {check && (
              <Check
                stroke="#ffffff"
                strokeWidth={2.5}
                className="h-3.5 w-3.5"
              />
            )}
          </div>

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

                <div className="sm:hidden">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="h-4 w-4">
                        <MoreVertical className="h-full w-full" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="border-[#141718]"
                    >
                      <DropdownMenuItem className="gap-2 font-inter text-xs font-normal text-[#141718] focus:bg-[#E8ECEF]">
                        <Heart stroke="#141718" className="h-4 w-4" />
                        Add to wishlist
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 font-inter text-xs font-normal text-[#141718] focus:bg-[#E8ECEF]">
                        <Trash stroke="#141718" className="h-4 w-4" />
                        Remove from cart
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <div className="flex items-center justify-between sm:hidden">
                <CartQuantity
                  quantity={quantity}
                  onMinusQuantity={handleMinusQuantity}
                  onAddQuantity={handleAddQuantity}
                  disabled={!check}
                  aria-disabled={!check}
                />

                <div
                  onClick={handleCheck}
                  className={cn(
                    "flex h-4 w-4 cursor-pointer items-center justify-center rounded border border-[#141718]",
                    check ? "bg-[#141718]" : "bg-white",
                  )}
                >
                  {check && (
                    <Check
                      stroke="#ffffff"
                      strokeWidth={2.5}
                      className="h-3 w-3"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td
        className={cn(
          "hidden w-2/12 py-6 sm:table-cell",
          check ? "opacity-100" : "opacity-50",
        )}
      >
        <div className="flex justify-center">
          <CartQuantity
            quantity={quantity}
            onMinusQuantity={handleMinusQuantity}
            onAddQuantity={handleAddQuantity}
            disabled={!check}
            aria-disabled={!check}
          />
        </div>
      </td>
      <td
        className={cn(
          "hidden w-2/12 py-6 sm:table-cell",
          check ? "opacity-100" : "opacity-50",
        )}
      >
        <p className="text-center font-inter text-base font-normal text-[#141718]">
          {basePrice}
        </p>
      </td>
      <td
        className={cn(
          "hidden w-2/12 py-6 sm:table-cell",
          check ? "opacity-100" : "opacity-50",
        )}
      >
        <p className="text-center font-inter text-base font-semibold text-[#141718]">
          {totalPrice}
        </p>
      </td>
      <td
        className={cn(
          "hidden sm:table-cell",
          check ? "opacity-100" : "opacity-50",
        )}
      >
        <DropdownMenu>
          <DropdownMenuTrigger disabled={!check} asChild>
            <button className="h-5 w-5 disabled:cursor-not-allowed">
              <MoreHorizontal className="h-full w-full" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="border-[#141718]">
            <DropdownMenuItem className="gap-2 font-inter text-xs font-normal text-[#141718] focus:bg-[#E8ECEF]">
              <Heart stroke="#141718" className="h-4 w-4" />
              Add to wishlist
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2 font-inter text-xs font-normal text-[#141718] focus:bg-[#E8ECEF]">
              <Trash stroke="#141718" className="h-4 w-4" />
              Remove from cart
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </td>
    </>
  );
};

export default CartItem;
