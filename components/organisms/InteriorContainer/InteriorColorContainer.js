import {SpecLabelPrefix, SpecLabelSuffix} from '../../molecules/SpecLabel';
import {ColorLayout, InteriorSpecContainer, InteriorSpecText} from './Styles';
import {useState} from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import ColorSelector from '../../molecules/ColorSelector/ColorSelector';

const InteriorColorContainer = props => {
  const [interior, setInterior] = useState({
    activeObject: null,
    objects: {
      id: 1,
      interior: [
        {
          id: 1,
          description: 'Black & White',
          price: '4,500',
          currency: 'AED',
          included: false,
          color: '#f5f7fa',
        },
        {
          id: 2,
          description: 'All Black',
          price: '',
          currency: 'AED',
          included: true,
          color: '#000',
        },
      ],
    },
  });
  const [includedInterior, setIncludedInterior] = useState(false);

  function toggleActive(index) {
    setInterior({...interior, activeObject: interior.objects.interior[index]});

    if (interior.objects.interior[index].included === true) {
      setIncludedInterior(true);
    } else {
      setIncludedInterior(false);
    }
  }

  function showPrice(element) {
    if (element.included) {
      return 'Included';
    } else {
      return `${element.currency} ${element.price}`;
    }
  }

  function toggleActiveStyles(index) {
    return interior.objects.interior[index] === interior.activeObject
      ? true
      : false;
  }
  return (
    <InteriorSpecContainer>
      {interior.objects.interior.map((element, index) => (
        <Pressable onPress={() => toggleActive(index)} key={element.id}>
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
