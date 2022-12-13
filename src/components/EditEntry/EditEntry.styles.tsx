import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TopRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputWrapper = styled.div<{ show: boolean }>`
  width: 100%;
  display: ${(props) => (props.show ? 'flex' : 'none')};
`;

export const ButtonsWrapper = styled.div`
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BottomRow = styled.div`
  margin: 32px 32px 0px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerWrapper = styled.div<{ move: number }>`
  margin-top: 32px;
  transition: ${(props) => (props.move ? '0s' : '0.5s')};
  transform: ${(props) => `translateY(${props.move}px)`};
`;
