import React from 'react';
import {View, Text, ViewProps} from 'react-native';
import styles from './style';
import {BasketItem} from '../../../services/types';

interface BasketCardProps extends ViewProps {
  basketItem: BasketItem;
}

const BasketCard: React.FC<BasketCardProps> = ({basketItem, ...otherProps}) => {
  return (
    <View style={styles.container} {...otherProps}>
      <Text style={styles.name} ellipsizeMode="tail" numberOfLines={1}>
        {basketItem.stockName}
      </Text>
      <Text style={styles.quantity} ellipsizeMode="tail" numberOfLines={2}>
        {`Adet: ${basketItem.qty}`}
      </Text>
    </View>
  );
};

export default BasketCard;
