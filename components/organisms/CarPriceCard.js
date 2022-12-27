import React from 'react';
import styled from 'styled-components/native';
import {View, Image, StyleSheet} from 'react-native';
import {CarPriceLabel} from '../molecules/CarPriceLabel';

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

export const CarPriceCard = (props, image, bannerColor) => (
  <CarPriceContainer
    bannerColor={bannerColor}
    style={styles.container}
    onPress={() => props.navigation.navigate('Car Specification')}>
    <CarImage source={image} />
    <View style={styles.price}>
      <CarPriceLabel props={{currency: 'AED', price: '213,000'}} />
    </View>
  </CarPriceContainer>
);

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
