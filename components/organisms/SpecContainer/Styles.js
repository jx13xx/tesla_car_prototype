import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SpecDescriptionContainer = styled.View`
  flex: 1;
  margin-left: auto;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const SpecDescText = styled.Text`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 38px;
  color: ${props => (props.active ? '#000000' : '#A4B0BC')};
`;

export const SpecPriceText = styled.Text`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
  color: ${props => (props.active ? '#d01000' : '#A4B0BC')};
`;
