/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  Button,
} from 'react-native';
import React from 'react';
import {
  categoryService,
  useGetCategoriesQuery,
  useGetSubCategoriesQuery,
} from '../../services/CategoryService';
import {useAddToBasketMutation} from '../../services/BasketService';
import {AddBasketDto, Product} from '../../services/types';
import {
  productService,
  useGetProductsByCategoryQuery,
} from '../../services/ProductService';

export default function MainScreen(): JSX.Element {
  const {
    data: categories,
    isError: isCategoriesError,
    isLoading: isCategoriesLoading,
    error: getCategoryError,
  } = useGetCategoriesQuery();

  const [
    getSubCategories,
    {
      data: subCategories,
      isError: isSubcategoriesError,
      isLoading: isSubCategoriesLoading,
      error: getSubCategoryError,
    },
  ] = categoryService.endpoints.getSubCategories.useLazyQuery();

  const [
    getProducts,
    {
      data: products,
      isError: isProductsError,
      isLoading: isProductsLoading,
      error: getProductsError,
    },
  ] = productService.endpoints.getProductsByCategory.useLazyQuery();

  const [addBasket, {data, isError, isLoading, error}] =
    useAddToBasketMutation();

  async function addToBasket(product: Product) {
    const addbasketData: AddBasketDto = {
      productId: 2205,
      amount: 1,
      userId: 674,
      sipID: 0,
      isVariant: true,
      variantId: 0,
    };

    await addBasket(addbasketData);
  }

  return (
    <SafeAreaView>
      {isLoading ? (
        <ActivityIndicator size={40} color={'orange'} />
      ) : (
        <View>
          <Text>{JSON.stringify(categories)}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
