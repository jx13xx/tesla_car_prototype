import React, {useContext} from 'react';
import {LargeText} from '../../molecules/LargeText/LargeText';
import GrayLabel from '../../molecules/GrayLabel/GrayLabel';
import {SmallText} from '../../molecules/SmallText/SmallText';
import {PayButton} from '../../molecules/PayButton/PayButton';
import applePay from '../../../assets/images/applePay.png';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {navigate} from '../../../Navigators/RootNavigator';
import {HOME_SCREEN} from '../../../Navigators/NavigationScreenType';
import {SummaryDivContainer} from './Styles';
import {StepProviderContext} from '../../../Global/StepContext';
import {numberSeparator} from '../../../utils/NumberSeparator';

const SummaryContainer = () => {
  const {
    setStep,
    totalPrice,
    carModel,
    setCarModel,
    setUserSelectedCar,
    setSelectedCarImage,
    setSpecificationPrice,
    setInteriorPrice,
    setExteriorPrice,
  } = useContext(StepProviderContext);

  function redirectToHomePage() {
    setStep(0);
    setCarModel(null);
    setUserSelectedCar(null);
    setSelectedCarImage(null);
    setSpecificationPrice(0);
    setInteriorPrice(0);
    setExteriorPrice(0);
    navigate(HOME_SCREEN);
  }
  return (
    <SummaryDivContainer>
      <GrayLabel style={{marginLeft: '25%', paddingBottom: '20%'}}>
        Summary
      </GrayLabel>
      <LargeText>Your {carModel}</LargeText>
      <SmallText>AED {numberSeparator(totalPrice)}</SmallText>
      <Pressable onPress={() => redirectToHomePage()}>
        <PayButton source={applePay}></PayButton>
      </Pressable>
    </SummaryDivContainer>
  );
};

export default SummaryContainer;
