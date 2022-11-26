import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSignUp } from 'api';
import { TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Container, FormContainer } from './SignUp.styles';

export function SignUp() {
  const [email, setEmail] = useState<string>('');
  const [urlName, setUrlName] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [submitting, error, submit] = useSignUp();

  const checkError = (entry: string) => {
    return error.includes(entry);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    submit(email, urlName, displayName, password);
  };

  return (
    <>
      <Helmet>
        <title>MyBinder | Sign Up</title>
      </Helmet>
      <Typography variant='h1' color='secondary'>
        Sign Up
      </Typography>
      <Typography variant='subtitle1' color='secondary'>
        Create an account now and start creating your own personalized web pages!
      </Typography>
      <Container>
        <FormContainer onSubmit={handleSubmit}>
          <TextField
            id='email'
            label='Email'
            color='secondary'
            error={checkError('Email')}
            margin='normal'
            fullWidth
            helperText="You'll need to confirm it"
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitting}
            data-cy='EMAIL'
            autoFocus
          />
          <TextField
            id='urlName'
            label='URL Name'
            color='secondary'
            error={checkError('URL Name')}
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
            id='displayName'
            label='Display Name'
            color='secondary'
            error={checkError('Display Name')}
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
            id='password'
            label='Password'
            color='secondary'
            error={checkError('Password')}
            margin='normal'
            fullWidth
            helperText="Your password"
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={submitting}
            data-cy='PASSWORD'
          />
          <TextField
            id='confirmPassword'
            label='Confirm Password'
            color='secondary'
            error={password !== confirmPassword}
            margin='normal'
            fullWidth
            helperText="Type your password again"
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={submitting}
            data-cy='PASSWORD_CONFIRM'
          />
          {error ? (
            <Typography
              variant='body1'
              color='error'
              style={{marginTop: '32px', whiteSpace: 'pre'}}
            >
              {error}
            </Typography>
          ) : (
            <></>
          )}
          <LoadingButton
            disabled={submitting || password !== confirmPassword}
            loading={submitting}
            variant='contained'
            color='primary'
            type='submit'
            data-cy='SUBMIT'
            style={{marginTop: '32px'}}
          >
            Submit
          </LoadingButton>
        </FormContainer>
      </Container>
    </>
  );
}
