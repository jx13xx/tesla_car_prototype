import React, {useState} from 'react';
import {PrefixText} from '../../components/molecules/PrefixText/PrefixText';
import {SuffixText} from '../../components/molecules/SuffixText/SuffixText';
import Description from '../../components/molecules/Description/Description';
import PriceContainer from '../../components/organisms/PriceContainer/PriceContainer';
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
