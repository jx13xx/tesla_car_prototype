import {StyleSheet, View} from 'react-native';
import {SpecLabelPrefix, SpecLabelSuffix} from '../molecules/SpecLabel';
import React from 'react';

const AutoPilotContainer = props => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        {/*TODO: May need to make this touchable to update the prices*/}
        <SpecLabelPrefix active>Full Self-Driving</SpecLabelPrefix>
        <SpecLabelSuffix active>AED 28,500</SpecLabelSuffix>
      </View>
      <View style={styles.text}>
        <SpecLabelPrefix>Autopilot</SpecLabelPrefix>
        <SpecLabelSuffix>AED 235,000</SpecLabelSuffix>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default AutoPilotContainer;
