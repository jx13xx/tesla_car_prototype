import React from 'react';
import {StyleSheet, Image, SafeAreaView, View, Dimensions} from 'react-native';
import rakBankLogo from '../../../assets/logo/rak_bank_small.png';

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.logo}>
        <Image source={rakBankLogo} resizeMode="contain" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  logo: {
    display: 'flex',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Header;
