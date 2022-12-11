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
  display: ${(props: { show: boolean }) => (props.show ? 'flex' : 'none')};
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
