import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomModal from '../../components/BottomModal';
import PriceContainer from '../../components/organisms/PriceContainer';
import GrayLabel from '../../components/molecules/GrayLabel';
import {CarPicture} from '../../components/molecules/CarPicture';
import whiteTesla from '../../assets/images/white.png';
import {
  SpecLabelPrefix,
  SpecLabelSuffix,
} from '../../components/molecules/SpecLabel';
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
        <GrayLabel style={{marginTop: '10%'}}>Select Color</GrayLabel>
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

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#F2F5F8',
    width: '100%',
  },
  container: {
    backgroundColor: '#F2F5F8',
    height: '100%',
    display: 'flex',
    marginLeft: '5%',
    marginRight: '5%',
  },
  centerSpec: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerSpecTwo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '10%',
  },
  priceSpec: {
    display: 'flex',
    flex: 1,
  },
});

export default Exterior;
