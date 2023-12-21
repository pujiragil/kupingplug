"use client";

// package
import { createContext, useContext, useRef } from "react";
import { createStore, useStore } from "zustand";

interface ProductProps {
  showDetail: boolean;
}

interface ProductState extends ProductProps {
  setShowDetail: (detail: boolean) => void;
}

type ProductStore = ReturnType<typeof createProductStore>;

const createProductStore = (initProps?: Partial<ProductProps>) => {
  const DEFAULT_PROPS: ProductProps = {
    showDetail: false,
  };

  return createStore<ProductState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    setShowDetail: (detail) => set({ showDetail: detail }),
  }));
};

const ProductContext = createContext<ProductStore | null>(null);

type ProductProviderProps = React.PropsWithChildren<ProductProps>;

function ProductProvider({ children, ...props }: ProductProviderProps) {
  const storeRef = useRef<ProductStore>();
  if (!storeRef.current) {
    storeRef.current = createProductStore(props);
  }

  return (
    <ProductContext.Provider value={storeRef.current}>
      {children}
    </ProductContext.Provider>
  );
}

function useProductContext<T>(selector: (state: ProductState) => T): T {
  const store = useContext(ProductContext);
  if (!store) throw new Error("Missing ProductContext.Provider in the tree");
  return useStore(store, selector);
}

export { ProductProvider, useProductContext };
