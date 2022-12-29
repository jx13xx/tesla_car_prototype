import React from 'react';
import {StyleSheet, View} from 'react-native';
import PriceContainer from '../../components/organisms/PriceContainer';

const SelectExterior = () => {
  return (
    <View style={styles.container}>
      <PriceContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginLeft: '5%',
    marginRight: '5%',
  },
});

export default SelectExterior;
