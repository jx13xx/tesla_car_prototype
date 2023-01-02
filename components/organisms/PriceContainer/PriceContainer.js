import {StyleSheet, View} from 'react-native';
import Amount from '../../molecules/Amount/Amount';
import {PressableButton} from '../Button/Button';
import React, {useContext, useState} from 'react';
import {
  AUTOPILOT_SCREEN,
  EXTERIOR_SCREEN,
  HOME_SCREEN,
  INTERIOR_SCREEN,
  SUMMARY_SCREEN,
} from '../../../Navigators/NavigationScreenType';
import {StepProviderContext} from '../../../Global/StepContext';
import {navigate} from '../../../Navigators/RootNavigator';
import {numberSeparator} from '../../../utils/NumberSeparator';

const PriceContainer = () => {
  const {
    step,
    setStep,
    currency,
    totalPrice,
    setTotalPrice,
    specificationPrice,
    autoPilotPrice,
    exteriorPrice,
    interiorPrice,
  } = useContext(StepProviderContext);

  const combineSpecs = [
    specificationPrice,
    exteriorPrice,
    interiorPrice,
    autoPilotPrice,
  ];

  const sumWithInitial = combineSpecs.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    totalPrice,
  );

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
      setTotalPrice(sumWithInitial);
      navigate(SUMMARY_SCREEN);
    }
  };

  return (
    <View style={styles.priceContainer}>
      <Amount>
        {' '}
        {currency} {numberSeparator(sumWithInitial)}
      </Amount>
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
