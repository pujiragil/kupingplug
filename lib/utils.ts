import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type FormatCurrencyProps = {
  currency?: string;
};

export const formatCurrency = (
  amount: number,
  options?: FormatCurrencyProps,
) => {
  const { currency = "USD" } = options || {};

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
};

export const formatRating = (rating: number) => {
  return Array.from({ length: rating >= 5 ? 5 : rating }, (_, idx) => idx + 1);
};
