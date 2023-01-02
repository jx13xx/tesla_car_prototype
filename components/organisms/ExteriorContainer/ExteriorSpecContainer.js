import React, {useContext, useEffect, useState} from 'react';
import {View} from 'react-native';
import {ColorLayout, Container} from './Styles';
import {
  SpecLabelPrefix,
  SpecLabelSuffix,
} from '../../molecules/SpecLabel/SpecLabel';
import ColorSelector from '../../molecules/ColorSelector/ColorSelector';
import SubText from '../../molecules/SubText/SubText';
import {HorizontalDivider} from '../../../Screens/Exterior/Styles';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {useDispatch, useSelector} from 'react-redux';
import {StepProviderContext} from '../../../Global/StepContext';
import {getCarExterior} from '../../../Redux/ducks/car';
import {seedColorResponse} from '../../../Redux/sagas/requests/seedresponse';

const ExteriorSpecContainer = () => {
  const dispatch = useDispatch();
  let apiColors = useSelector(state => state.cars.exterior);
  let listColors = apiColors ? apiColors : seedColorResponse;
  const {setExteriorPrice, userSelectedCar} = useContext(StepProviderContext);
  const [colorName, setColorName] = useState();

  useEffect(() => {
    const dispatcher = () => dispatch(getCarExterior(userSelectedCar));
    dispatcher();
  }, [userSelectedCar]);

  const [colors, setColors] = useState({
    activeObject: null,
    objects: listColors,
  });
  const [includedColor, setIncludedColor] = useState(false);

  function toggleActive(index, element) {
    setColors({
      ...colors,
      activeObject: colors.objects.colors[index],
    });

    if (colors.objects.colors[index].baseColor === true) {
      setIncludedColor(true);
    } else {
      setIncludedColor(false);
    }
    setColorName(element.colorName);
    setExteriorPrice(Number(element.price));
  }

  function toggleActiveStyles(index) {
    return colors.objects.colors[index] === colors.activeObject ? true : false;
  }
  return (
    <Container>
      <SpecLabelPrefix active>{colorName}</SpecLabelPrefix>
      {includedColor && <SpecLabelSuffix active>Included</SpecLabelSuffix>}
      <View>
        <ColorLayout>
          {colors.objects.colors.map((element, index) => (
            <Pressable
              onPress={() => toggleActive(index, element)}
              key={element.id}>
              <ColorSelector
                color={element.colorValue}
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
