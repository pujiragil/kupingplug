import { ChevronLeft, MapPin, Minus, Plus, X } from "lucide-react";

import SectionLayout from "@/layouts/sectionLayout";
import { DiscountIcon, MoneyIcon } from "@/components/ui/assets/svg";
import Image from "next/image";

export default function Page() {
  return (
    <SectionLayout className="relative px-8 py-20">
      <div className="absolute left-8 top-4 inline-flex items-center gap-1 align-baseline lg:hidden">
        <ChevronLeft stroke="#605F5F" className="h-3 w-3" />
        <p className="font-inter text-sm font-medium text-[#605F5F]">back</p>
      </div>

      <div className="space-y-6 pb-20 lg:space-y-10">
        <h1 className="text-center font-poppins text-[40px] font-medium text-[#141718]">
          Check Out
        </h1>
        <div className="flex items-center justify-center gap-4 align-baseline">
          <p className="relative line-clamp-1 pr-4 font-inter text-sm font-medium text-[#38CB89] before:absolute before:right-0 before:content-['/']">
            <span className="mr-2 hidden h-6 w-6 items-center justify-center rounded-full bg-[#38CB89] font-inter text-xs text-white md:inline-flex">
              1
            </span>
            Shopping cart
          </p>
          <p className="relative min-w-max pr-4 font-inter text-sm font-normal text-[#141718] before:absolute before:right-0 before:content-['/']">
            <span className="mr-2 hidden h-6 w-6 items-center justify-center rounded-full bg-[#141718] font-inter text-xs text-white md:inline-flex">
              2
            </span>
            Checkout details
          </p>
          <p className="relative line-clamp-1 pr-4 font-inter text-sm font-normal text-[#605F5F] before:absolute before:right-0 before:content-['/'] last:before:content-['']">
            <span className="mr-2 hidden h-6 w-6 items-center justify-center rounded-full bg-[#605F5F] font-inter text-xs text-white md:inline-flex">
              3
            </span>
            Order complete
          </p>
        </div>
      </div>

      <div className="grid gap-y-6 lg:grid-cols-[2fr_1fr] lg:gap-x-[64px]">
        <div className="space-y-6">
          <div className="space-y-6 rounded-md border border-[#6C7275] p-6">
            <p className="font-inter text-base font-semibold text-[#141718]">
              Shipping Address
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin stroke="#141718" className="h-4 w-4" />
                <p className="font-inter text-xs font-bold uppercase text-[#141718]">
                  House
                </p>
              </div>

              <p className="font-inter text-sm font-normal text-[#6C7275]">
                RT02/RW02 Dukuh Jalakan Ds.Wotan Kec.Pulung Kab.Ponorogo (Kasun
                Jalakan)
              </p>
            </div>
          </div>
          <div className="space-y-6 rounded-md border border-[#6C7275] p-6">
            <p className="font-inter text-base font-semibold text-[#141718]">
              Payment Method
            </p>

            <div className="space-y-6">
              <div className="flex items-center justify-between rounded border border-[#6C7275] bg-[#F3F5F7] px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#141718]">
                    <div className="h-2.5 w-2.5 rounded-full bg-black"></div>
                  </div>

                  <p className="font-inter text-base font-normal text-[#141718]">
                    Paypal
                  </p>
                </div>

                <MoneyIcon
                  fill="#141718"
                  stroke="#141718"
                  className="h-6 w-6"
                />
              </div>
              <div className="flex items-center justify-between rounded border border-[#6C7275] px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#141718]">
                    <div className="h-2.5 w-2.5 rounded-full bg-white"></div>
                  </div>

                  <p className="font-inter text-base font-normal text-[#141718]">
                    Credit Cart
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between rounded border border-[#6C7275] px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#141718]">
                    <div className="h-2.5 w-2.5 rounded-full bg-white"></div>
                  </div>

                  <p className="font-inter text-base font-normal text-[#141718]">
                    Gopay
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-fit space-y-4">
          <div className="space-y-6 rounded-md border border-[#6C7275] p-6">
            <p className="font-inter text-base font-semibold text-[#141718]">
              Order Summary
            </p>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-4 border-b border-[#E8ECEF] py-3">
                  <div className="h-[96px] min-w-[80px] max-w-[80px] bg-[#F3F5F7]">
                    <Image
                      src="/images/sumplekuping-1.png"
                      alt="sumplekuping"
                      width={231}
                      height={308}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="w-full space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="font-inter text-sm font-semibold text-[#141718] sm:text-base">
                        Tray Table
                      </p>
                      <p className="text-[#141718]sm:hidden font-inter text-sm font-semibold">
                        $19.90
                      </p>
                    </div>

                    <p className="font-inter text-xs font-normal text-[#6C7275] sm:text-sm">
                      Color: Black
                    </p>

                    <span className="font-inter text-sm font-semibold text-[#141718] sm:text-base">
                      2
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 border-b border-[#E8ECEF] py-3">
                  <div className="h-[96px] min-w-[80px] max-w-[80px] bg-[#F3F5F7]">
                    <Image
                      src="/images/sumplekuping-1.png"
                      alt="sumplekuping"
                      width={231}
                      height={308}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="w-full space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="font-inter text-sm font-semibold text-[#141718] sm:text-base">
                        Tray Table
                      </p>
                      <p className="text-[#141718]sm:hidden font-inter text-sm font-semibold">
                        $19.90
                      </p>
                    </div>

                    <p className="font-inter text-xs font-normal text-[#6C7275] sm:text-sm">
                      Color: Black
                    </p>

                    <span className="font-inter text-sm font-semibold text-[#141718] sm:text-base">
                      2
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 border-b border-[#E8ECEF] py-3">
                  <div className="h-[96px] min-w-[80px] max-w-[80px] bg-[#F3F5F7]">
                    <Image
                      src="/images/sumplekuping-1.png"
                      alt="sumplekuping"
                      width={231}
                      height={308}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="w-full space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="font-inter text-sm font-semibold text-[#141718] sm:text-base">
                        Tray Table
                      </p>
                      <p className="text-[#141718]sm:hidden font-inter text-sm font-semibold">
                        $19.90
                      </p>
                    </div>

                    <p className="font-inter text-xs font-normal text-[#6C7275] sm:text-sm">
                      Color: Black
                    </p>

                    <span className="font-inter text-sm font-semibold text-[#141718] sm:text-base">
                      2
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <input
                  className="w-full rounded-md border border-[#CBCBCB] p-4 font-inter text-base text-base font-normal text-[#141718] placeholder:text-[#6C7275] placeholder:opacity-100"
                  placeholder="Coupon code"
                />
                <button className="w-fit rounded-md bg-[#141718] px-6 py-4 font-inter text-base font-medium text-white">
                  Apply
                </button>
              </div>
            </div>

            <div>
              <div className="flex justify-between border-b border-[#6C7275] py-3">
                <div className="flex items-center gap-2">
                  <DiscountIcon fill="#141718" className="h-6 w-6" />
                  <p className="line-clamp-1 font-inter text-base font-normal text-[#141718]">
                    JenkateMW
                  </p>
                </div>

                <p className="font-inter text-base font-semibold text-[#38CB89]">
                  -$25.00 [Remove]
                </p>
              </div>

              <div className="flex items-center justify-between py-3">
                <p className="font-inter text-base font-normal text-[#141718]">
                  Shipping
                </p>
                <p className="font-inter text-base font-semibold text-[#141718]">
                  Free
                </p>
              </div>
              <div className="flex items-center justify-between py-3">
                <p className="font-inter text-base font-normal text-[#141718]">
                  Subtotal
                </p>
                <p className="font-inter text-base font-semibold text-[#141718]">
                  $99.00
                </p>
              </div>
              <div className="flex items-center justify-between py-3">
                <p className="font-poppins text-xl font-medium text-[#141718]">
                  Total
                </p>
                <p className="font-poppins text-xl font-medium text-[#141718]">
                  $234.00
                </p>
              </div>
            </div>
          </div>

          <button className="w-full rounded-md bg-[#141718] px-10 py-3 font-inter text-base font-medium text-white">
            Place Order
          </button>
        </div>
      </div>
    </SectionLayout>
  );
}
