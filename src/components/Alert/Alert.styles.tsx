import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopupContainer = styled.div`
  width: 420px;
  padding: 32px;
  border-radius: 8px;
  border: 2px solid var(--textcolor1);
  background-color: var(--divcolor2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
