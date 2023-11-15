import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from './routes';
import MainTab from './MainTab';
import LoginScreen from '../screens/LoginScreen';

export type NavigationStackParamList = {
  [routes.MAIN_TAB]: undefined;
  [routes.LOGIN_SCREEN]: undefined;
};

export const Stack = createNativeStackNavigator<NavigationStackParamList>();

function NavigationContainter(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        component={MainTab}
        name={routes.MAIN_TAB}
      />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        component={LoginScreen}
        name={routes.LOGIN_SCREEN}
      />
    </Stack.Navigator>
  );
}

export default NavigationContainter;
