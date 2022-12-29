import {createStackNavigator} from '@react-navigation/stack';
import Showcase from '../Screens/Showcase/Showcase';
import SpecificationScreen from '../Screens/Car/SpecificationScreen';
import Exterior from '../Screens/Exterior/Exterior';
import Interior from '../Screens/Interior/Interior';
import {
  CARSPECIFICATION_SCREEN,
  EXTERIOR_SCREEN,
  INTERIOR_SCREEN,
  AUTOPILOT_SCREEN,
  SUMMARY_SCREEN,
} from './NavigationScreenType';
import Autopilot from '../Screens/Autopilot/Autopilot';
import Summary from '../Screens/Summary/Summary';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Showcase}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={CARSPECIFICATION_SCREEN}
        component={SpecificationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={EXTERIOR_SCREEN}
        component={Exterior}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={INTERIOR_SCREEN}
        component={Interior}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AUTOPILOT_SCREEN}
        component={Autopilot}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SUMMARY_SCREEN}
        component={Summary}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
