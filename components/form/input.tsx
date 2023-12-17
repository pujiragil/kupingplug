//package
import { type VariantProps, cva } from "class-variance-authority";

// lib
import { cn } from "@/lib/utils";

type InputVariantsProps = VariantProps<typeof inputVariants>;

const inputVariants = cva(
  "font-inter text-base font-normal text-[#6C7275] outline-none placeholder:text-[#6C7275] placeholder:opacity-100 focus:text-[#141718]",
  {
    variants: {
      intent: {
        primary: "rounded-md border border-[#CBCBCB] px-4 py-2",
        secondary: "pb-1.5",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  },
);

interface InputProps
  extends InputVariantsProps,
    React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ intent, className, ...props }) => {
  return (
    <input className={cn(inputVariants({ intent, className }))} {...props} />
  );
};

export default Input;
