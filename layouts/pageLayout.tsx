import Navbar from "@/components/ui/navbar";
import PromoSection from "@/components/ui/promo";
import { RootContextProvider } from "@/hooks/rootContext";

interface PageLayoutProps {
  root: boolean;
  children: React.ReactNode;
}

export default function PageLayout({ root, children }: PageLayoutProps) {
  return (
    <>
      <RootContextProvider root={root}>
        <div className="sticky top-0">
          <PromoSection />
          <Navbar />
        </div>
      </RootContextProvider>
      <main>{children}</main>
    </>
  );
}
