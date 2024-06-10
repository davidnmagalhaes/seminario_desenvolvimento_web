import FloatingAddButtonType from '../../types/FloatingAddButtonType';
import { AddButton, FloatingButtonWrapper } from './styles';

const FloatingAddButton = ({ onClick }: FloatingAddButtonType) => {
  return (
    <FloatingButtonWrapper>
      <AddButton onClick={onClick}>+</AddButton>
    </FloatingButtonWrapper>
  );
};

export default FloatingAddButton;
