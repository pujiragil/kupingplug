"use client";

// ui
import CartItem from "@/app/(subroot)/cart/cartItem";
import { useCartProductsStore } from "@/stores/zustand";

const carts = [
  {
    id: 1,
    image: {
      src: "/images/sumplekuping-1.png",
      alt: "sumplekuping",
    },
    name: "Skullcandy - Rail True Wireless Earbuds",
    quantity: 2,
    price: 120,
    color: "Black",
  },
  {
    id: 2,
    image: {
      src: "/images/sumplekuping-2.png",
      alt: "sumplekuping",
    },
    name: "Sony - WH-CH720N Wireless Noise Canceling",
    quantity: 1,
    price: 420,
    color: "White",
  },
  {
    id: 3,
    image: {
      src: "/images/sumplekuping-4.png",
      alt: "sumplekuping",
    },
    name: "Bose QuietComfort Headphones",
    quantity: 3,
    price: 70,
    color: "Black",
  },
];

const CartTable = () => {
  const cartProducts = useCartProductsStore((state) => state.products);

  return (
    <table className="h-fit w-full">
      <thead className="border-b border-[#141718]">
        <tr className="text-left">
          <th className="pb-6 font-poppins text-base font-semibold text-[#141718]">
            Product
          </th>
          <th className="hidden pb-6 text-center font-poppins text-base font-semibold text-[#141718] sm:table-cell">
            Quantity
          </th>
          <th className="hidden pb-6 text-center font-poppins text-base font-semibold text-[#141718] sm:table-cell">
            Price
          </th>
          <th className="hidden pb-6 text-center font-poppins text-base font-semibold text-[#141718] sm:table-cell">
            Subtotal
          </th>
        </tr>
      </thead>

      <tbody>
        {cartProducts.map((cart) => (
          <tr
            key={cart.id}
            className="border-b border-[#E8ECEF] last:border-b-0"
          >
            <CartItem product={cart} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
