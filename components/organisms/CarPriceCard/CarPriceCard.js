import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {View, Image, StyleSheet} from 'react-native';
import {CarPriceLabel} from '../../molecules/CarPriceLabel/CarPriceLabel';
import {
  CARSPECIFICATION_SCREEN,
  INTERIOR_SCREEN,
} from '../../../Navigators/NavigationScreenType';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {incrementStepCounter} from '../../../Redux/action';
import {StepProviderContext} from '../../../Global/StepContext';

const CarPriceContainer = styled.TouchableOpacity`
  width: 100%;
  height: 230px;

  background: ${props => (props.bannerColor ? props.bannerColor : '#A4B0BC')};
  border-radius: 17px;
`;

const CarImage = styled.Image`
  margin: 0;
  position: absolute;
  top: 15%;
  right: 15%;
`;

export const CarPriceCard = (props, image, bannerColor) => {
  const {step, setStep} = useContext(StepProviderContext);
  const navigation = useNavigation();
  var navigateNext = '';

  const NextStep = () => {
    if (step === 0) {
      navigateNext = CARSPECIFICATION_SCREEN;
      setStep(step + 1);
      navigation.navigate(navigateNext);
    }
  };

  return (
    <CarPriceContainer
      bannerColor={bannerColor}
      style={styles.container}
      onPress={NextStep}>
      <CarImage source={image} />
      <View style={styles.price}>
        <CarPriceLabel props={{currency: 'AED', price: '213,000'}} />
      </View>
    </CarPriceContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '3%',
    marginBottom: '2%',
  },
  price: {
    position: 'absolute',
    bottom: '2%',
    right: '2%',
    paddingBottom: '2%',
  },
});

export default CarPriceCard;
