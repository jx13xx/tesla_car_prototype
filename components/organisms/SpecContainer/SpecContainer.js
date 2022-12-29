import React, {useState} from 'react';
import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SpecLabelPrefix, SpecLabelSuffix} from '../molecules/SpecLabel';

const SpecContainer = props => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        {/*TODO: May need to make this touchable to update the prices*/}
        <SpecLabelPrefix active>Performance</SpecLabelPrefix>
        <SpecLabelSuffix active>AED 235,000</SpecLabelSuffix>
      </View>
      <View style={styles.text}>
        <SpecLabelPrefix>Long Range</SpecLabelPrefix>
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

export default SpecContainer;
