import React from 'react';
import GrayLabel from '../../components/molecules/GrayLabel';
import {CarPicture} from '../../components/molecules/CarPicture';
import whiteTesla from '../../assets/images/white.png';
import ModalDiv from '../../components/organisms/ModalDiv';
import {
  ExteriorContainer,
  ExteriorScreenContainer,
  ExteriorSpecLayout,
} from './Styles';
import {CarSpecPictureLayout} from '../Car/Styles';
import SelectExterior from './SelectExterior';
import ExteriorSpecContainer from '../../components/organisms/ExteriorContainer/ExteriorSpecContainer';

const Exterior = () => {
  return (
    <ExteriorScreenContainer>
      <ExteriorContainer>
        <GrayLabel style={{marginTop: '10%', marginLeft: '5%'}}>
          Select Color
        </GrayLabel>
        <CarSpecPictureLayout>
          <CarPicture source={whiteTesla} />
        </CarSpecPictureLayout>
        <ExteriorSpecLayout>
          <ExteriorSpecContainer />
        </ExteriorSpecLayout>
      </ExteriorContainer>
      <ModalDiv component={<SelectExterior />} />
    </ExteriorScreenContainer>
  );
};

export default Exterior;
