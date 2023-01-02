import React, {useContext, useEffect, useState} from 'react';
import CarSpecification from './CarSpecification';
import GrayLabel from '../../components/molecules/GrayLabel/GrayLabel';
import {CarPicture} from '../../components/molecules/CarPicture/CarPicture';
import SpecContainer from '../../components/organisms/SpecContainer/SpecContainer';
import ModalDiv from '../../components/organisms/ModalDiv/ModalDiv';
import {
  CarSpecLayout,
  SpecificationMainContainer,
  SpecificationScreenContainer,
} from './Styles';
import {StepProviderContext} from '../../Global/StepContext';
import {View} from 'react-native';
import NavigationTopBar from '../../components/organisms/NavigationTopBar/NavigationTopBar';

const SpecificationScreen = () => {
  const {selectedCarImage} = useContext(StepProviderContext);

  return (
    <SpecificationScreenContainer>
      <NavigationTopBar step1 />
      <SpecificationMainContainer>
        <GrayLabel style={{marginTop: '10%'}}>Select your Car</GrayLabel>
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <CarPicture source={{uri: selectedCarImage}} />
          <CarSpecLayout>
            <SpecContainer />
          </CarSpecLayout>
        </View>
      </SpecificationMainContainer>
      <ModalDiv component={<CarSpecification />} />
    </SpecificationScreenContainer>
  );
};

export default SpecificationScreen;
