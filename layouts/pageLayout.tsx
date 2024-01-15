// ui
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
        <Navbar />
      </RootContextProvider>
      <main>{children}</main>
      <Footer />
    </>
  );
}
