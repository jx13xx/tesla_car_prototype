import React from 'react';
import GrayLabel from '../../components/molecules/GrayLabel/GrayLabel';
import PriceContainer from '../../components/organisms/PriceContainer/PriceContainer';
import AutoPilotContainer from '../../components/organisms/AutopilotContainer/AutoPilotContainer';
import {SelectAutoPilotContainer} from './Styles';
import Description from '../../components/molecules/Description/Description';

const SelectAutoPilot = () => {
  return (
    <SelectAutoPilotContainer>
      <GrayLabel style={{marginTop: '5%', marginBottom: '5%'}}>
        Autopilot
      </GrayLabel>
      <AutoPilotContainer />
      <Description>
        Atomatic driving from highway on-ramp to off-ramp including interchanges
        and overtaking slower cars.
      </Description>
      <PriceContainer />
    </SelectAutoPilotContainer>
  );
};

export default SelectAutoPilot;
