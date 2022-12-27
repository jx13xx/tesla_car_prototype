import styled from 'styled-components/native';
import {View, Image, StyleSheet} from 'react-native';
import {CarPriceLabel} from '../molecules/CarPriceLabel';

const CarPriceContainer = styled.TouchableOpacity`
  width: 100%;
  height: 230px;

  background: #af4a4a;
  border-radius: 17px;
`;

const CarImage = styled.Image`
  //position: absolute;
  //padding-left: 10%;
  //left: 50%;
  //right: 50%;

  margin: 0;
  position: absolute;
  top: 15%;
  right: 15%;
`;

export const CarPriceContainerComponent = ({onPress, props}) => (
  <CarPriceContainer>
    <CarImage source={require('../../assets/images/red.png')} />
    <View style={styles.price}>
      <CarPriceLabel props={{currency: 'AED', price: '213,000'}} />
    </View>

    {/*<Image source={require('../../assets/images/red.png')} />*/}
  </CarPriceContainer>
);

const styles = StyleSheet.create({
  price: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default CarPriceContainer;
