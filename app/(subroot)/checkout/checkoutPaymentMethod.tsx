"use client";

import { useState } from "react";

import { MoneyIcon } from "@/ui/assets/svg";
import { cn } from "@/lib/utils";

const payments = [
  { name: "cart-credit", value: "Pay by Card Credit" },
  { name: "paypal", value: "Paypal" },
  { name: "gopay", value: "Gopay" },
];

const CheckoutPaymentMethod = () => {
  const [selectedPayment, setSelectedPayment] = useState<string>(
    payments[0].name,
  );

  const handleSelectedPayment = (name: string) => {
    setSelectedPayment(name);
  };

  return (
    <div className="space-y-6 rounded-md border border-[#6C7275] p-6">
      <p className="font-poppins text-lg font-semibold text-[#141718]">
        Payment Method
      </p>

      <div className="space-y-3">
        {payments.map((payment) => (
          <div
            key={payment.name}
            onClick={() => handleSelectedPayment(payment.name)}
            className={cn(
              "flex h-10 cursor-pointer items-center justify-between rounded-md border px-4 lg:h-[50px]",
              selectedPayment === payment.name
                ? "border-[#141718] bg-[#F3F5F7]"
                : "border-[#6C7275]",
            )}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#141718]">
                <div
                  className={cn(
                    "h-2.5 w-2.5 rounded-full",
                    selectedPayment === payment.name
                      ? "bg-[#141718]"
                      : "bg-white",
                  )}
                ></div>
              </div>

              <p className="font-inter text-sm font-normal text-[#141718]">
                {payment.value}
              </p>
            </div>

            {selectedPayment === payment.name && (
              <MoneyIcon stroke="#141718" fill="#141718" className="h-6 w-6" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutPaymentMethod;
