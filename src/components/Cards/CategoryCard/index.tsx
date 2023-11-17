import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import styles from './style';
import {Category} from '../../../services/types';

interface CategoryCardProps extends TouchableOpacityProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  ...otherProps
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      {...otherProps}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{
          uri: category.imagePath?.imagePath,
        }}
      />
      <Text style={styles.name} ellipsizeMode="tail" numberOfLines={2}>
        {category.categoryName}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
