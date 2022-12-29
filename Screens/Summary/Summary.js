import React from 'react';
import {Image} from 'react-native';
import summaryImage from '../../assets/images/summary.png';
import ModalDiv from '../../components/organisms/ModalDiv/ModalDiv';
import SummaryContainer from '../../components/organisms/SummaryContainer/SummaryContainer';
import {SummaryScreenContainer} from './Styles';

const Summary = () => {
  return (
    <SummaryScreenContainer>
      <Image source={summaryImage} style={{paddingRight: '50%'}} />
      <ModalDiv dark component={<SummaryContainer />} />
    </SummaryScreenContainer>
  );
};

export default Summary;
