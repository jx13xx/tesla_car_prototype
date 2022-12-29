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

const SummaryContainer = () => {
  const {setStep} = useContext(StepProviderContext);

  function redirectToHomePage() {
    setStep(0);
    navigate(HOME_SCREEN);
  }
  return (
    <SummaryDivContainer>
      <GrayLabel style={{marginLeft: '25%', paddingBottom: '20%'}}>
        Summary
      </GrayLabel>
      <LargeText>Your Model Y</LargeText>
      <SmallText>AED 267,500</SmallText>
      <Pressable onPress={() => redirectToHomePage()}>
        <PayButton source={applePay}></PayButton>
      </Pressable>
    </SummaryDivContainer>
  );
};

export default SummaryContainer;
