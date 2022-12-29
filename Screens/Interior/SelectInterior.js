import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PriceContainer from '../../components/organisms/PriceContainer';
import GrayLabel from '../../components/molecules/GrayLabel';
import InteriorColorContainer from '../../components/organisms/InteriorColorContainer';

const SelectInterior = () => {
  return (
    <View style={styles.container}>
      {/*<GrayLabel>Select Interior</GrayLabel>*/}
      <InteriorColorContainer />
      {/*<InteriorColorContainer />*/}
      <View>
        <PriceContainer />
      </View>
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

export default SelectInterior;
