import type { Metadata } from "next";

import PageLayout from "@/layouts/pageLayout";

export const metadata: Metadata = {
  title: "Kupingplug - Sumpel kuping untuk anda dan keluarga",
  description: "Kupingplug - Sumpel kuping untuk anda dan keluarga",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageLayout root={true}>{children}</PageLayout>;
}
