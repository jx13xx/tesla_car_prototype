import styled, {css} from 'styled-components';
import {
  Image,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  Text,
} from 'react-native';

const EasyButton = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello, world!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

export default EasyButton;
