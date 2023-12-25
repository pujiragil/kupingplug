// ui
import PromoSection from "@/ui/promo";
import Navbar from "@/ui/navbar";
import Footer from "@/ui/footer";

// hooks
import { RootContextProvider } from "@/hooks/rootContext";

interface PageLayoutProps {
  root: boolean;
  children: React.ReactNode;
}

export default function PageLayout({ root, children }: PageLayoutProps) {
  return (
    <>
      <RootContextProvider root={root}>
        <div className="nav-wrap">
          <PromoSection />
          <Navbar />
        </div>
      </RootContextProvider>
      <main>{children}</main>
      <Footer />
    </>
  );
}
