import React from 'react';
import {View, Image, Text, ViewProps} from 'react-native';
import styles from './style';
import {BasketItem, Product} from '../../../services/types';
import BasketQuantitySection from '../BasketQuantitySection';

interface ProductCardProps extends ViewProps {
  product: Product;
  onAddPressed: Function;
  basketStatus: BasketItem | null | undefined;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddPressed,
  basketStatus,
  ...otherProps
}) => {
  return (
    <View style={styles.container} {...otherProps}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{
          uri: product.productImages[0]?.imagePath,
        }}
      />
      <Text style={styles.price} ellipsizeMode="tail" numberOfLines={1}>
        {`${product.priceVat} ₺`}
      </Text>
      <Text style={styles.name} ellipsizeMode="tail" numberOfLines={2}>
        {product.stockName}
      </Text>
      <BasketQuantitySection
        basketStatus={basketStatus}
        onIncrementPress={onAddPressed}
      />
    </View>
  );
};

export default ProductCard;
