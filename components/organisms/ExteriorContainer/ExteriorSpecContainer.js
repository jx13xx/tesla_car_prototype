import React from 'react';
import {Text, View} from 'react-native';
import {ColorLayout, Container} from './Styles';
import {SpecLabelPrefix, SpecLabelSuffix} from '../../molecules/SpecLabel';
import ColorSelector from '../../molecules/ColorSelector/ColorSelector';
import SubText from '../../molecules/SubText/SubText';
import {HorizontalDivider} from '../../../Screens/Exterior/Styles';

const ExteriorSpecContainer = props => {
  return (
    <Container>
      <SpecLabelPrefix active>Pearl White Multi-Coat</SpecLabelPrefix>
      <SpecLabelSuffix active>Included</SpecLabelSuffix>
      <View>
        <ColorLayout>
          <ColorSelector color={'#474747'} />
          <ColorSelector color={'#45525C'} />
          <ColorSelector active color={'#044BB6'} />
          <ColorSelector active color={'#fff'} />
          <ColorSelector active color={'#D01000'} />
        </ColorLayout>
        <HorizontalDivider />
        <SubText>20" Performance Wheels</SubText>
        <SubText>Carbon fibre spoiler</SubText>
      </View>
    </Container>
  );
};

export default ExteriorSpecContainer;
