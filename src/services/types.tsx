import {SerializedError} from '@reduxjs/toolkit';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query';
import {AxiosError} from 'axios';

export type LoginResponse = {
  data?: UserData;
  error?: AxiosError;
};

export type UserData = {
  status: boolean;
  data: {
    token: string;
    refreshToken: string;
    expiration: string;
    status: boolean;
  };
};

export type LoginDto = {
  username: string;
  password: string;
};

export type ImageType = {
  id: number;
  imagePath: string;
};

export type Category = {
  id: number;
  categoryName: string;
  order: number;
  link: string;
  imagePath?: ImageType;
  hasImage: number;
  parentId: number;
  subCategoryCount: number;
  productCount: number;
};

export type CategoryData = {
  status: boolean;
  data: {
    parentCategoryId: number;
    selectedCategoryId: number;
    categories: Category[];
  };
};

export type CategoryResponse = {
  data?: CategoryData;
  error?: FetchBaseQueryError | SerializedError;
};

export type Product = {
  key: number;
  id: number;
  stockName: string;
  stockCode: string;
  stock: number;
  price: number;
  priceVat: string;
  stockType: string;
  currency: string;
  totalRow: number;
  kdv: number;
  listPrice: number;
  listPriceVat: string;
  unitIncrement: number;
  discountRate: number;
  isInFavorite: number;
  maxSaleUnit: number;
  minSaleUnit: number;
  inCartQty: number;
  productImages: ImageType[];
  score: number;
};

export type ProductData = {
  status: true;
  data: Product[];
};

export type ProductResponse = {
  data?: ProductData;
  error?: FetchBaseQueryError | SerializedError;
};

export type AddBasketDto = {
  productId: number;
  amount: number;
  userId: number;
  sipID: number;
  isVariant: true;
  variantId: number;
};

export type AddBasketData = {
  status: boolean;
  data: {
    status: boolean;
    message: string;
    code: string;
  };
};

export type AddBasketResponse = {
  data?: AddBasketData;
  error?: FetchBaseQueryError | SerializedError;
};

export type BasketItem = {
  cartID: number;
  id: number;
  productImage: string;
  stockName: string;
  stockCode: string;
  salePrice: number;
  listingPrice: number;
  purchasePrice: number;
  merchantPrice1: number;
  merchantPrice2: number;
  merchantPrice3: number;
  merchantPrice4: number;
  merchantPrice5: number;
  stock: number;
  currency: string;
  weight: number;
  saleUnit: string;
  kdv: number;
  unitIncrement: number;
  discountRate: number;
  maxSaleUnit: number;
  minSaleUnit: number;
  qty: number;
  totalPrice: number;
  categoryName: string;
  stockReduced: number;
};

export type BasketData = {
  status: boolean;
  data: {
    detail: BasketItem[];
    message: {
      minOrderAmount: string;
    };
    coupon: {
      couponMessage: string;
      couponDiscountStr: string;
    };
    basket: {
      totalPrice: number;
      generalTotalPrice: number;
      basketBagQuantity: number;
      basketBagPrice: number;
      couponDiscountAmount: number;
      cargoPrice: number;
    };
  };
};

export type GetBasketResponse = {
  data?: BasketData;
  error?: FetchBaseQueryError | SerializedError;
};
