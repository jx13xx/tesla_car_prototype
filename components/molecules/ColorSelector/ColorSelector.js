import styled from 'styled-components/native';

const ColorSelector = styled.View`
  height: 45px;
  width: 45px;
  margin-right: 15px;
  background-color: ${props => (props.color ? props.color : '#F1F1F1')};
  border-radius: 80px;
  border: ${props => (props.active ? '4px solid #d01000' : 'none')};
  //border: 3px solid #d01000;
`;

export default ColorSelector;
