import styled from 'styled-components/native';
import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';

const CarPriceLabelContainer = styled.TouchableOpacity`
  width: 214px;
  height: 54px;
  padding-left: 20px;

  //top: 607px;

  background: #0c0c0c;
  border-radius: 36px;
`;

const CarPriceLabelPrefixText = styled.Text`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 16px;
  padding-top: 7px;
  //margin-left: 20px;
  /* identical to box height */

  //display: flex;
  align-items: center;

  color: #ffffff;
`;

const CarPriceLabelPrefixTextTwo = styled.Text`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 16px;
  margin-left: 5px;
  margin-top: 3px;
  margin-right: 5px;
  /* identical to box height */

  //display: flex;
  align-items: center;

  color: #ffffff;
`;

export const CarPriceLabel = ({onPress, props}) => {
  return (
    <CarPriceLabelContainer onPress={onPress}>
      <CarPriceLabelPrefixText>Tesla Model X</CarPriceLabelPrefixText>
      <View style={styles.priceLabel}>
        <Text style={styles.text}>{props.currency}</Text>
        <CarPriceLabelPrefixTextTwo style={styles.textTwo}>
          {props.price}
        </CarPriceLabelPrefixTextTwo>
        <Text style={styles.textTwo}>onwards</Text>
      </View>
    </CarPriceLabelContainer>
  );
};

const styles = StyleSheet.create({
  priceLabel: {
    flexDirection: 'row',
    marginLeft: '2%',
    marginTop: '2%',
    display: 'flex',
  },
  text: {
    marginLeft: '2%',
    flex: 0,
    color: 'white',
  },
  textTwo: {
    // flex: 2,
    color: 'white',
  },
});
