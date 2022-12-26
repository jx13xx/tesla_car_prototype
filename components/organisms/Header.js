import React from 'react';
import {StyleSheet, Image, SafeAreaView, View, Dimensions} from 'react-native';
import rakBankLogo from '../../assets/logo/rakbank.svg';

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Image source={rakBankLogo} resizeMode="contain" style={{height: 10}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 210,
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
export default Header;
