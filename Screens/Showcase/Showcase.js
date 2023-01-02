import React, {useContext, useEffect} from 'react';
import GreyLabel from '../../components/molecules/GrayLabel/GrayLabel';
import {View, StyleSheet, ScrollView, SafeAreaView, Text} from 'react-native';
import CarPriceCard from '../../components/organisms/CarPriceCard/CarPriceCard';
import {useDispatch, useSelector} from 'react-redux';
import car, {getCarFeatures, getCars} from '../../Redux/ducks/car';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {StepProviderContext} from '../../Global/StepContext';
import {navigate} from '../../Navigators/RootNavigator';
import profilePic from '../../assets/images/profile.png';
import {CARSPECIFICATION_SCREEN} from '../../Navigators/NavigationScreenType';
import {
  GreetingText,
  GreetingView,
  HeaderGreeting,
  ProfilePic,
  SafeAreaViewComponent,
  ScrollableContainer,
  ShowcaseContainer,
} from './Styles';
import {Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;

const Showcase = () => {
  const dispatch = useDispatch();
  const cars = useSelector(state => state.cars.cars);
  const {
    step,
    setStep,
    setUserSelectedCar,
    setTotalPrice,
    setSelectedCarImage,
    setCarModel,
  } = useContext(StepProviderContext);

  const NextStep = () => {
    if (step === 0) {
      setStep(step + 1);
      navigate(CARSPECIFICATION_SCREEN);
    }
  };

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  function selectedCar(index, element) {
    setUserSelectedCar(element.id);
    setTotalPrice(element.cost.price);
    setSelectedCarImage(element.meta.imageUrl);
    setCarModel(element.modelName);
    NextStep();
  }

  return (
    <SafeAreaViewComponent>
      <HeaderGreeting>
        <ProfilePic source={profilePic} />
        <GreetingView>
          <GreetingText>Hello Sharaf</GreetingText>
        </GreetingView>
      </HeaderGreeting>
      {cars && (
        <ShowcaseContainer>
          <ScrollableContainer style={{maxHeight: windowHeight * 15.04}}>
            <GreyLabel style={{marginBottom: 5}}>Explore Tesla Cars</GreyLabel>
            <ScrollView>
              {cars &&
                cars.map((element, index) => (
                  <Pressable
                    onPress={() => selectedCar(index, element)}
                    key={element.id}>
                    <CarPriceCard data={element} />
                  </Pressable>
                ))}
            </ScrollView>
          </ScrollableContainer>
        </ShowcaseContainer>
      )}
    </SafeAreaViewComponent>
  );
};

export default Showcase;
