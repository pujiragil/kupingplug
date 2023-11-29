import { cn } from "@/utils/cn";
import { type VariantProps, cva } from "class-variance-authority";

type ButtonVariantsProps = VariantProps<typeof buttonVariants>;

const buttonVariants = cva("font-inter w-fit rounded-lg font-medium", {
  variants: {
    intent: {
      primary: "bg-[#141718] text-white",
    },
    size: {
      sm: "px-[26px] py-3",
      md: "px-10 py-1.5",
      lg: "px-14 py-3",
      full: "w-full px-6 py-2",
    },
  },
  compoundVariants: [
    {
      intent: "primary",
      size: "lg",
      className: "text-sm lg:text-lg",
    },
    {
      intent: "primary",
      size: "md",
      className: "text-sm lg:text-base",
    },
    {
      intent: "primary",
      size: "sm",
      className: "text-base",
    },
  ],
  defaultVariants: {
    intent: "primary",
    size: "sm",
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantsProps {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  intent,
  size,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ intent, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};
