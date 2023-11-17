/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  Button,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux';
import styles from './style';
import {AddBasketDto, Category, Product} from '../../services/types';

import {
  categoryService,
  useGetCategoriesQuery,
} from '../../services/CategoryService';
import {
  basketService,
  useAddToBasketMutation,
  useGetBasketQuery,
} from '../../services/BasketService';
import {productService} from '../../services/ProductService';
import CategoryCard from '../../components/Cards/CategoryCard';
import MainFlatList from '../../components/MainFlatList';
import Loading from '../../components/Loading';
import ProductCard from '../../components/Cards/ProductCard';
import SubCategoryCard from '../../components/Cards/SubCategoryCard';

export default function MainScreen(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );
  const [selectedSubCategory, setSelectedSubCategory] =
    useState<Category | null>(null);

  const userData = useSelector((state: RootState) => state.auth.userData);

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

  const {data: basket} = useGetBasketQuery(userData.data.userId);

  const [
    addBasket,
    {
      data: addBasketResponse,
      isError: isAddBasketError,
      isLoading: isAddBasketLoading,
      error: addBasketError,
    },
  ] = useAddToBasketMutation();

  async function addToBasket(product: Product) {
    const addbasketData: AddBasketDto = {
      productId: product.id,
      amount: 1,
      userId: userData.data.userId,
      sipID: 0,
      isVariant: true,
      variantId: 0,
    };

    await addBasket(addbasketData);

    console.log('basket:');
    console.log(basket);
    console.log('addBasketResponse:');
    console.log(addBasketResponse);
  }

  function handleSelectCategory(category: Category) {
    setSelectedCategory(category);
    getProducts(category.id);
    getSubCategories(category.id);
  }

  const renderCategories = ({item, index}: RenderCategoriesProps) => (
    <CategoryCard
      key={item.id.toString()}
      category={item}
      onPress={() => handleSelectCategory(item)}
    />
  );

  const renderSubCategories = ({item, index}: RenderCategoriesProps) => (
    <SubCategoryCard
      key={item.id.toString()}
      subCategory={item}
      isSelected={selectedSubCategory?.id === item.id}
      onPress={() => setSelectedSubCategory(item)}
    />
  );

  const renderProducts = ({item, index}: RenderProductsProps) => (
    <ProductCard
      key={item.id.toString()}
      product={item}
      basketStatus={
        basket
          ? basket.data?.detail.find(product => product.id === item.id)
          : null
      }
      onAddPressed={() => addToBasket(item)}
    />
  );

  const seperator = <View style={styles.seperator} />;

  return (
    <SafeAreaView style={styles.container}>
      {isCategoriesLoading || isProductsLoading ? (
        <Loading />
      ) : selectedCategory && products ? (
        <>
          <FlatList
            data={subCategories?.data?.categories}
            renderItem={renderSubCategories}
            style={styles.subCategory_list_container}
            contentContainerStyle={styles.subCategory_list_content}
            horizontal={true}
            ItemSeparatorComponent={seperator}
          />
          <MainFlatList data={products?.data} renderItem={renderProducts} />
        </>
      ) : (
        <MainFlatList
          data={categories?.data?.categories}
          renderItem={renderCategories}
        />
      )}
    </SafeAreaView>
  );
}

interface RenderCategoriesProps {
  item: Category;
  index: number;
}

interface RenderProductsProps {
  item: Product;
  index: number;
}
