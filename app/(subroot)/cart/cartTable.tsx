// package
import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";

const CartTable = () => {
  return (
    <table className="h-fit w-full">
      <thead className="border-b border-[#141718]">
        <tr className="text-left">
          <th className="pb-6 font-poppins text-base font-semibold text-[#141718]">
            Product
          </th>
          <th className="hidden pb-6 text-center font-poppins text-base font-semibold text-[#141718] sm:table-cell">
            Quantity
          </th>
          <th className="hidden pb-6 text-center font-poppins text-base font-semibold text-[#141718] sm:table-cell">
            Price
          </th>
          <th className="hidden pb-6 text-center font-poppins text-base font-semibold text-[#141718] sm:table-cell">
            Subtotal
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="border-b border-[#E8ECEF] last:border-b-0">
          <td className="py-6">
            <div className="flex gap-4 sm:items-center">
              <div className="h-[120px] min-w-[120px] max-w-[120px] bg-[#F3F5F7]">
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
                  <p className="font-inter text-sm font-semibold text-[#141718] sm:hidden">
                    $19.90
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="font-inter text-xs font-normal text-[#6C7275] sm:text-sm">
                    Color: Black
                  </p>
                  <X stroke="#6C7275" className="h-6 w-6 sm:hidden" />
                </div>

                <div className="flex w-[96px] items-center justify-between rounded border border-[#6C7275] p-2 sm:hidden">
                  <Minus className="h-4 w-4" />
                  <span className="font-inter text-xs font-semibold text-[#141718]">
                    2
                  </span>
                  <Plus className="h-4 w-4" />
                </div>
              </div>
            </div>
          </td>
          <td className="hidden py-6 sm:table-cell">
            <div className="flex justify-center">
              <div className="flex w-[96px] items-center justify-between rounded border border-[#6C7275] p-2">
                <Minus className="h-4 w-4" />
                <span className="font-inter text-xs font-semibold text-[#141718]">
                  2
                </span>
                <Plus className="h-4 w-4" />
              </div>
            </div>
          </td>
          <td className="hidden py-6 sm:table-cell">
            <p className="text-center font-inter text-base font-normal text-[#141718]">
              $19.90
            </p>
          </td>
          <td className="hidden py-6 sm:table-cell">
            <p className="text-center font-inter text-base font-semibold text-[#141718]">
              $39.80
            </p>
          </td>
        </tr>
        <tr className="border-b border-[#E8ECEF] last:border-b-0">
          <td className="py-6">
            <div className="flex gap-4 sm:items-center">
              <div className="h-[120px] min-w-[120px] max-w-[120px] bg-[#F3F5F7]">
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
                  <p className="font-inter text-sm font-semibold text-[#141718] sm:hidden">
                    $19.90
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="font-inter text-xs font-normal text-[#6C7275] sm:text-sm">
                    Color: Black
                  </p>
                  <X stroke="#6C7275" className="h-6 w-6 sm:hidden" />
                </div>

                <div className="flex w-[96px] items-center justify-between rounded border border-[#6C7275] p-2 sm:hidden">
                  <Minus className="h-4 w-4" />
                  <span className="font-inter text-xs font-semibold text-[#141718]">
                    2
                  </span>
                  <Plus className="h-4 w-4" />
                </div>
              </div>
            </div>
          </td>
          <td className="hidden py-6 sm:table-cell">
            <div className="flex justify-center">
              <div className="flex w-[96px] items-center justify-between rounded border border-[#6C7275] p-2">
                <Minus className="h-4 w-4" />
                <span className="font-inter text-xs font-semibold text-[#141718]">
                  2
                </span>
                <Plus className="h-4 w-4" />
              </div>
            </div>
          </td>
          <td className="hidden py-6 sm:table-cell">
            <p className="text-center font-inter text-base font-normal text-[#141718]">
              $19.90
            </p>
          </td>
          <td className="hidden py-6 sm:table-cell">
            <p className="text-center font-inter text-base font-semibold text-[#141718]">
              $39.80
            </p>
          </td>
        </tr>
        <tr className="border-b border-[#E8ECEF] last:border-b-0">
          <td className="py-6">
            <div className="flex gap-4 sm:items-center">
              <div className="h-[120px] min-w-[120px] max-w-[120px] bg-[#F3F5F7]">
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
                  <p className="font-inter text-sm font-semibold text-[#141718] sm:hidden">
                    $19.90
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="font-inter text-xs font-normal text-[#6C7275] sm:text-sm">
                    Color: Black
                  </p>
                  <X stroke="#6C7275" className="h-6 w-6 sm:hidden" />
                </div>

                <div className="flex w-[96px] items-center justify-between rounded border border-[#6C7275] p-2 sm:hidden">
                  <Minus className="h-4 w-4" />
                  <span className="font-inter text-xs font-semibold text-[#141718]">
                    2
                  </span>
                  <Plus className="h-4 w-4" />
                </div>
              </div>
            </div>
          </td>
          <td className="hidden py-6 sm:table-cell">
            <div className="flex justify-center">
              <div className="flex w-[96px] items-center justify-between rounded border border-[#6C7275] p-2">
                <Minus className="h-4 w-4" />
                <span className="font-inter text-xs font-semibold text-[#141718]">
                  2
                </span>
                <Plus className="h-4 w-4" />
              </div>
            </div>
          </td>
          <td className="hidden py-6 sm:table-cell">
            <p className="text-center font-inter text-base font-normal text-[#141718]">
              $19.90
            </p>
          </td>
          <td className="hidden py-6 sm:table-cell">
            <p className="text-center font-inter text-base font-semibold text-[#141718]">
              $39.80
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CartTable;
