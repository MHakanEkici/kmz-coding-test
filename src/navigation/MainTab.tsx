import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import routes from './routes';
import MainScreen from '../screens/MainScreen';
import BasketScreen from '../screens/BasketScreen';

export type MainTabParamList = {
  [routes.MAIN_SCREEN]: undefined;
  [routes.BASKET_SCREEN]: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainTab(): JSX.Element {
  //   const TabBarIcon = (rest, iconName) => (
  //     <Icon name={iconName} size={width * 0.06} {...rest} />
  //   );

  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: '#BDBDBD',
      })}>
      <Tab.Screen
        name={routes.MAIN_SCREEN}
        component={MainScreen}
        options={
          {
            //   tabBarIcon: ({size, ...rest}) => TabBarIcon(rest, 'leaf'),
          }
        }
      />
      <Tab.Screen
        name={routes.BASKET_SCREEN}
        component={BasketScreen}
        options={
          {
            //   tabBarIcon: ({size, ...rest}) => TabBarIcon(rest, 'account'),
          }
        }
      />
    </Tab.Navigator>
  );
}
