import React from "react";
import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";

type HeadingVariantsProps = VariantProps<typeof headingVariants>;

const headingVariants = cva("font-poppins font-medium text-[#121212]", {
  variants: {
    intent: {
      "hero-section": "text-[40px] md:text-6xl xl:text-7xl",
      "base-section": "text-[34px] md:text-[40px]",
      "collection-card": "text-[28px] md:text-[34px]",
    },
  },
  defaultVariants: {
    intent: "hero-section",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    HeadingVariantsProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading: React.FC<HeadingProps> = ({
  as = "h1",
  intent,
  className,
  ...props
}) => {
  return React.createElement(
    as,
    {
      className: cn(headingVariants({ intent, className })),
      ...props,
    },
    props.children,
  );
};

export default Heading;
