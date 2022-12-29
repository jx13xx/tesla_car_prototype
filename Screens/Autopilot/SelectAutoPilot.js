import React from 'react';
import {StyleSheet, View} from 'react-native';
import GrayLabel from '../../components/molecules/GrayLabel';
import PriceContainer from '../../components/organisms/PriceContainer';
import AutoPilotContainer from '../../components/organisms/AutoPilotContainer';

const SelectAutoPilot = () => {
  return (
    <View>
      <GrayLabel>Autopilot</GrayLabel>
      <AutoPilotContainer />
      <View>
        <PriceContainer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginLeft: '5%',
    marginRight: '5%',
  },
});

export default SelectAutoPilot;
