import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { cn } from "@/utils/cn";
import Navbar from "@/components/ui/navbar";

import "../globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kupingplug - Sumpel kuping untuk anda dan keluarga",
  description: "Kupingplug - Sumpel kuping untuk anda dan keluarga",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(inter.variable, poppins.variable)}>
      <body>
        <div className="bg-[#ffc95c]">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
