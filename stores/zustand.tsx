"use client";

// package
import { create } from "zustand";

type ProductDetailProps = {
  showDetail: boolean;
  setShowDetail: (detail: boolean) => void;
};

export const useProductDetail = create<ProductDetailProps>()((set) => ({
  showDetail: false,
  setShowDetail: (detail) => set({ showDetail: detail }),
}));
