import {NavigationBar, NavigationBorder, NavigationText} from './Styles';

const NavigationTopBar = props => {
  return (
    <NavigationBar>
      <NavigationBorder>
        <NavigationText active={props.step1 ? true : false}>
          1. Car
        </NavigationText>
      </NavigationBorder>
      <NavigationBorder>
        <NavigationText active={props.step2 ? true : false}>
          2. Exterior
        </NavigationText>
      </NavigationBorder>
      <NavigationBorder>
        <NavigationText active={props.step3 ? true : false}>
          3. Interior
        </NavigationText>
      </NavigationBorder>
      <NavigationBorder>
        <NavigationText active={props.step4 ? true : false}>
          4. Autopilot
        </NavigationText>
      </NavigationBorder>
    </NavigationBar>
  );
};

export default NavigationTopBar;
