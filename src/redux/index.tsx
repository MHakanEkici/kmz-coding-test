import {
  combineReducers,
  configureStore,
  ConfigureStoreOptions,
  Reducer,
} from '@reduxjs/toolkit';
import {serviceMiddlewares} from '../services';
import {setupListeners} from '@reduxjs/toolkit/query';
import {categoryService} from '../services/CategoryService';
import authSlice from './AuthSlice';
import {productService} from '../services/ProductService';
import {basketService} from '../services/BasketService';

const rootReducer: Reducer = combineReducers({
  [categoryService.reducerPath]: categoryService.reducer,
  [productService.reducerPath]: productService.reducer,
  [basketService.reducerPath]: basketService.reducer,
  auth: authSlice,
});

const middleware = [...serviceMiddlewares];

const options: ConfigureStoreOptions = {
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(middleware),
};

export const store = configureStore(options);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
