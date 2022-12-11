import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useUserData } from 'hooks';
import { useUpdateUser } from 'api';
import { Container } from 'components';
import { checkError } from 'utils';
import { TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { FormContainer } from './Settings.styles';

export function Settings() {
  const user = useUserData();
  const [email, setEmail] = useState<string>(user.email);
  const [urlName, setUrlName] = useState<string>(user.urlName);
  const [displayName, setDisplayName] = useState<string>(user.displayName);
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');
  const [oldPassword, setOldPassword] = useState<string>('');
  const [submitting, error, submit] = useUpdateUser();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    submit(email, urlName, displayName, newPassword, oldPassword);
    setNewPassword('');
    setConfirmNewPassword('');
    setOldPassword('');
  };

  return (
    <>
      <Helmet>
        <title>MyBinder | Account Settings</title>
      </Helmet>
      <Typography variant='h1' color='secondary'>
        Account Settings
      </Typography>
      <Container margin='32px 0px 0px 0px'>
        <FormContainer onSubmit={handleSubmit}>
          <TextField
            label='Email'
            color='secondary'
            error={checkError('Email', error)}
            margin='normal'
            fullWidth
            helperText="To contact you in case you lose your password"
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitting}
            data-cy='EMAIL'
          />
          <TextField
            label='URL Name'
            color='secondary'
            error={checkError('URL Name', error)}
            margin='normal'
            fullWidth
            helperText="This will show up on your URLs"
            type='text'
            value={urlName}
            onChange={(e) => setUrlName(e.target.value)}
            disabled={submitting}
            data-cy='URL_NAME'
          />
          <TextField
            label='Display Name'
            color='secondary'
            error={checkError('Display Name', error)}
            margin='normal'
            fullWidth
            helperText="How we refer to you"
            type='text'
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            disabled={submitting}
            data-cy='DISPLAY_NAME'
          />
          <TextField
            label='New Password'
            color='secondary'
            error={checkError('New Password', error)}
            margin='normal'
            fullWidth
            helperText="To change your password"
            type='password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            disabled={submitting}
            data-cy='NEW_PASSWORD'
            style={{ marginTop: '64px' }}
          />
          <TextField
            label='Confirm New Password'
            color='secondary'
            error={newPassword !== confirmNewPassword}
            margin='normal'
            fullWidth
            helperText="Type your new password again"
            type='password'
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            disabled={submitting}
            data-cy='NEW_PASSWORD_CONFIRM'
          />
          <TextField
            label='Password'
            color='secondary'
            error={checkError('Old Password', error)}
            margin='normal'
            fullWidth
            helperText="Type your current password to update anything"
            type='password'
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            disabled={submitting}
            data-cy='OLD_PASSWORD'
            style={{ marginTop: '64px' }}
          />
          {error ? (
            <Typography
              variant='body1'
              color='error'
              style={{ marginTop: '32px', whiteSpace: 'pre' }}
            >
              {error}
            </Typography>
          ) : (
            <></>
          )}
          <LoadingButton
            disabled={submitting || newPassword !== confirmNewPassword}
            loading={submitting}
            variant='contained'
            color='primary'
            type='submit'
            data-cy='SUBMIT'
            style={{ marginTop: '32px', alignSelf: 'center' }}
          >
            Submit
          </LoadingButton>
        </FormContainer>
      </Container>
    </>
  );
}
