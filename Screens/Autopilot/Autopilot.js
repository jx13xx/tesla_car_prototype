import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import autoPilotImage from '../../assets/images/autoPilotTwo.png';
import ModalDiv from '../../components/organisms/ModalDiv/ModalDiv';
import SelectAutoPilot from './SelectAutoPilot';
import {AutoPilotImage, AutoPilotScreenContainer} from './Styles';

const Autopilot = () => {
  return (
    <AutoPilotScreenContainer>
      <AutoPilotImage>
        <Image source={autoPilotImage} />
      </AutoPilotImage>
      <ModalDiv component={<SelectAutoPilot />} />
    </AutoPilotScreenContainer>
  );
};

export default Autopilot;
