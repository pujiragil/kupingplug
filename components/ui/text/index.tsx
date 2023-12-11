import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

type TextVariantsProps = VariantProps<typeof textVariants>;

const textVariants = cva("font-inter", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
    },
    weight: {
      400: "font-normal",
      500: "font-medium",
      600: "font-semibold",
      700: "font-bold",
    },
    transform: {
      uppercase: "uppercase",
      lowercase: "lowercase",
      capitalize: "capitalize",
    },
    color: {
      "black/900": "text-[#121212]",
      "black/800": "text-[#141718]",
      white: "text-white",
      "white/900": "text-[#FEFEFE]",
      "white/800": "text-[#E8ECEF]",
    },
  },
  defaultVariants: {
    size: "base",
    weight: 400,
    color: "black/900",
  },
});

interface TextProps
  extends Omit<React.HTMLProps<HTMLParagraphElement>, "color" | "size">,
  TextVariantsProps { }

const Text: React.FC<TextProps> = ({
  size,
  weight,
  color,
  transform,
  className,
  ...props
}) => {
  return (
    <p
      className={cn(
        textVariants({ size, weight, color, transform, className }),
      )}
      {...props}
    />
  );
};

export default Text;
