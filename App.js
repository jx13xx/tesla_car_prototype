import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import Header from './components/organisms/Header/Header';
import MyStack from './Navigators/HomeNavigator';
import {StepProvider} from './Global/StepContext';
import {navigationRef} from './Navigators/RootNavigator';
import store from './Redux/configureStore';

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
