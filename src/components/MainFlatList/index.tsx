import React from 'react';
import {FlatListProps, FlatList} from 'react-native';
import styles from './style';

const MainFlatList: React.FC<FlatListProps> = ({...otherProps}) => {
  return (
    <FlatList
      keyExtractor={item => item.id.toString()}
      style={styles.list_container}
      columnWrapperStyle={styles.list}
      numColumns={3}
      bounces={false}
      {...otherProps}
    />
  );
};

export default MainFlatList;
