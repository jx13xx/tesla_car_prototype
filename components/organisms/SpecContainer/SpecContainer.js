import React, {useState} from 'react';
import {
  Container,
  SpecDescriptionContainer,
  SpecDescriptionLabel,
  SpecDescText,
  SpecPriceText,
  StyledButton,
} from './Styles';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const SpecContainer = props => {
  const [specification, setSpecification] = useState({
    activeObject: null,
    objects: {
      id: 1,
      specifications: [
        {id: 1, description: 'Performance', price: '235,000', currency: 'AED'},
        {id: 2, description: 'Long Range', price: '235,000', currency: 'AED'},
      ],
    },
  });
  function toggleActive(index) {
    setSpecification({
      ...specification,
      activeObject: specification.objects.specifications[index],
    });
  }

  function toggleActiveStyles(index) {
    return specification.objects.specifications[index] ===
      specification.activeObject
      ? true
      : false;
  }

  return (
    <Container>
      {specification.objects.specifications.map((element, index) => (
        <SpecDescriptionContainer key={element.id}>
          <Pressable onPress={() => toggleActive(index)}>
            <SpecDescText active={toggleActiveStyles(index)}>
              {element.description}
            </SpecDescText>
            <SpecPriceText active={toggleActiveStyles(index)}>
              {element.price}
            </SpecPriceText>
          </Pressable>
        </SpecDescriptionContainer>
      ))}
    </Container>
  );
};

export default SpecContainer;
