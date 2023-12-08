import Link from "next/link";
import Image from "next/image";

import Button from "@/components/ui/button";
import SectionLayout from "@/layouts/sectionLayout";
import ProductSlider from "@/components/ui/slider/productSlider";
import { ArrowRightIcon } from "@/components/ui/assets/svg";
import Heading from "@/components/ui/head";
import ProductCard from "@/components/ui/card/productCard";

import products from "@/data/product.json";

export default function Home() {
  return (
    <>
      {/* main section */}
      <SectionLayout
        bg="bg-[#ffc95c]"
        className="flex flex-col items-center justify-between lg:grid lg:grid-cols-2 lg:pt-8"
      >
        <div className="flex flex-col items-center gap-4 p-8 sm:max-w-[600px] md:max-w-[600px] md:py-16 lg:order-2 lg:max-w-none lg:items-start lg:p-0">
          <div className="space-y-2 text-center lg:text-left">
            <Heading as="h1" intent="hero-section">
              Listen to the <span className="text-[#377DFF]">amazing</span>{" "}
              music sound.
            </Heading>
            <p className="font-inter text-base font-normal text-[#121212] md:text-lg lg:text-xl">
              Experience music like never before
            </p>
          </div>
          <Button intent="primary" size="lg">
            Shopping Now
          </Button>
        </div>

        <div className="flex h-auto w-full items-end justify-center overflow-hidden lg:order-1">
          <Image
            src="/images/main.png"
            width={600}
            height={761}
            alt="nigga-listening-music"
            className="w-full max-w-[360px] object-cover object-top lg:max-w-[420px] xl:max-w-[460px]"
          />
        </div>
      </SectionLayout>

      {/* Product slider section */}
      <SectionLayout bg="bg-white">
        <div className="space-y-10 p-8">
          <Heading
            as="h2"
            intent="base-section"
            className="text-center md:text-left"
          >
            New Arrivals
          </Heading>

          <ProductSlider />
        </div>
      </SectionLayout>

      {/* Shop collection section */}
      <SectionLayout>
        <div className="space-y-4 px-8 py-10 sm:space-y-8 md:space-y-12">
          <Heading
            as="h2"
            intent="base-section"
            className="text-center md:text-left"
          >
            Shop Collection
          </Heading>

          <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:h-[560px]">
            {/* main collection */}
            <div className="relative aspect-[0.8/1] min-h-[377px] w-full min-w-[311px] bg-[#F3F5F7] p-8 sm:row-span-2 sm:aspect-auto sm:h-full sm:min-w-0">
              <div className="absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden">
                <Image
                  src="/images/sumplekuping-2.png"
                  width={262}
                  height={349}
                  alt="background collection"
                  className="aspect-[0.75/1] w-[80%] -translate-y-[10%] object-center md:w-[60%]"
                />
              </div>

              <div className="relative flex h-full flex-col justify-end gap-2">
                <h4 className="font-poppins text-[28px] font-medium text-[#121212]">
                  Headband
                </h4>
                <Link href="/shop" className="w-fit">
                  <span className="flex w-fit items-center gap-1 border-b border-[#121212]">
                    Collection{" "}
                    <ArrowRightIcon stroke="#121212" className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>

            {/* another collection */}
            <div className="relative aspect-[1/0.5] min-h-[180px] w-full min-w-[311px] bg-[#F3F5F7] p-8 sm:aspect-auto sm:h-full sm:min-w-0">
              <div className="absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden">
                <Image
                  src="/images/sumplekuping-4.png"
                  width={262}
                  height={349}
                  alt="background collection"
                  className="aspect-[0.75/1] w-[50%] translate-x-1/2 md:w-[40%]"
                />
              </div>

              <div className="relative flex h-full flex-col justify-end gap-2">
                <h4 className="font-poppins text-[28px] font-medium text-[#121212]">
                  Earbuds
                </h4>
                <Link href="/shop" className="w-fit">
                  <span className="flex w-fit items-center gap-1 border-b border-[#121212]">
                    Collection{" "}
                    <ArrowRightIcon stroke="#121212" className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="relative aspect-[1/0.5] min-h-[180px] w-full min-w-[311px] bg-[#F3F5F7] p-8 sm:aspect-auto sm:h-full sm:min-w-0">
              <div className="absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden">
                <Image
                  src="/images/sumplekuping-5.png"
                  width={262}
                  height={349}
                  alt="background collection"
                  className="aspect-[0.75/1] w-[50%] translate-x-1/2 md:w-[40%]"
                />
              </div>

              <div className="relative flex h-full flex-col justify-end gap-2">
                <h4 className="font-poppins text-[28px] font-medium text-[#121212]">
                  Accessories
                </h4>
                <Link href="/shop" className="w-fit">
                  <span className="flex w-fit items-center gap-1 border-b border-[#121212]">
                    Collection{" "}
                    <ArrowRightIcon stroke="#121212" className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Best seller section */}
      <SectionLayout>
        <div className="space-y-4 px-8 py-10 sm:space-y-8 md:space-y-12">
          <Heading
            as="h2"
            intent="base-section"
            className="text-center md:text-left"
          >
            Best Seller
          </Heading>

          <div className="grid grid-cols-2 gap-x-2 gap-y-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-8 xl:grid-cols-5">
            {products.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        </div>
      </SectionLayout>

      {/* Promotion section */}
      <div className="grid md:grid-cols-2">
        <div className="justify-end bg-gray-400 md:flex">
          <div className="w-full max-w-[720px] p-8">
            Halo bang from right side
          </div>
        </div>
        <div className="bg-[#ffdd99]">
          <div className="w-full max-w-[720px] space-y-6 p-8">
            <div className="space-y-4">
              <p className="font-inter text-base font-bold uppercase text-[#377DFF]">
                promotion
              </p>
              <Heading as="h2" intent="base-section">
                Hurry up! 40% OFF
              </Heading>
              <p className="font-inter text-sm font-normal text-black/90">
                Thousands of high tech are waiting for you
              </p>
            </div>
            <div className="space-y-3">
              <p className="font-inter text-base font-normal text-black/90">
                Offer expires in:
              </p>
              <div className="flex gap-4">
                <div className="w-fit">
                  <div className="flex h-[60px] w-[60px] items-center justify-center bg-white">
                    <p className="font-poppins text-[34px] font-medium text-black/90">
                      02
                    </p>
                  </div>
                  <p className="text-center font-inter text-xs font-normal text-black/90">
                    Days
                  </p>
                </div>

                <div className="w-fit">
                  <div className="flex h-[60px] w-[60px] items-center justify-center bg-white">
                    <p className="font-poppins text-[34px] font-medium text-black/90">
                      12
                    </p>
                  </div>
                  <p className="text-center font-inter text-xs font-normal text-black/90">
                    Hours
                  </p>
                </div>

                <div className="w-fit">
                  <div className="flex h-[60px] w-[60px] items-center justify-center bg-white">
                    <p className="font-poppins text-[34px] font-medium text-black/90">
                      45
                    </p>
                  </div>
                  <p className="text-center font-inter text-xs font-normal text-black/90">
                    Minutes
                  </p>
                </div>

                <div className="w-fit">
                  <div className="flex h-[60px] w-[60px] items-center justify-center bg-white">
                    <p className="font-poppins text-[34px] font-medium text-black/90">
                      05
                    </p>
                  </div>
                  <p className="text-center font-inter text-xs font-normal text-black/90">
                    Seconds
                  </p>
                </div>
              </div>
            </div>
            <Button intent="primary" size="md">
              Shop now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
