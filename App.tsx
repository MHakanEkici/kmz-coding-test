import React from 'react';
import NavigationContainter from './src/navigation/NavigationContainer';
import {Provider} from 'react-redux';
import {store} from './src/redux';

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainter />
    </Provider>
  );
}
