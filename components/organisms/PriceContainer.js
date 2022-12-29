import {StyleSheet, View} from 'react-native';
import Amount from '../molecules/Amount';
import {useNavigation} from '@react-navigation/native';
import {PressableButton} from '../Button';
import React, {useContext, useState} from 'react';
import {useSelector} from 'react-redux';
import {
  AUTOPILOT_SCREEN,
  EXTERIOR_SCREEN,
  HOME_SCREEN,
  INTERIOR_SCREEN,
  SUMMARY_SCREEN,
} from '../../Navigators/NavigationScreenType';
import {StepProviderContext} from '../../Global/StepContext';
import {navigate} from '../../Navigators/RootNavigator';

const PriceContainer = ({navigateNextTo}) => {
  const {step, setStep} = useContext(StepProviderContext);

  const NextStep = () => {
    if (step === 1) {
      setStep(step + 1);
      navigate(EXTERIOR_SCREEN);
    }
    if (step === 2) {
      setStep(step + 1);
      navigate(INTERIOR_SCREEN);
    }
    if (step === 3) {
      setStep(step + 1);
      navigate(AUTOPILOT_SCREEN);
    }
    if (step === 4) {
      setStep(step + 1);
      navigate(SUMMARY_SCREEN);
    }
  };

  return (
    <View style={styles.priceContainer}>
      <Amount>AED 235,000</Amount>
      <PressableButton onPress={NextStep} title="Next" bgColor="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '12%',
    paddingBottom: '12%',
  },
});

export default PriceContainer;
