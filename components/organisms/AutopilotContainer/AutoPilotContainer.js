import {
  SpecLabelPrefix,
  SpecLabelSuffix,
} from '../../molecules/SpecLabel/SpecLabel';
import {AutopilotSpecContainer, AutopilotSpecText} from './Styles';
import {useContext, useEffect, useState} from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {useDispatch, useSelector} from 'react-redux';
import {StepProviderContext} from '../../../Global/StepContext';
import {getCarAutoPilot, getCarFeatures} from '../../../Redux/ducks/car';
import {seedAutoPilotResponse} from '../../../Redux/sagas/requests/seedresponse';
import {numberSeparator} from '../../../utils/NumberSeparator';

const AutoPilotContainer = props => {
  const dispatch = useDispatch();
  let apiAutoPilot = useSelector(state => state.cars.autopilot);
  let autoPilotOptions =
    apiAutoPilot !== undefined ? apiAutoPilot : seedAutoPilotResponse;
  const {setAutoPilotPrice, userSelectedCar} = useContext(StepProviderContext);

  const [autopilot, setAutoPilot] = useState({
    activeObject: null,
    objects: autoPilotOptions,
  });

  useEffect(() => {
    const dispatcher = () => dispatch(getCarAutoPilot(userSelectedCar));
    dispatcher();
  }, [userSelectedCar]);

  function toggleActive(index, element) {
    setAutoPilot({
      ...autopilot,
      activeObject: autopilot.objects.autopilot_options[index],
    });
    setAutoPilotPrice(Number(element.price));
  }

  function toggleActiveStyles(index) {
    return autopilot.objects.autopilot_options[index] === autopilot.activeObject
      ? true
      : false;
  }

  return (
    <AutopilotSpecContainer>
      <AutopilotSpecText>
        {autopilot.objects.autopilot_options.map((element, index) => (
          <Pressable
            onPress={() => toggleActive(index, element)}
            key={element.id}>
            <SpecLabelPrefix active={toggleActiveStyles(index)}>
              {element.description}
            </SpecLabelPrefix>
            <SpecLabelSuffix active={toggleActiveStyles(index)}>
              AED {numberSeparator(Number(element.price))}
            </SpecLabelSuffix>
          </Pressable>
        ))}
      </AutopilotSpecText>
    </AutopilotSpecContainer>
  );
};

export default AutoPilotContainer;
