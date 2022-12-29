import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import autoPilotImage from '../../assets/images/autoPilotTwo.png';
import ModalDiv from '../../components/organisms/ModalDiv';
import SelectAutoPilot from './SelectAutoPilot';
const Autopilot = () => {
  return (
    <View style={styles.screen}>
      <View style={{display: 'flex', alignItems: 'center'}}>
        <Image source={autoPilotImage} />
      </View>
      <ModalDiv component={<SelectAutoPilot />} />
    </View>
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

export default Autopilot;
