import React, {useContext} from 'react';
import GreyLabel from '../../components/molecules/GrayLabel/GrayLabel';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import CarPriceCard from '../../components/organisms/CarPriceCard/CarPriceCard';
import redTesla from '../../assets/images/red.png';
import blueTesla from '../../assets/images/blue.png';
import whiteTesla from '../../assets/images/white.png';
import {StepProviderContext} from '../../Global/StepContext';

const data = [
  {
    id: 1,
    make: 'Tesla',
    model: 'model 3',
    features: {
      performance: '235000',
      range: '215000',
    },
    color_pricing: {
      pearl_white: 1,
      solid_black: 4500,
      midnight_silver: 6000,
      deep_blue: 6000,
      red_multi_coat: 7500,
    },
    interior_pricing: {
      all_black: 1,
      black_white: 4500,
    },
    auto_pilot: {
      auto_pilot: '14000',
      self_driving: '28000',
    },
    image:
      'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PPMR,$W41B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&version=v0121-078c13b0d202212151058',
  },
  {
    id: 2,
    make: 'Tesla',
    model: 'model y',
    features: {
      performance: '235000',
      range: '215000',
    },
    color_pricing: {
      pearl_white: 1,
      solid_black: 4500,
      midnight_silver: 6000,
      deep_blue: 6000,
      red_multi_coat: 7500,
    },
    interior_pricing: {
      all_black: 1,
      black_white: 4500,
    },
    auto_pilot: {
      auto_pilot: '14000',
      self_driving: '28000',
    },
    image:
      'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PPMR,$W41B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&version=v0121-078c13b0d202212151058',
  },
  {
    id: 3,
    make: 'Tesla',
    model: 'model s',
    features: {
      performance: '235000',
      range: '215000',
    },
    color_pricing: {
      pearl_white: 1,
      solid_black: 4500,
      midnight_silver: 6000,
      deep_blue: 6000,
      red_multi_coat: 7500,
    },
    interior_pricing: {
      all_black: 1,
      black_white: 4500,
    },
    auto_pilot: {
      auto_pilot: '14000',
      self_driving: '28000',
    },
    image:
      'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PPMR,$W41B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&version=v0121-078c13b0d202212151058',
  },
  {
    id: 4,
    make: 'Tesla',
    model: 'model x',
    features: {
      performance: '235000',
      range: '215000',
    },
    color_pricing: {
      pearl_white: 1,
      solid_black: 4500,
      midnight_silver: 6000,
      deep_blue: 6000,
      red_multi_coat: 7500,
    },
    interior_pricing: {
      all_black: 1,
      black_white: 4500,
    },
    auto_pilot: {
      auto_pilot: '14000',
      self_driving: '28000',
    },
    image:
      'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PPMR,$W41B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&version=v0121-078c13b0d202212151058',
  },
  {
    id: 5,
    make: 'Tesla',
    model: 'model z',
    features: {
      performance: '235000',
      range: '215000',
    },
    color_pricing: {
      pearl_white: 1,
      solid_black: 4500,
      midnight_silver: 6000,
      deep_blue: 6000,
      red_multi_coat: 7500,
    },
    interior_pricing: {
      all_black: 1,
      black_white: 4500,
    },
    auto_pilot: {
      auto_pilot: '14000',
      self_driving: '28000',
    },
    image:
      'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PPMR,$W41B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&version=v0121-078c13b0d202212151058',
  },
];

const Showcase = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: '#F2F5F8'}}>
        <ScrollView style={styles.container}>
          <GreyLabel style={{marginBottom: 5}}>Explore Tesla Cars</GreyLabel>
          <ScrollView>
            {data.map(car => {
              return (
                <CarPriceCard
                  navigation={props.navigation}
                  key={car.id}
                  image={redTesla}
                  bannerColor="#AF4A4A"
                />
              );
            })}
          </ScrollView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Showcase;
