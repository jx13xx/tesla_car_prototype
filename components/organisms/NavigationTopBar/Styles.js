import styled from 'styled-components/native';

export const NavigationText = styled.Text`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  margin-left: 9px;

  color: #a0a0a0;
  margin-right: 9px;
  opacity: ${props => (props.active ? '1' : '0.2')};
  color: ${props => (props.active ? '#000000' : '#a0a0a0')};
`;

export const NavigationBorder = styled.View`
  border-bottom: 10px saddlebrown;
`;

export const NavigationBar = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-bottom: 5px;
  padding-top: 2px;
  background-color: white;
`;
