export interface ISize {
  size: string;
  count: number;
  price: number;
}

export interface IVariant {
  color: string;
  sizes: ISize[];
  images: string[];
}

export interface IProduct {
  _id: string;
  category: string;
  brand: string;
  brand_thumbnail: string;
  title: string;
  slug: string;
  description: string;
  ratingsAverage: number;
  ratingsQuantity: number;
  variants: IVariant[];
  updatedAt: string;
  createdAt: string;
  __v: number;
}

export interface IProductResponse {
  status: string;
  data: IProduct;
}

export interface IAllProductsResponse {
  status: string;
  results: number;
  data: IProduct[];
}
