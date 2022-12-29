import React, {useState} from 'react';
import {PrefixText, SuffixText} from '../../components/organisms/Text';
import Description from '../../components/Description';
import PriceContainer from '../../components/organisms/PriceContainer';
import {
  CarSpecificationContainer,
  CenterView,
  TopSpecsContainer,
  TopSpecTile,
  VerticalDivider,
} from './Styles';

const CarSpecification = props => {
  return (
    <CarSpecificationContainer>
      <TopSpecsContainer>
        <CenterView>
          <TopSpecTile>
            <PrefixText>3.5s</PrefixText>
            <SuffixText>0-60mph</SuffixText>
          </TopSpecTile>
          <VerticalDivider />
          <TopSpecTile>
            <PrefixText>150mph</PrefixText>
            <SuffixText>Top Speed</SuffixText>
          </TopSpecTile>
        </CenterView>
      </TopSpecsContainer>
      <Description>
        Tesla All-Wheel Drive has two independent motors. Unlike traditional
        all-wheel drive systems, these two motors digitally control torque to
        the front and rear wheels—for far better handling and traction control.{' '}
      </Description>
      <PriceContainer />
    </CarSpecificationContainer>
  );
};

export default CarSpecification;
