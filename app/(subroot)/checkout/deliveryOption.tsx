// package
import { Check } from "lucide-react";
import * as SelectPrimitive from "@radix-ui/react-select";

// ui
import { Select, SelectTrigger, SelectValue, SelectContent } from "@/ui/select";

const DeliveryOption = () => {
  return (
    <Select>
      <SelectTrigger className="custom-trigger h-10 w-full px-4 font-inter text-sm font-semibold text-[#141718] focus:ring-0 focus:ring-offset-0">
        <SelectValue placeholder="Choose Delivery" />
      </SelectTrigger>
      <SelectContent className="w-full">
        <SelectPrimitive.Item
          value="free-shipping"
          className="relative rounded border-none p-2 pl-8 outline-none data-[highlighted]:bg-accent"
        >
          <div className="space-y-1">
            <SelectPrimitive.SelectItemIndicator className="absolute left-2 top-0 flex h-full items-center">
              <Check className="h-4 w-4" />
            </SelectPrimitive.SelectItemIndicator>
            <SelectPrimitive.ItemText>
              <div className="flex w-full items-center justify-between">
                <p className="font-inter text-sm font-semibold text-[#141718]">
                  Free shipping
                </p>
                <p className="font-inter text-sm font-semibold text-[#141718]">
                  $0.00
                </p>
              </div>
            </SelectPrimitive.ItemText>
            <p className="font-inter text-xs font-normal text-[#6C7275]">
              Estimated arrival 21 Jan - 28 Jan
            </p>
          </div>
        </SelectPrimitive.Item>
        <SelectPrimitive.Item
          value="express-shipping"
          className="relative rounded border-none p-2 pl-8 outline-none data-[highlighted]:bg-accent"
        >
          <div className="space-y-1">
            <SelectPrimitive.SelectItemIndicator className="absolute left-2 top-0 flex h-full items-center">
              <Check className="h-4 w-4" />
            </SelectPrimitive.SelectItemIndicator>
            <SelectPrimitive.ItemText>
              <div className="flex w-full items-center justify-between">
                <p className="font-inter text-sm font-semibold text-[#141718]">
                  Express shipping
                </p>
                <p className="font-inter text-sm font-semibold text-[#141718]">
                  $15.00
                </p>
              </div>
            </SelectPrimitive.ItemText>
            <p className="font-inter text-xs font-normal text-[#6C7275]">
              Estimated arrival 21 Jan - 23 Jan
            </p>
          </div>
        </SelectPrimitive.Item>
      </SelectContent>
    </Select>
  );
};

export default DeliveryOption;
