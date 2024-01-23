// package
import { Check } from "lucide-react";
import * as SelectPrimitive from "@radix-ui/react-select";

// ui
import { Select, SelectTrigger, SelectValue, SelectContent } from "@/ui/select";

const options = [
  {
    id: 1,
    value: "free-shipping",
    name: "Free Shipping",
    price: "$0.00",
    estimated: {
      from: "21 Jan",
      to: "28 Jan",
    },
  },
  {
    id: 2,
    value: "express-shipping",
    name: "Express Shipping",
    price: "$15.00",
    estimated: {
      from: "21 Jan",
      to: "22 Jan",
    },
  },
  {
    id: 3,
    value: "pickup",
    name: "Pick Up",
    price: "$5.00",
    estimated: {
      from: "21 Jan",
      to: "25 Jan",
    },
  },
];

const DeliveryOption = () => {
  return (
    <Select>
      <SelectTrigger className="checkout-select-trigger h-10 w-full px-4 font-inter text-sm font-semibold text-[#141718] focus:ring-0 focus:ring-offset-0">
        <SelectValue placeholder="Choose Delivery" />
      </SelectTrigger>
      <SelectContent className="w-full">
        {options.map((option) => (
          <SelectItem key={option.id} data={option} />
        ))}
      </SelectContent>
    </Select>
  );
};

const SelectItem = ({ data }: { data: (typeof options)[0] }) => {
  return (
    <SelectPrimitive.Item
      value={data.value}
      className="relative rounded border-none p-2 pl-8 outline-none data-[highlighted]:bg-accent"
    >
      <div className="space-y-1">
        <SelectPrimitive.SelectItemIndicator className="absolute left-2 top-0 flex h-full items-center">
          <Check className="h-4 w-4" />
        </SelectPrimitive.SelectItemIndicator>
        <SelectPrimitive.ItemText>
          <div className="flex w-full items-center justify-between">
            <p className="font-inter text-sm font-semibold text-[#141718]">
              {data.name}
            </p>
            <p className="font-inter text-sm font-semibold text-[#141718]">
              {data.price}
            </p>
          </div>
        </SelectPrimitive.ItemText>
        <p className="font-inter text-xs font-normal text-[#6C7275]">
          Estimated arrival {data.estimated.from} - {data.estimated.to}
        </p>
      </div>
    </SelectPrimitive.Item>
  );
};

export default DeliveryOption;
