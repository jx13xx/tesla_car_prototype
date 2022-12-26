import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';
import Amount from '../molecules/Amount';
import {PressableButton} from '../Button';
import React from 'react';

const PriceContainer = props => {
  return (
    <View style={styles.priceContainer}>
      <Amount>AED 235,000</Amount>
      <PressableButton onPress={() => true} title="Next" bgColor="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default PriceContainer;
