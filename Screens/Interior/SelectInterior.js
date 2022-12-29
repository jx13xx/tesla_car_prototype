import PriceContainer from '../../components/organisms/PriceContainer/PriceContainer';
import GrayLabel from '../../components/molecules/GrayLabel/GrayLabel';
import InteriorColorContainer from '../../components/organisms/InteriorContainer/InteriorColorContainer';
import {SelectInteriorContainer} from './Styles';

const SelectInterior = () => {
  return (
    <SelectInteriorContainer>
      <GrayLabel>Select Interior</GrayLabel>
      <InteriorColorContainer />
      <PriceContainer />
    </SelectInteriorContainer>
  );
};

export default SelectInterior;
