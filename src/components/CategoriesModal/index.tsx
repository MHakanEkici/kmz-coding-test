import React from 'react';
import {
  FlatListProps,
  FlatList,
  TouchableOpacity,
  TouchableOpacityProps,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Text} from 'react-native';
import styles from './style';
import ReactNativeModal from 'react-native-modal';
import {Category} from '../../services/types';
import getResponsiveValue, {colors} from '../../constants';

interface RenderCategoriesProps extends TouchableOpacityProps {
  item: Category;
  index: number;
}

interface CategoriesModalProps {
  data?: Category[] | null | undefined;
  isVisible: boolean;
  onSelect: Function;
  closeModal: Function;
}

const seperator = <View style={styles.seperator} />;

const CategoriesModal: React.FC<CategoriesModalProps> = ({
  data,
  isVisible,
  onSelect,
  closeModal,
}) => {
  const renderCategories = ({item, index}: RenderCategoriesProps) => (
    <TouchableOpacity onPress={() => onSelect(item)} style={styles.container}>
      <Text style={styles.name}>{item.categoryName}</Text>
      <Icon
        name="chevron-right"
        size={getResponsiveValue(25)}
        color={colors.theme}
      />
    </TouchableOpacity>
  );

  return (
    <ReactNativeModal
      isVisible={isVisible}
      onBackButtonPress={() => closeModal()}
      onBackdropPress={() => closeModal()}>
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={renderCategories}
          contentContainerStyle={styles.category_list_content}
          style={styles.category_list_container}
          bounces={false}
          ItemSeparatorComponent={seperator}
        />
      </SafeAreaView>
    </ReactNativeModal>
  );
};

export default CategoriesModal;
