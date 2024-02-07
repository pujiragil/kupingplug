// types
import { ProductAdditionalInfo } from "@/types/product";

// ui
import ProductTabDialog from "@/app/(subroot)/products/productTab/productTabDialog";

const ProductTabAdditionalInfo = ({
  data,
}: {
  data: ProductAdditionalInfo;
}) => {
  const { specifications, details } = data;

  return (
    <div className="space-y-10">
      <p className="font-poppins text-2xl font-medium text-[#141718]">
        Additional Info
      </p>
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="font-inter text-lg font-semibold text-[#141718]">
            Specifications
          </p>

          <ul className="relative space-y-4 after:absolute after:bottom-0 after:h-80 after:w-full after:bg-gradient-to-t after:from-white after:to-white/0">
            {specifications.slice(0, 2).map((specification) => (
              <li key={specification.label} className="space-y-1">
                <span className="py-2 font-inter text-sm font-semibold text-[#141718]">
                  {specification.label}
                </span>
                <ul>
                  {specification.items.map((item) => (
                    <li
                      key={item.label}
                      className="flex justify-between bg-[#E8ECEF] py-2 font-inter text-sm font-normal odd:bg-white even:bg-slate-50"
                    >
                      <span className="flex-1">{item.label}</span>
                      <span className="flex-1 text-right">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          {/* Product dialog */}
          <div className="flex justify-center">
            <ProductTabDialog
              trigger={
                <button className="rounded-full border border-[#141718] px-10 py-2 font-inter text-base font-medium text-[#141718]">
                  Load more
                </button>
              }
            >
              <div className="space-y-6">
                {/* Specifications section */}
                <div className="space-y-2">
                  <p className="font-inter text-lg font-semibold text-[#141718]">
                    Specifications
                  </p>

                  <ul className="space-y-4">
                    {specifications.map((specification) => (
                      <li key={specification.label} className="space-y-1">
                        <span className="py-2 font-inter text-sm font-semibold text-[#141718]">
                          {specification.label}
                        </span>
                        <ul>
                          {specification.items.map((item) => (
                            <li
                              key={item.label}
                              className="flex justify-between bg-[#E8ECEF] py-2 font-inter text-sm font-normal odd:bg-white even:bg-slate-50"
                            >
                              <span className="flex-1">{item.label}</span>
                              <span className="flex-1 text-right">
                                {item.value}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specifications section */}
                <div className="space-y-2">
                  <p className="font-inter text-lg font-semibold text-[#141718]">
                    Details
                  </p>

                  {details.map((detail, idx) => (
                    <p
                      key={idx}
                      className="font-inter text-sm font-normal text-[#353945]"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </ProductTabDialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTabAdditionalInfo;
