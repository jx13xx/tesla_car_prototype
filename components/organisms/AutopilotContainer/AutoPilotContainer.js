import {SpecLabelPrefix, SpecLabelSuffix} from '../../molecules/SpecLabel';
import {AutopilotSpecContainer, AutopilotSpecText} from './Styles';
import {useState} from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const AutoPilotContainer = props => {
  const [autopilot, setAutoPilot] = useState({
    activeObject: null,
    objects: {
      id: 1,
      autopilot: [
        {
          id: 1,
          description: 'Full Self Driving',
          currency: 'AED',
          price: '28,500',
        },
        {
          id: 2,
          description: 'Autopilot',
          currency: 'AED',
          price: '235,000',
        },
      ],
    },
  });

  function toggleActive(index) {
    setAutoPilot({
      ...autopilot,
      activeObject: autopilot.objects.autopilot[index],
    });
  }

  function toggleActiveStyles(index) {
    return autopilot.objects.autopilot[index] === autopilot.activeObject
      ? true
      : false;
  }

  return (
    <AutopilotSpecContainer>
      <AutopilotSpecText>
        {autopilot.objects.autopilot.map((element, index) => (
          <Pressable onPress={() => toggleActive(index)} key={element.id}>
            <SpecLabelPrefix active={toggleActiveStyles(index)}>
              {element.description}
            </SpecLabelPrefix>
            <SpecLabelSuffix active={toggleActiveStyles(index)}>
              {element.currency} {element.price}
            </SpecLabelSuffix>
          </Pressable>
        ))}
      </AutopilotSpecText>
    </AutopilotSpecContainer>
  );
};

export default AutoPilotContainer;
