import React, {useContext} from 'react';
import GrayLabel from '../../components/molecules/GrayLabel/GrayLabel';
import {CarPicture} from '../../components/molecules/CarPicture/CarPicture';
import ModalDiv from '../../components/organisms/ModalDiv/ModalDiv';
import {
  ExteriorContainer,
  ExteriorScreenContainer,
  ExteriorSpecLayout,
} from './Styles';
import {CarSpecPictureLayout} from '../Car/Styles';
import SelectExterior from './SelectExterior';
import ExteriorSpecContainer from '../../components/organisms/ExteriorContainer/ExteriorSpecContainer';
import {StepProviderContext} from '../../Global/StepContext';
import NavigationTopBar from '../../components/organisms/NavigationTopBar/NavigationTopBar';

const Exterior = () => {
  const {selectedCarImage} = useContext(StepProviderContext);

  return (
    <ExteriorScreenContainer>
      <NavigationTopBar step1 step2 />
      <ExteriorContainer>
        <GrayLabel style={{marginTop: '10%', paddingLeft: '10%'}}>
          Select Color
        </GrayLabel>
        <CarSpecPictureLayout>
          <CarPicture source={{uri: selectedCarImage}} />
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
