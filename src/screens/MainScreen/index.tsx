/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  Button,
  FlatList,
} from 'react-native';
import React, {useCallback, useLayoutEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
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
import getResponsiveValue, {colors} from '../../constants';
import CategoriesModal from '../../components/CategoriesModal';

const seperator = <View style={styles.seperator} />;

export default function MainScreen(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );
  const [selectedSubCategory, setSelectedSubCategory] =
    useState<Category | null>(null);
  const [categoriesModalVisible, setCategoriesModalVisible] =
    useState<boolean>(false);

  const navigation = useNavigation();

  navigation.setOptions({
    headerLeft: () => (
      <View style={styles.left_icon_container}>
        <Icon
          name="menu"
          size={getResponsiveValue(30)}
          color={colors.theme}
          onPress={() => setCategoriesModalVisible(true)}
        />
      </View>
    ),
  });

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
  }

  const handleSelectCategory = useCallback(
    (category: Category) => {
      setSelectedCategory(category);
      setCategoriesModalVisible(false);
      getProducts(category.id);
      getSubCategories(category.id);
    },
    [getProducts, getSubCategories],
  );

  const handleCloseModal = useCallback(() => {
    setCategoriesModalVisible(false);
  }, []);

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

  return (
    <SafeAreaView style={styles.container}>
      {isCategoriesLoading || isProductsLoading ? (
        <Loading />
      ) : selectedCategory && products ? (
        <>
          <FlatList
            keyExtractor={item => item.id.toString()}
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
      <CategoriesModal
        isVisible={categoriesModalVisible}
        data={categories?.data?.categories}
        onSelect={handleSelectCategory}
        closeModal={handleCloseModal}
      />
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
