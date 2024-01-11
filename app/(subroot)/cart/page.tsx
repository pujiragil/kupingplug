import { ChevronLeft } from "lucide-react";
import SectionLayout from "@/layouts/sectionLayout";

export default function Page() {
  return (
    <SectionLayout className="relative px-8 py-20">
      <div className="absolute left-8 top-4 inline-flex items-center gap-1 align-baseline">
        <ChevronLeft stroke="#605F5F" className="h-3 w-3" />
        <p className="font-inter text-sm font-medium text-[#605F5F]">back</p>
      </div>

      <div className="space-y-10">
        <h1 className="text-center font-poppins text-[40px] font-medium text-[#141718]">
          Cart
        </h1>
        <div className="flex items-center justify-center gap-4 pb-2 align-baseline">
          <p className="relative min-w-max pr-4 font-inter text-sm font-medium text-[#141718] before:absolute before:right-0 before:content-['/']">
            Shopping cart
          </p>
          <p className="relative line-clamp-1 pr-4 font-inter text-sm font-normal text-[#605F5F] before:absolute before:right-0 before:content-['/']">
            Checkout details
          </p>
          <p className="line-clamp-1 font-inter text-sm font-normal text-[#605F5F]">
            Order complete
          </p>
        </div>
      </div>
    </SectionLayout>
  );
}
