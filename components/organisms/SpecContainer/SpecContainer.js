import React, {useContext, useEffect, useState} from 'react';
import {
  Container,
  SpecDescriptionContainer,
  SpecDescText,
  SpecPriceText,
} from './Styles';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {useDispatch, useSelector} from 'react-redux';
import {StepProviderContext} from '../../../Global/StepContext';
import {getCarFeatures} from '../../../Redux/ducks/car';
import {seedFeatureRepose} from '../../../Redux/sagas/requests/seedresponse';
import {numberSeparator} from '../../../utils/NumberSeparator';

const SpecContainer = () => {
  const dispatch = useDispatch();
  let apiFeatures = useSelector(state => state.cars.features);
  let features = apiFeatures !== undefined ? apiFeatures : seedFeatureRepose;
  const {setSpecificationPrice, userSelectedCar} =
    useContext(StepProviderContext);
  const [specification, setSpecification] = useState({
    activeObject: null,
    objects: features,
  });

  useEffect(() => {
    const dispatcher = () => dispatch(getCarFeatures(userSelectedCar));
    dispatcher();
  }, [userSelectedCar]);

  function toggleActive(index, element) {
    setSpecification({
      ...specification,
      activeObject: specification.objects[index],
    });
    setSpecificationPrice(element.price);
  }

  function toggleActiveStyles(index) {
    return specification.objects[index] === specification.activeObject
      ? true
      : false;
  }

  return (
    <Container>
      {features &&
        specification.objects.map((element, index) => (
          <SpecDescriptionContainer key={element.id}>
            <Pressable onPress={() => toggleActive(index, element)}>
              <SpecDescText active={toggleActiveStyles(index)}>
                {element.feature}
              </SpecDescText>
              <SpecPriceText active={toggleActiveStyles(index)}>
                AED {numberSeparator(element.price)}
              </SpecPriceText>
            </Pressable>
          </SpecDescriptionContainer>
        ))}
    </Container>
  );
};

export default SpecContainer;
