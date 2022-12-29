import React, {useState} from 'react';
import CarSpecification from './CarSpecification';
import GrayLabel from '../../components/molecules/GrayLabel';
import {CarPicture} from '../../components/molecules/CarPicture';
import redTesla from '../../assets/images/red.png';
import SpecContainer from '../../components/organisms/SpecContainer/SpecContainer';
import ModalDiv from '../../components/organisms/ModalDiv';
import {
  CarSpecLayout,
  CarSpecPictureLayout,
  SpecificationMainContainer,
  SpecificationScreenContainer,
} from './Styles';

const SpecificationScreen = () => {
  return (
    <SpecificationScreenContainer>
      <SpecificationMainContainer>
        <GrayLabel style={{marginTop: '10%'}}>Select your Car</GrayLabel>
        <CarSpecPictureLayout>
          <CarPicture source={redTesla} />
        </CarSpecPictureLayout>
        <CarSpecLayout>
          <SpecContainer />
        </CarSpecLayout>
      </SpecificationMainContainer>
      <ModalDiv component={<CarSpecification />} />
    </SpecificationScreenContainer>
  );
};

export default SpecificationScreen;
