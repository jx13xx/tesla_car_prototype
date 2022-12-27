import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import response from './data/response.json';

import Header from './components/organisms/Header';
import MyStack from './Navigators/HomeNavigator';

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Header />
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
