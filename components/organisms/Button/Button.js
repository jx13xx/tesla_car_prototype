import {ButtonContainer, ButtonText} from '../../molecules/Button/Button';

export const PressableButton = ({onPress, bgColor, title}) => (
  <ButtonContainer onPress={onPress} bgColor={bgColor}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);
