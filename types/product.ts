export type Product = {
  id: string;
  name: string;
  categories: string[];
  description: string;
  price: number;
  rating: number;
  variants: {
    name: string;
    image: {
      src: string;
      alt: string;
    };
  }[];
  images: string[];
  tabs: ProductTabs;
};

export type ProductTabs = {
  additionalInfo: ProductAdditionalInfo;
  reviews: ProductReviews;
};

export type ProductAdditionalInfo = {
  details: ProductDetails;
  specifications: ProductSpecifications;
};

type ProductDetails = string[];

type ProductSpecifications = {
  label: string;
  items: { label: string; value: string }[];
}[];

export type ProductReviews = {
  id: number;
  profile: {
    image: {
      src: string;
      alt: string;
    };
    name: string;
  };
  rating: number;
  comment: string;
}[];
