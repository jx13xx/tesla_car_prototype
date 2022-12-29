import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  //margin-vertical: 40px;
  margin-left: auto;
  width: 150px;
  height: 50px;
  padding: 12px;
  border-radius: 1000px;
  background-color: ${props => props.bgColor};
  border: 2px solid #d01000;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-style: normal;
  //font-family: Nunito-Regular;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
`;
