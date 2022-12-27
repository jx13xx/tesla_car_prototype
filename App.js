import React from 'react';
import type {Node} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import response from './data/response.json';

import BottomModal from './components/BottomModal';
import Amount from './components/molecules/Amount';
import CarSpecification from './Screens/Car/CarSpecification';
import SpecContainer from './components/organisms/SpecContainer';
import Header from './components/organisms/Header';
import {CarPriceLabel} from './components/molecules/CarPriceLabel';
import CarPriceContainer, {
  CarPriceContainerComponent,
} from './components/organisms/CarPriceContainer';
import GreyLabel from './components/molecules/GrayLabel';

const {width, height} = Dimensions.get('screen');

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: !isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: !isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: 'white',
  };

  return (
    // <View style={{width, height}}>
    //   <View style={styles.container}>
    //     <Text>Hello and Welcome!</Text>
    //   </View>
    //   <BottomModal />
    // </View>

    <SafeAreaView style={{backgroundColor: 'white'}}>
      <Header />
      <ScrollView style={backgroundStyle}></ScrollView>
      <View style={{marginLeft: 16, marginRight: 16}}>
        <GreyLabel>Explore Tesla Cars</GreyLabel>
        <CarPriceContainerComponent />
      </View>
      {/*<View style={{height: 'auto', backgroundColor: '#F2F5F8'}}>*/}
      {/*  <SpecContainer />*/}
      {/*</View>*/}

      <BottomModal component={<CarSpecification />} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
