"use client";

import Image from "next/image";
import { DropdownIcon, StarIcon } from "@/ui/assets/svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";
import { useState } from "react";
import Text from "@/ui/text";

const productTabs = [
  {
    value: "info",
    name: "Additional Info",
  },
  {
    value: "questions",
    name: "Questions",
  },
  {
    value: "reviews",
    name: "Reviews",
  },
];

const ProductTab = () => {
  const [currentTab, setCurrentTab] = useState<string>(productTabs[0].value);
  return (
    <Tabs
      defaultValue={productTabs[0].value}
      onValueChange={(tab) => setCurrentTab(tab)}
      className="mx-auto w-full max-w-[420px] space-y-10 lg:max-w-none"
    >
      <TabsList className="flex h-auto w-full flex-col gap-2 bg-white p-2 lg:flex-row lg:justify-start lg:gap-8 lg:rounded-none lg:border-b lg:border-[#E8ECEF] lg:p-0">
        {productTabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            <Text
              weight={500}
              size="lg"
              color="gray"
              className="group-data-[state=active]:text-[#141718]"
            >
              {tab.name}
            </Text>
            <DropdownIcon
              stroke={currentTab === tab.value ? "#141718" : "#6C7275"}
              className="transition duration-100 ease-in group-data-[state=active]:rotate-180 lg:hidden"
            />
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="info">
        <Info />
      </TabsContent>
      <TabsContent value="questions">
        <p>questions</p>
      </TabsContent>
      <TabsContent value="reviews">
        <Reviews />
      </TabsContent>
    </Tabs>
  );
};

const Info = () => {
  return (
    <div className="space-y-10 lg:w-3/5">
      <p className="font-poppins text-2xl font-medium text-[#141718]">
        Additional Info
      </p>
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="font-inter text-lg font-semibold text-[#141718]">
            Specification
          </p>

          <ul className="space-y-0.5">
            <li className="font-inter text-sm font-normal text-[#353945]">
              IPX Rating : 4
            </li>
            <li className="font-inter text-sm font-normal text-[#353945]">
              Driver Diameter : 7 mm
            </li>
            <li className="font-inter text-sm font-normal text-[#353945]">
              Versi Bluetooth : 5.0
            </li>
            <li className="font-inter text-sm font-normal text-[#353945]">
              Audio Decoder : SBC AAC
            </li>
            <li className="font-inter text-sm font-normal text-[#353945]">
              Driver unit : 7mm Dynamic Driver
            </li>
            <li className="font-inter text-sm font-normal text-[#353945]">
              Freq Response 20 - 20 kHz
            </li>
            <li className="font-inter text-sm font-normal text-[#353945]">
              Impedance : 16 Ohm +- 15%
            </li>
            <li className="font-inter text-sm font-normal text-[#353945]">
              Mic Sensitivity : -42 dB +- 6 dB
            </li>
            <li className="font-inter text-sm font-normal text-[#353945]">
              Kapasitas Baterai : Earphone = 2 x 50 mA
            </li>
            <li className="font-inter text-sm font-normal text-[#353945]">
              Charging Case : 400 mA
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="font-inter text-lg font-semibold text-[#141718]">
            Details
          </p>
          <p className="font-inter text-sm font-normal text-[#353945]">
            You can use the removable tray for serving. The design makes it easy
            to put the tray back after use since you place it directly on the
            table frame without having to fit it into any holes.
          </p>
        </div>
        <div className="space-y-2">
          <p className="font-inter text-lg font-semibold text-[#141718]">
            Packaging
          </p>
          <ul className="space-y-0.5">
            <li className="font-inter text-sm font-normal text-[#353945]">
              Width: 20 &quot; Height: 1 ½ &quot; Length: 21 ½ &quot;
            </li>
            <li className="font-inter text-sm font-normal text-[#353945]">
              Weight: 7 lb 8 oz
            </li>
            <li className="font-inter text-sm font-normal text-[#353945]">
              Package(s): 1
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <p className="font-poppins text-2xl font-medium text-[#141718]">
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
        <div className="flex gap-4 border-b border-[#E8ECEF] pb-4 lg:flex-row">
          <Image
            width={72}
            height={72}
            src="/images/avatar.png"
            alt="avatar"
            className="hidden h-[72px] w-[72px] rounded-full object-cover object-center lg:block"
          />
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <Image
                width={72}
                height={72}
                src="/images/avatar.png"
                alt="avatar"
                className="h-[72px] w-[72px] rounded-full object-cover object-center lg:hidden"
              />

              <div className="space-y-2">
                <p className="font-inter text-lg font-semibold text-[#141718]">
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
            <p className="font-inter text-sm font-normal text-[#353945]">
              I bought it 3 weeks ago and now come back just to say “Awesome
              Product”. I really enjoy it. At vero eos et accusamus et iusto
              odio dignissimos ducimus qui blanditiis praesentium voluptatum
              deleniti atque corrupt et quas molestias excepturi sint non
              provident.
            </p>
          </div>
        </div>
        <div className="flex gap-4 border-b border-[#E8ECEF] pb-4 lg:flex-row">
          <Image
            width={72}
            height={72}
            src="/images/avatar.png"
            alt="avatar"
            className="hidden h-[72px] w-[72px] rounded-full object-cover object-center lg:block"
          />
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <Image
                width={72}
                height={72}
                src="/images/avatar.png"
                alt="avatar"
                className="h-[72px] w-[72px] rounded-full object-cover object-center lg:hidden"
              />

              <div className="space-y-2">
                <p className="font-inter text-lg font-semibold text-[#141718]">
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
            <p className="font-inter text-sm font-normal text-[#353945]">
              I bought it 3 weeks ago and now come back just to say “Awesome
              Product”. I really enjoy it. At vero eos et accusamus et iusto
              odio dignissimos ducimus qui blanditiis praesentium voluptatum
              deleniti atque corrupt et quas molestias excepturi sint non
              provident.
            </p>
          </div>
        </div>
        <div className="flex gap-4 border-b border-[#E8ECEF] pb-4 lg:flex-row">
          <Image
            width={72}
            height={72}
            src="/images/avatar.png"
            alt="avatar"
            className="hidden h-[72px] w-[72px] rounded-full object-cover object-center lg:block"
          />
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <Image
                width={72}
                height={72}
                src="/images/avatar.png"
                alt="avatar"
                className="h-[72px] w-[72px] rounded-full object-cover object-center lg:hidden"
              />

              <div className="space-y-2">
                <p className="font-inter text-lg font-semibold text-[#141718]">
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
            <p className="font-inter text-sm font-normal text-[#353945]">
              I bought it 3 weeks ago and now come back just to say “Awesome
              Product”. I really enjoy it. At vero eos et accusamus et iusto
              odio dignissimos ducimus qui blanditiis praesentium voluptatum
              deleniti atque corrupt et quas molestias excepturi sint non
              provident.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="rounded-full border border-[#141718] px-10 py-2 font-inter text-base font-medium text-[#141718]">
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTab;
