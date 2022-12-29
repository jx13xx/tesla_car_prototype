import React from 'react';
import {Image} from 'react-native';
import ModalDiv from '../../components/organisms/ModalDiv';
import interiorImage from '../../assets/images/interior.png';
import SelectInterior from './SelectInterior';
import {InterContainer} from './Styles';

const Interior = () => {
  return (
    <InterContainer>
      <Image source={interiorImage} />
      <ModalDiv component={<SelectInterior />} />
    </InterContainer>
  );
};

export default Interior;
