import {basketService} from './BasketService';
import {categoryService} from './CategoryService';
import {productService} from './ProductService';

export const serviceMiddlewares = [
  categoryService.middleware,
  productService.middleware,
  basketService.middleware,
];
