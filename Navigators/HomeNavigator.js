import {createStackNavigator} from '@react-navigation/stack';
import Showcase from '../Screens/Showcase/Showcase';
import SpecificationScreen from '../Screens/Car/SpecificationScreen';

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
        name="Car Specification"
        component={SpecificationScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
