import { useAlertData } from 'react-styled-alert';
import {
  Background,
  PopupContainer,
  ButtonContainer
} from './Alert.styles';

export function Alert() {
  const data = useAlertData();
  if (!data) return <></>;

  return (
    <Background>
      <PopupContainer>
        {data.content}
      <ButtonContainer>
        <button onClick={data.onOk}>
          Ok
        </button>
        {data.onCancel ? (
          <button onClick={data.onCancel}>
            Cancel
          </button>
        ) : (<></>)}
      </ButtonContainer>
      </PopupContainer>
    </Background>
  );
}
