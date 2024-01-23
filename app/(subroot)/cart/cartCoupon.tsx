// ui
import { DiscountIcon } from "@/ui/assets/svg";

const CartCoupon = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="font-inter text-base font-normal text-[#141718]">
          Have a coupon?
        </p>
        <p className="font-inter text-sm font-normal text-[#6C7275]">
          Add your code for an instant cart discount
        </p>
      </div>

      <div className="flex items-center gap-4 rounded-md border border-[#6C7275] p-4">
        <DiscountIcon fill="#6C7275" className="h-6 w-6" />
        <input
          placeholder="Coupon code"
          className="w-full font-inter text-base font-medium text-[#6C7275] outline-none placeholder:text-[#6C7275] placeholder:opacity-100"
        />
        <button className="w-fit font-inter text-base font-medium text-[#141718]">
          Apply
        </button>
      </div>
    </div>
  );
};

export default CartCoupon;
