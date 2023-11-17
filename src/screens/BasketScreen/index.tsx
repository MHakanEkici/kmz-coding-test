import {SafeAreaView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useGetBasketQuery} from '../../services/BasketService';
import {RootState} from '../../redux';
import {FlatList} from 'react-native';
import styles from './style';
import BasketCard from '../../components/Cards/BasketCard';
import {Product} from '../../services/types';

//TODO Zaman
export default function BasketScreen(): JSX.Element {
  const userData = useSelector((state: RootState) => state.auth.userData);

  const {data: basket} = useGetBasketQuery(userData.data.userId);

  const renderBasketProducts = ({item, index}: RenderBasketProps) => (
    <BasketCard key={item.id.toString()} basketItem={item} />
  );

  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={basket.data?.detail}
        renderItem={renderBasketProducts}
        style={styles.basket_list}
        contentContainerStyle={styles.basket_list_content}
      />
    </SafeAreaView>
  );
}

interface RenderBasketProps {
  item: Product;
  index: number;
}
