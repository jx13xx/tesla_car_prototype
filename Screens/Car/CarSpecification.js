import React, {useState} from 'react';
import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';
import {PrefixText, SuffixText} from '../../components/organisms/Text';
import Description from '../../components/Description';
import Amount from '../../components/molecules/Amount';
import {PressableButton} from '../../components/Button';
import PriceContainer from '../../components/organisms/PriceContainer';

const CarSpecification = props => {
  return (
    <View style={styles.innerContent}>
      <View style={styles.topSpecsContainer}>
        <View style={styles.topSpecTile}>
          <PrefixText>3.5s</PrefixText>
          <SuffixText>0-60mph</SuffixText>
        </View>
        <View style={styles.verticleLine}></View>
        <View style={styles.topSpecTile}>
          <PrefixText>150mph</PrefixText>
          <SuffixText>Top Speed</SuffixText>
        </View>
      </View>
      <Description>
        Tesla All-Wheel Drive has two independent motors. Unlike traditional
        all-wheel drive systems, these two motors digitally control torque to
        the front and rear wheels—for far better handling and traction control.{' '}
      </Description>
      <PriceContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  innerContent: {
    marginLeft: 10,
    marginRight: 10,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  topSpecsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 1,
    rowGap: 10,
    marginBottom: 10,
  },
  verticleLine: {
    height: '75%',
    marginLeft: '2%',
    marginRight: '2%',
    width: 1,
    backgroundColor: '#000',
  },
  topSpecTile: {
    marginLeft: 30,
    marginRight: 30,
  },
});

export default CarSpecification;
