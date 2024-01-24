// package
import { Minus, Plus } from "lucide-react";

const CartQuantity = ({
  quantity,
  onAddQuantity,
  onMinusQuantity,
}: {
  quantity: number;
  onAddQuantity: () => void;
  onMinusQuantity: () => void;
}) => {
  return (
    <div className="flex w-[96px] items-center justify-between rounded border border-[#6C7275] p-2">
      <Minus onClick={onMinusQuantity} className="h-4 w-4 cursor-pointer" />
      <span className="font-inter text-xs font-semibold text-[#141718]">
        {quantity}
      </span>
      <Plus onClick={onAddQuantity} className="h-4 w-4 cursor-pointer" />
    </div>
  );
};

export default CartQuantity;
