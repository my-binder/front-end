import { useAlertData } from 'react-styled-alert';
import { Button, Typography } from '@mui/material';
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
        <Typography variant='body1' color='text.primary'>
          {data.content}
        </Typography>
        <ButtonContainer>
          <Button
            onClick={data.onOk}
            color='primary'
            variant='contained'
          >
            Ok
          </Button>
          {data.onCancel ? (
            <Button
              onClick={data.onCancel}
              color='primary'
              variant='outlined'
            >
              Cancel
            </Button>
          ) : (<></>)}
        </ButtonContainer>
      </PopupContainer>
    </Background>
  );
}
