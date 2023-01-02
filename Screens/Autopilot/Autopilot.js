import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import autoPilotImage from '../../assets/images/autoPilotTwo.png';
import ModalDiv from '../../components/organisms/ModalDiv/ModalDiv';
import SelectAutoPilot from './SelectAutoPilot';
import {AutoPilotImage, AutoPilotScreenContainer} from './Styles';
import NavigationTopBar from '../../components/organisms/NavigationTopBar/NavigationTopBar';

const Autopilot = () => {
  return (
    <AutoPilotScreenContainer>
      <NavigationTopBar step1 step2 step3 step4 />
      <AutoPilotImage>
        <Image source={autoPilotImage} />
      </AutoPilotImage>
      <ModalDiv component={<SelectAutoPilot />} />
    </AutoPilotScreenContainer>
  );
};

export default Autopilot;
