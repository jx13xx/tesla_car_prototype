import React, {useState} from 'react';
import {View} from 'react-native';
import {ColorLayout, Container} from './Styles';
import {SpecLabelPrefix, SpecLabelSuffix} from '../../molecules/SpecLabel';
import ColorSelector from '../../molecules/ColorSelector/ColorSelector';
import SubText from '../../molecules/SubText/SubText';
import {HorizontalDivider} from '../../../Screens/Exterior/Styles';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const ExteriorSpecContainer = props => {
  const [colors, setColors] = useState({
    activeObject: null,
    objects: {
      id: 1,
      colors: [
        {id: 1, colorName: 'Pearl White', value: '#fff', baseColor: true},
        {id: 2, colorName: 'Solid Black', value: '#474747', baseColor: false},
        {
          id: 3,
          colorName: 'Midnight Silver',
          value: '#45525C',
          baseColor: false,
        },
        {id: 4, colorName: 'Deep Blue', value: '#044BB6', baseColor: false},
        {
          id: 5,
          colorName: 'Red Multi-Coat',
          value: '#D01000',
          baseColor: false,
        },
      ],
    },
  });
  const [includedColor, setIncludedColor] = useState(false);

  function toggleActive(index) {
    setColors({
      ...colors,
      activeObject: colors.objects.colors[index],
    });

    if (colors.objects.colors[index].baseColor === true) {
      setIncludedColor(true);
    } else {
      setIncludedColor(false);
    }
  }

  function toggleActiveStyles(index) {
    return colors.objects.colors[index] === colors.activeObject ? true : false;
  }
  return (
    <Container>
      <SpecLabelPrefix active>Pearl White Multi-Coat</SpecLabelPrefix>
      {includedColor && <SpecLabelSuffix active>Included</SpecLabelSuffix>}
      <View>
        <ColorLayout>
          {colors.objects.colors.map((element, index) => (
            <Pressable onPress={() => toggleActive(index)} key={element.id}>
              <ColorSelector
                color={element.value}
                active={toggleActiveStyles(index)}
              />
            </Pressable>
          ))}
        </ColorLayout>
        <HorizontalDivider />
      </View>
      <View style={{marginTop: 40}}>
        <SubText>20" Performance Wheels</SubText>
        <SubText>Carbon fibre spoiler</SubText>
      </View>
    </Container>
  );
};

export default ExteriorSpecContainer;
