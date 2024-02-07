"use client";

// package
import { useState } from "react";

// types
import { ProductTabs } from "@/types/product";

// ui
import Text from "@/ui/text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";
import { DropdownIcon } from "@/ui/assets/svg";
import ProductTabAdditionalInfo from "@/app/(subroot)/products/productTab/productTabAdditionalInfo";
import ProductTabReviews from "@/app/(subroot)/products/productTab/productTabReviews";

const productTabs = [
  {
    value: "additional-info",
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

const ProductTab = ({ tabs }: { tabs: ProductTabs }) => {
  const [currentTab, setCurrentTab] = useState<string>(productTabs[0].value);

  return (
    <Tabs
      defaultValue={productTabs[0].value}
      onValueChange={(tab) => setCurrentTab(tab)}
      className="mx-auto w-full max-w-[420px] space-y-10 md:max-w-[520px] lg:max-w-none"
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
      <TabsContent value="additional-info">
        <ProductTabAdditionalInfo data={tabs.additionalInfo} />
      </TabsContent>
      <TabsContent value="questions">
        <p>questions</p>
      </TabsContent>
      <TabsContent value="reviews">
        <ProductTabReviews data={tabs.reviews} />
      </TabsContent>
    </Tabs>
  );
};

export default ProductTab;
