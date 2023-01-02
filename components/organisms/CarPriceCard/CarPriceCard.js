import React from 'react';
import {CarPriceLabel} from '../../molecules/CarPriceLabel/CarPriceLabel';
import {CarImage, CarPriceContainer, PriceView} from './Styles';

export const CarPriceCard = ({data}) => {
  return (
    <CarPriceContainer bannerColor={data.meta.bannerColor}>
      <CarImage
        source={{
          uri: data.meta.imageUrl,
        }}
      />
      <PriceView>
        <CarPriceLabel
          props={{
            currency: data.cost.currency,
            price: data.cost.price,
            model: data.modelName,
          }}
        />
      </PriceView>
    </CarPriceContainer>
  );
};

export default CarPriceCard;
