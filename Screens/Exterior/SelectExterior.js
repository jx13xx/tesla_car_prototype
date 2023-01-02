import React from 'react';
import {StyleSheet, View} from 'react-native';
import PriceContainer from '../../components/organisms/PriceContainer/PriceContainer';

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
    marginBottom: '10%',
  },
});

export default SelectExterior;
