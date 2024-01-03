// package
import Image from "next/image";
import { MinusIcon, PlusIcon } from "lucide-react";

// layouts
import SectionLayout from "@/layouts/sectionLayout";

// ui
import { DropdownIcon, StarIcon, WishlistIcon } from "@/ui/assets/svg";
import Button from "@/ui/button";
import ProductSlider from "@/ui/slider/productSlider";

export default function Page() {
  return (
    <SectionLayout>
      <div className="mx-auto space-y-6 p-8 lg:space-y-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(min-content,_400px)_1fr_280px]">
          <div className="relative h-full w-full">
            <ProductSlider />
          </div>

          <div className="mx-auto max-w-[420px] md:max-w-[520px] lg:max-w-none">
            <div className="space-y-4 border-b border-[#E8ECEF] pb-6">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1">
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                </div>

                <span className="font-inter text-xs font-normal text-[#141718]">
                  11 Reviews
                </span>
              </div>

              <h1 className="font-poppins text-[40px] font-medium text-[#141718]">
                Bose QuietComfort Headphones
              </h1>

              <p className="font-inter text-base font-normal text-[#6C7275]">
                Buy one or buy a few and make every space where you sit more
                convenient. Light and easy to move around with removable tray
                top, handy for serving snacks.
              </p>

              <p className="font-poppins text-[28px] font-medium text-[#141718]">
                <span className="align-middle">$199.00</span>
                <span className="ml-3 align-middle text-xl text-[#6C7275] line-through decoration-2">
                  $400.00
                </span>
              </p>
            </div>

            <div className="space-y-3 border-b border-[#E8ECEF] py-6">
              <p className="font-inter text-base font-normal text-[#343839]">
                Offer expires in:
              </p>

              <div className="flex gap-4">
                <div className="w-fit">
                  <div className="flex h-[60px] w-[60px] items-center justify-center bg-[#F3F5F7] font-poppins text-[34px] font-medium text-[#141718]">
                    02
                  </div>
                  <p className="text-center font-inter text-xs font-normal text-[#6C7275]">
                    Days
                  </p>
                </div>
                <div className="w-fit">
                  <div className="flex h-[60px] w-[60px] items-center justify-center bg-[#F3F5F7] font-poppins text-[34px] font-medium text-[#141718]">
                    12
                  </div>
                  <p className="text-center font-inter text-xs font-normal text-[#6C7275]">
                    Hours
                  </p>
                </div>
                <div className="w-fit">
                  <div className="flex h-[60px] w-[60px] items-center justify-center bg-[#F3F5F7] font-poppins text-[34px] font-medium text-[#141718]">
                    45
                  </div>
                  <p className="text-center font-inter text-xs font-normal text-[#6C7275]">
                    Minutes
                  </p>
                </div>
                <div className="w-fit">
                  <div className="flex h-[60px] w-[60px] items-center justify-center bg-[#F3F5F7] font-poppins text-[34px] font-medium text-[#141718]">
                    05
                  </div>
                  <p className="text-center font-inter text-xs font-normal text-[#6C7275]">
                    Seconds
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 py-6">
              <div className="space-y-2">
                <p className="font-inter text-base font-semibold text-[#6C7275]">
                  Measurements
                </p>
                <p className="font-inter text-xl font-normal text-[#141718]">
                  17 1/2x20 5/8
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-inter text-base font-semibold text-[#6C7275]">
                  Choose Color
                </p>

                <div className="space-y-4">
                  <p className="font-inter text-xl font-normal text-[#141718]">
                    Black
                  </p>

                  <div className="flex-no-wrap flex gap-2 overflow-x-scroll">
                    <div className="h-[70px] w-[70px] flex-none overflow-hidden border border-[#141718]">
                      <Image
                        width={231}
                        height={308}
                        src="/images/sumplekuping-1.png"
                        alt="sumplekuping"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-[70px] w-[70px] flex-none overflow-hidden border border-transparent">
                      <Image
                        width={231}
                        height={308}
                        src="/images/sumplekuping-1.png"
                        alt="sumplekuping"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-[70px] w-[70px] flex-none overflow-hidden border border-transparent">
                      <Image
                        width={231}
                        height={308}
                        src="/images/sumplekuping-1.png"
                        alt="sumplekuping"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-[70px] w-[70px] flex-none overflow-hidden border border-transparent">
                      <Image
                        width={231}
                        height={308}
                        src="/images/sumplekuping-1.png"
                        alt="sumplekuping"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 border-b border-[#E8ECEF] py-6 lg:hidden">
              <div className="flex h-10 gap-2 lg:h-[52px]">
                <div className="flex h-full w-1/2 items-center justify-between rounded bg-[#F5F5F5] px-2 md:w-3/5 lg:px-4">
                  <MinusIcon
                    stroke="#141718"
                    className="h-4 w-4 lg:h-5 lg:w-6"
                  />
                  <span className="font-inter text-sm font-semibold text-[#141718] lg:text-base">
                    1
                  </span>
                  <PlusIcon
                    stroke="#141718"
                    className="h-4 w-4 lg:h-5 lg:w-6"
                  />
                </div>

                <Button
                  variant="ghost"
                  width="full"
                  className="flex h-full items-center justify-center gap-2 rounded border border-[#141718]"
                >
                  <WishlistIcon
                    stroke="#141718"
                    className="h-4 w-4 lg:h-6 lg:w-6"
                  />
                  <span className="font-inter text-sm font-medium text-[#141718] lg:text-base">
                    Wishlist
                  </span>
                </Button>
              </div>

              <Button
                width="full"
                fontSize="sm"
                className="h-10 rounded lg:h-[52px] lg:text-base"
              >
                Add to Cart
              </Button>
            </div>

            <div className="space-y-2 pt-6">
              <div className="grid grid-cols-[100px_1fr] font-inter text-xs lg:grid-cols-[140px_1fr] lg:text-sm">
                <span className="text-[#6C7275]">SKU</span>
                <span className="text-[#141718]">1117</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] font-inter text-xs lg:grid-cols-[140px_1fr] lg:text-sm">
                <span className="text-[#6C7275]">CATEGORY</span>
                <span className="text-[#141718]">Headphones, Wireless</span>
              </div>
            </div>
          </div>

          <div className="hidden h-fit flex-col gap-8 rounded border border-[#E8ECEF] p-4 lg:flex">
            <div className="space-y-2">
              <p className="font-poppins font-semibold text-[#141718]">
                Set quantity
              </p>
              <div className="flex items-end justify-between">
                <p className="font-inter text-sm text-[#6C7275]">Subtotal</p>
                <div className="space-y-1 text-right">
                  <p className="font-inter text-sm text-[#6C7275] line-through">
                    $400.00
                  </p>
                  <p className="font-poppins text-xl font-semibold text-[#141718]">
                    $199.00
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex h-10 items-center justify-between rounded bg-[#F5F5F5] px-2 lg:px-4">
                <MinusIcon stroke="#141718" className="h-4 w-4 lg:h-5 lg:w-6" />
                <span className="font-inter text-sm font-semibold text-[#141718]">
                  1
                </span>
                <PlusIcon stroke="#141718" className="h-4 w-4 lg:h-5 lg:w-6" />
              </div>
              <Button
                variant="ghost"
                width="full"
                className="flex h-10 items-center justify-center gap-2 rounded border border-[#141718]"
              >
                <WishlistIcon stroke="#141718" className="h-4 w-4" />
                <span className="font-inter text-sm font-medium text-[#141718]">
                  Wishlist
                </span>
              </Button>
              <Button width="full" fontSize="sm" className="h-10 rounded">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[420px] space-y-10 md:max-w-[520px] lg:max-w-none">
          <div className="flex flex-col lg:flex-row lg:gap-10">
            <div className="flex items-center justify-between border-b border-[#6C7275] pb-2 lg:border-none lg:p-0">
              <p className="font-inter text-lg font-medium text-[#6C7275]">
                Additional Info
              </p>
              <DropdownIcon stroke="#6C7275" className="h-6 w-6 lg:hidden" />
            </div>
            <div className="flex items-center justify-between border-b border-[#6C7275] pb-2 lg:border-none lg:p-0">
              <p className="font-inter text-lg font-medium text-[#6C7275]">
                Questions
              </p>
              <DropdownIcon stroke="#6C7275" className="h-6 w-6 lg:hidden" />
            </div>
            <div className="flex items-center justify-between border-b border-[#141718] pb-2 lg:border-none lg:p-0">
              <p className="font-inter text-lg font-medium text-[#141718]">
                Reviews (11)
              </p>
              <DropdownIcon
                stroke="#141718"
                className="h-6 w-6 rotate-180 lg:hidden"
              />
            </div>
          </div>
          <div className="space-y-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <p className="font-poppins text-[28px] font-medium text-[#141718]">
                11 Reviews
              </p>

              <div className="flex items-center justify-between rounded-lg border-2 border-[#E8ECEF] p-2 pl-4  lg:w-64">
                <p className="font-inter text-base font-semibold text-[#141718]">
                  Newest
                </p>
                <DropdownIcon stroke="#6C7275" className="h-6 w-6" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4 border-b border-[#E8ECEF] pb-4">
                <div className="flex items-center gap-4">
                  <Image
                    width={72}
                    height={72}
                    src="/images/avatar.png"
                    alt="avatar"
                    className="h-[72px] w-[72px] rounded-full object-cover object-center"
                  />

                  <div className="space-y-4">
                    <p className="font-inter text-xl font-semibold text-[#141718]">
                      Nicolas Jensen
                    </p>
                    <div className="flex items-center gap-1">
                      <StarIcon fill="#141718" className="h-4 w-4" />
                      <StarIcon fill="#141718" className="h-4 w-4" />
                      <StarIcon fill="#141718" className="h-4 w-4" />
                      <StarIcon fill="#141718" className="h-4 w-4" />
                      <StarIcon fill="#141718" className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                <p className="font-inter text-base font-normal text-[#353945] lg:pl-[88px]">
                  I bought it 3 weeks ago and now come back just to say “Awesome
                  Product”. I really enjoy it. At vero eos et accusamus et iusto
                  odio dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupt et quas molestias excepturi sint non
                  provident.
                </p>
              </div>
              <div className="space-y-4 border-b border-[#E8ECEF] pb-4">
                <div className="flex items-center gap-4">
                  <Image
                    width={72}
                    height={72}
                    src="/images/avatar.png"
                    alt="avatar"
                    className="h-[72px] w-[72px] rounded-full object-cover object-center"
                  />

                  <div className="space-y-4">
                    <p className="font-inter text-xl font-semibold text-[#141718]">
                      Nicolas Jensen
                    </p>
                    <div className="flex items-center gap-1">
                      <StarIcon fill="#141718" className="h-4 w-4" />
                      <StarIcon fill="#141718" className="h-4 w-4" />
                      <StarIcon fill="#141718" className="h-4 w-4" />
                      <StarIcon fill="#141718" className="h-4 w-4" />
                      <StarIcon fill="#141718" className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                <p className="font-inter text-base font-normal text-[#353945] lg:pl-[88px]">
                  I bought it 3 weeks ago and now come back just to say “Awesome
                  Product”. I really enjoy it. At vero eos et accusamus et iusto
                  odio dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupt et quas molestias excepturi sint non
                  provident.
                </p>
              </div>
              <div className="space-y-4 border-b border-[#E8ECEF] pb-4">
                <div className="flex items-center gap-4">
                  <Image
                    width={72}
                    height={72}
                    src="/images/avatar.png"
                    alt="avatar"
                    className="h-[72px] w-[72px] rounded-full object-cover object-center"
                  />

                  <div className="space-y-4">
                    <p className="font-inter text-xl font-semibold text-[#141718]">
                      Nicolas Jensen
                    </p>
                    <div className="flex items-center gap-1">
                      <StarIcon fill="#141718" className="h-4 w-4" />
                      <StarIcon fill="#141718" className="h-4 w-4" />
                      <StarIcon fill="#141718" className="h-4 w-4" />
                      <StarIcon fill="#141718" className="h-4 w-4" />
                      <StarIcon fill="#141718" className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                <p className="font-inter text-base font-normal text-[#353945] lg:pl-[88px]">
                  I bought it 3 weeks ago and now come back just to say “Awesome
                  Product”. I really enjoy it. At vero eos et accusamus et iusto
                  odio dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupt et quas molestias excepturi sint non
                  provident.
                </p>
              </div>
              <div className="space-y-4 border-b border-[#E8ECEF] pb-4">
                <div className="flex items-center gap-4">
                  <Image
                    width={72}
                    height={72}
                    src="/images/avatar.png"
                    alt="avatar"
                    className="h-[72px] w-[72px] rounded-full object-cover object-center"
                  />

                  <div className="space-y-4">
                    <p className="font-inter text-xl font-semibold text-[#141718]">
                      Nicolas Jensen
                    </p>
                    <div className="flex items-center gap-1">
                      <StarIcon fill="#141718" className="h-4 w-4" />
                      <StarIcon fill="#141718" className="h-4 w-4" />
                      <StarIcon fill="#141718" className="h-4 w-4" />
                      <StarIcon fill="#141718" className="h-4 w-4" />
                      <StarIcon fill="#141718" className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                <p className="font-inter text-base font-normal text-[#353945] lg:pl-[88px]">
                  I bought it 3 weeks ago and now come back just to say “Awesome
                  Product”. I really enjoy it. At vero eos et accusamus et iusto
                  odio dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupt et quas molestias excepturi sint non
                  provident.
                </p>
              </div>
              <div className="space-y-4 border-b border-[#E8ECEF] pb-4">
                <div className="flex items-center gap-4">
                  <Image
                    width={72}
                    height={72}
                    src="/images/avatar.png"
                    alt="avatar"
                    className="h-[72px] w-[72px] rounded-full object-cover object-center"
                  />

                  <div className="space-y-4">
                    <p className="font-inter text-xl font-semibold text-[#141718]">
                      Nicolas Jensen
                    </p>
                    <div className="flex items-center gap-1">
                      <StarIcon fill="#141718" className="h-4 w-4" />
                      <StarIcon fill="#141718" className="h-4 w-4" />
                      <StarIcon fill="#141718" className="h-4 w-4" />
                      <StarIcon fill="#141718" className="h-4 w-4" />
                      <StarIcon fill="#141718" className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                <p className="font-inter text-base font-normal text-[#353945] lg:pl-[88px]">
                  I bought it 3 weeks ago and now come back just to say “Awesome
                  Product”. I really enjoy it. At vero eos et accusamus et iusto
                  odio dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupt et quas molestias excepturi sint non
                  provident.
                </p>
              </div>

              <div className="flex justify-center">
                <button className="rounded-full border border-[#141718] px-10 py-2 font-inter text-base font-medium text-[#141718]">
                  Load more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
