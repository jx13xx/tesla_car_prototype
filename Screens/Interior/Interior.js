import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import GrayLabel from '../../components/molecules/GrayLabel';
import {CarPicture} from '../../components/molecules/CarPicture';
import redTesla from '../../assets/images/red.png';
import {
  SpecLabelPrefix,
  SpecLabelSuffix,
} from '../../components/molecules/SpecLabel';
import ModalDiv from '../../components/organisms/ModalDiv';
import PriceContainer from '../../components/organisms/PriceContainer';
import interiorImage from '../../assets/images/interior.png';
import SelectInterior from './SelectInterior';
const Interior = () => {
  return (
    <View style={styles.screen}>
      <Image source={interiorImage} />
      <ModalDiv component={<SelectInterior />} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#F2F5F8',
    width: '100%',
  },
  container: {
    backgroundColor: '#F2F5F8',
    height: '100%',
    display: 'flex',
    marginLeft: '5%',
    marginRight: '5%',
  },
  centerSpec: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerSpecTwo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '10%',
  },
  priceSpec: {
    display: 'flex',
    flex: 1,
  },
});

export default Interior;
