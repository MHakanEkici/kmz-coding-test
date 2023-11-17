import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import styles from './style';
import {Category} from '../../../services/types';
import {colors} from '../../../constants';

interface SubCategoryCardProps extends TouchableOpacityProps {
  subCategory: Category;
  isSelected: boolean;
}

const SubCategoryCard: React.FC<SubCategoryCardProps> = ({
  subCategory,
  isSelected,
  ...otherProps
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: isSelected ? colors.theme : colors.white,
      }}
      activeOpacity={0.5}
      {...otherProps}>
      <Text
        style={{
          ...styles.name,
          color: isSelected ? colors.white : colors.black_matte,
        }}
        ellipsizeMode="tail"
        numberOfLines={2}>
        {subCategory.categoryName}
      </Text>
    </TouchableOpacity>
  );
};

export default SubCategoryCard;
