import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from './routes';
import MainTab from './MainTab';
import LoginScreen from '../screens/LoginScreen';
import {useSelector} from 'react-redux';
import {RootState} from '../redux';

export type NavigationStackParamList = {
  [routes.MAIN_TAB]: undefined;
  [routes.LOGIN_SCREEN]: undefined;
};

export const Stack = createNativeStackNavigator<NavigationStackParamList>();

function NavigationContainter(): JSX.Element {
  const userData = useSelector((state: RootState) => state.auth.userData);

  useEffect(() => {
    console.log('navigation:');
    console.log(userData);
  }, [userData]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userData ? (
          <Stack.Screen
            options={{
              headerShown: true,
            }}
            component={MainTab}
            name={routes.MAIN_TAB}
          />
        ) : (
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            component={LoginScreen}
            name={routes.LOGIN_SCREEN}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationContainter;
