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
