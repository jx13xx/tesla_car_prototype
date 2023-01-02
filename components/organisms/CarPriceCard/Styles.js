import styled from 'styled-components/native';

export const CarPriceContainer = styled.View`
  width: 100%;
  height: 230px;
  margin-top: 12px;
  margin-bottom: 12px;

  background: ${props => (props.bannerColor ? props.bannerColor : '#A4B0BC')};
  border-radius: 17px;
`;

export const CarImage = styled.Image`
  margin: 0;
  position: absolute;
  top: 25px;
  right: 10%;
  //left: 20%;
  //mix-blend-mode: exclusion;
  //background-color: #d5d5d5;
  //background-blend-mode: multiply;
  //filter: contrast(30%);
  //background-color: transparent;
  width: 300px;
  height: 130px;
`;

export const PriceView = styled.View`
  position: absolute;
  bottom: 5px;
  right: 5px;
  padding-bottom: 2px;
`;
