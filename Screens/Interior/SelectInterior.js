import PriceContainer from '../../components/organisms/PriceContainer';
import GrayLabel from '../../components/molecules/GrayLabel';
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
