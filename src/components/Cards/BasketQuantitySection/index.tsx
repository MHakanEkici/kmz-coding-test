import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import getResponsiveValue from '../../../constants';
import styles from './style';
import {BasketItem} from '../../../services/types';

interface BasketQuantitySectionProps extends TouchableOpacityProps {
  basketStatus: BasketItem | null | undefined;
  onIncrementPress: Function;
}

interface QuantityIconProps {
  iconName: string;
  color: string;
}

const QuantityIcon: React.FC<QuantityIconProps> = ({iconName, iconColor}) => (
  <Icon name={iconName} color={iconColor} size={getResponsiveValue(25)} />
);

const BasketQuantitySection: React.FC<BasketQuantitySectionProps> = ({
  basketStatus,
  onIncrementPress,
}) => {
  return basketStatus ? (
    <View style={styles.edit_countInBasket_card}>
      <TouchableOpacity
        style={styles.edit_countInBasket_button}
        onPress={onIncrementPress}>
        <QuantityIcon iconName={'plus'} iconColor={'black'} />
      </TouchableOpacity>
      <View style={styles.countInBasket_container}>
        <Text style={styles.countInBasket_text}>{basketStatus.qty}</Text>
      </View>
      <TouchableOpacity style={styles.edit_countInBasket_button} onPress={null}>
        <QuantityIcon iconName={'minus'} color={'black'} />
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity style={styles.icon} onPress={onIncrementPress}>
      <QuantityIcon iconName={'plus'} color={'#20266d'} />
    </TouchableOpacity>
  );
};

export default BasketQuantitySection;
