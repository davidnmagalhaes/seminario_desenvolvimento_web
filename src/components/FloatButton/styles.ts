import styled from 'styled-components';

export const FloatingButtonWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
`;

export const AddButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #3498db;
  color: #fff;
  font-size: 24px;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  outline: none;

  &:hover {
    background-color: #2980b9;
  }
`;
