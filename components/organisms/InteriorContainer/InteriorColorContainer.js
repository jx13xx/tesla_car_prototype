import {
  SpecLabelPrefix,
  SpecLabelSuffix,
} from '../../molecules/SpecLabel/SpecLabel';
import {ColorLayout, InteriorSpecContainer, InteriorSpecText} from './Styles';
import {useContext, useEffect, useState} from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import ColorSelector from '../../molecules/ColorSelector/ColorSelector';
import {useDispatch, useSelector} from 'react-redux';
import {StepProviderContext} from '../../../Global/StepContext';
import {getCarInterior} from '../../../Redux/ducks/car';
import {
  seedColorResponse,
  seedInteriorPriceResponse,
} from '../../../Redux/sagas/requests/seedresponse';
import {numberSeparator} from '../../../utils/NumberSeparator';

const InteriorColorContainer = props => {
  const dispatch = useDispatch();
  let apiInteriors = useSelector(state => state.cars.interior);
  let colors =
    apiInteriors !== undefined ? apiInteriors : seedInteriorPriceResponse;
  const {setInteriorPrice, userSelectedCar} = useContext(StepProviderContext);

  const [interior, setInterior] = useState({
    activeObject: null,
    objects: colors,
  });

  useEffect(() => {
    const dispatcher = () => dispatch(getCarInterior(userSelectedCar));
    dispatcher();
  }, [userSelectedCar]);

  const [includedInterior, setIncludedInterior] = useState(false);

  function toggleActive(index, element) {
    setInterior({
      ...interior,
      activeObject: interior.objects.interior_features[index],
    });

    if (interior.objects.interior_features[index].included === true) {
      setIncludedInterior(true);
    } else {
      setIncludedInterior(false);
    }
    setInteriorPrice(element.price);
  }

  function showPrice(element) {
    if (element.option_included) {
      return 'Included';
    } else {
      return ` ${'AED'} ${numberSeparator(element.price)}`;
    }
  }

  function toggleActiveStyles(index) {
    return interior.objects.interior_features[index] === interior.activeObject
      ? true
      : false;
  }
  return (
    <InteriorSpecContainer>
      {interior.objects.interior_features.map((element, index) => (
        <Pressable
          onPress={() => toggleActive(index, element)}
          key={element.id}>
          <InteriorSpecText key={element.id}>
            <SpecLabelPrefix active={toggleActiveStyles(index)}>
              {element.description}
            </SpecLabelPrefix>
            <SpecLabelSuffix
              active={!includedInterior && toggleActiveStyles(index)}>
              {showPrice(element)}
            </SpecLabelSuffix>
            <ColorLayout key={element.id}>
              <ColorSelector
                active={toggleActiveStyles(index)}
                color={element.color}
              />
            </ColorLayout>
          </InteriorSpecText>
        </Pressable>
      ))}
    </InteriorSpecContainer>
  );
};

export default InteriorColorContainer;
