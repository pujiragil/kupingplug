// package
import { Minus, Plus } from "lucide-react";

interface CartQuantityProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  quantity: number;
  onAddQuantity: () => void;
  onMinusQuantity: () => void;
}

const CartQuantity: React.FC<CartQuantityProps> = ({
  quantity,
  onAddQuantity,
  onMinusQuantity,
  ...props
}) => {
  return (
    <button
      {...props}
      className="group flex w-[96px] items-center justify-between rounded border border-[#6C7275] p-2"
    >
      <Minus
        onClick={onMinusQuantity}
        className="h-4 w-4 cursor-pointer group-disabled:cursor-not-allowed"
      />
      <span className="font-inter text-xs font-semibold text-[#141718]">
        {quantity}
      </span>
      <Plus
        onClick={onAddQuantity}
        className="h-4 w-4 cursor-pointer group-disabled:cursor-not-allowed"
      />
    </button>
  );
};

export default CartQuantity;
