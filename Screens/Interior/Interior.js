import React from 'react';
import {Image} from 'react-native';
import ModalDiv from '../../components/organisms/ModalDiv/ModalDiv';
import interiorImage from '../../assets/images/interior.png';
import SelectInterior from './SelectInterior';
import {InterContainer} from './Styles';
import NavigationTopBar from '../../components/organisms/NavigationTopBar/NavigationTopBar';

const Interior = () => {
  return (
    <InterContainer>
      <NavigationTopBar step1 step2 step3 />
      <Image source={interiorImage} />
      <ModalDiv component={<SelectInterior />} />
    </InterContainer>
  );
};

export default Interior;
