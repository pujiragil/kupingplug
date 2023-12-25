// package
import { type VariantProps, cva } from "class-variance-authority";

// lib
import { cn } from "@/lib/utils";

type ButtonVariantsProps = VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
  "w-fit rounded-lg px-10 py-2 font-inter font-medium",
  {
    variants: {
      variant: {
        primary: "bg-[#141718] text-white",
        ghost:
          "border-2 border-transparent bg-white text-[#141718] transition-colors duration-100 ease-in hover:border-[#141718]",
      },
      fontSize: {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
      },
      width: {
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      fontSize: "base",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  ButtonVariantsProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  fontSize,
  width,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, fontSize, width, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
