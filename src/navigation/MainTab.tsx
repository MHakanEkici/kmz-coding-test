import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import routes from './routes';
import MainScreen from '../screens/MainScreen';
import BasketScreen from '../screens/BasketScreen';
import getResponsiveValue, {colors} from '../constants';

export type MainTabParamList = {
  [routes.MAIN_SCREEN]: undefined;
  [routes.BASKET_SCREEN]: undefined;
};

interface TabBarIconProps {
  iconName: string;
  [key: string]: any;
}

const TabBarIcon: React.FC<TabBarIconProps> = (rest, iconName) => (
  <Icon name={iconName} size={getResponsiveValue(35)} {...rest} />
);

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainTab(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: colors.theme,
        tabBarInactiveTintColor: '#BDBDBD',
      })}>
      <Tab.Screen
        name={routes.MAIN_SCREEN}
        component={MainScreen}
        options={{
          headerShown: true,
          headerTitle: 'Ana Sayfa',
          tabBarIcon: ({...rest}) => TabBarIcon(rest, 'home'),
        }}
      />
      <Tab.Screen
        name={routes.BASKET_SCREEN}
        component={BasketScreen}
        options={{
          tabBarIcon: ({...rest}) => TabBarIcon(rest, 'cart'),
        }}
      />
    </Tab.Navigator>
  );
}
