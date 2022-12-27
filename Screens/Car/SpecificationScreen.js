import React from 'react';
import {Text, View} from 'react-native';
import BottomModal from '../../components/BottomModal';
import CarSpecification from './CarSpecification';

const SpecificationScreen = () => {
  return (
    <View>
      <Text>some text here</Text>
      <BottomModal component={<CarSpecification />} />
    </View>
  );
};

export default SpecificationScreen;
