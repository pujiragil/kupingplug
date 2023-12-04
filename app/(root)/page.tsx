import Image from "next/image";

import Button from "@/components/ui/button";
import SectionLayout from "@/layouts/sectionLayout";
import Slider from "@/app/(root)/slider";

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
            <h1 className="font-poppins text-[40px] font-medium text-[#121212] md:text-6xl xl:text-7xl">
              Listen to the <span className="text-[#377DFF]">amazing</span>{" "}
              music sound.
            </h1>
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

      <SectionLayout bg="bg-white">
        <div className="flex flex-col gap-10 py-8 pl-8">
          <h2 className="font-poppins text-[34px] font-medium text-black">
            New Arrivals
          </h2>

          <Slider />
        </div>
      </SectionLayout>
    </>
  );
}
