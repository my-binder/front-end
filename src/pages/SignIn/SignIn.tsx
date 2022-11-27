import React, { useState } from 'react';
import { Helmet} from 'react-helmet';
import { useSignIn } from 'api';
import { checkError } from 'utils';
import { TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Container, FormContainer } from './SignIn.styles';

export function SignIn() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [submitting, error, submit] = useSignIn();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    submit(email, password);
  };

  return (
    <>
      <Helmet>
        <title>MyBinder | Login</title>
      </Helmet>
      <Typography variant='h1' color='secondary'>
        Sign in to your account
      </Typography>
      <Container>
        <FormContainer onSubmit={handleSubmit}>
          <TextField
            id='email'
            label='Email'
            color='secondary'
            error={checkError('Email', error)}
            margin='normal'
            fullWidth
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitting}
            data-cy='EMAIL'
            autoFocus
          />
          <TextField
            id='password'
            label='Password'
            color='secondary'
            error={checkError('Password', error)}
            margin='normal'
            fullWidth
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={submitting}
            data-cy='PASSWORD'
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
            disabled={submitting}
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
