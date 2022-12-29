import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import response from './data/response.json';

import Header from './components/organisms/Header/Header';
import MyStack from './Navigators/HomeNavigator';
import {store} from './Redux/store';
import {StepProvider} from './Global/StepContext';
import {navigationRef} from './Navigators/RootNavigator';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <StepProvider>
        <NavigationContainer ref={navigationRef}>
          <Header />
          <MyStack />
        </NavigationContainer>
      </StepProvider>
    </Provider>
  );
};

export default App;
