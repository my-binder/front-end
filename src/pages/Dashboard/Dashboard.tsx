import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoadPages, useCreatePage } from 'api';
import { checkError } from 'utils';
import { Container, PageListItem } from 'components';
import { MoonLoader } from 'react-spinners';
import { Typography, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { FormContainer, SpinnerContainer } from './Dashboard.styles';

export function Dashboard() {
  const [newPageTitle, setNewPageTitle] = useState<string>('');
  const [newPageUrlName, setNewPageUrlName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [pages, loading, load] = useLoadPages();
  const [creating, create] = useCreatePage();

  const handleCreatePage = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError('');
    create(
      newPageTitle,
      newPageUrlName,
      () => {
        load();
        setNewPageTitle('');
        setNewPageUrlName('');
      },
      (err) => setError(err.message)
    );
  };

  return (
    <>
      <Helmet>
        <title>MyBinder | Dashboard</title>
      </Helmet>
      <Typography variant='h1' color='secondary'>
        Dashboard
      </Typography>
      <Container margin='32px 0px 0px 0px'>
        <Typography variant='subtitle1' color='text.primary'>
          Create a new page
        </Typography>
        <FormContainer onSubmit={handleCreatePage}>
          <TextField
            label='Title'
            color='secondary'
            error={checkError('Title', error)}
            margin='normal'
            fullWidth
            helperText="Your page's title"
            type='text'
            value={newPageTitle}
            onChange={(e) => setNewPageTitle(e.target.value)}
            disabled={creating}
            data-cy='NEW_PAGE_TITLE'
          />
          <TextField
            label='URL Name'
            color='secondary'
            error={checkError('URL Name', error)}
            margin='normal'
            fullWidth
            helperText="This will show up on your page's URL"
            type='text'
            value={newPageUrlName}
            onChange={(e) => setNewPageUrlName(e.target.value)}
            disabled={creating}
            data-cy='NEW_PAGE_URL_NAME'
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
            disabled={creating}
            loading={creating}
            variant='contained'
            color='primary'
            type='submit'
            data-cy='CREATE'
            style={{ marginTop: '32px', alignSelf: 'center' }}
          >
            Create Page
          </LoadingButton>
        </FormContainer>
      </Container>
      {loading ? (
        <SpinnerContainer>
          <MoonLoader
            size={120}
            color='var(--maincolor)'
          />
        </SpinnerContainer>
      ) : (
        pages === 'error' ? (
          <Typography variant='body1' color='error' style={{ marginTop: '32px' }}>
            Loading pages failed!
          </Typography>
        ) : (
          pages.length === 0 ? (
            <Typography variant='body1' color='text.secondary' style={{ marginTop: '32px' }}>
              You have no pages. Create one!
            </Typography>
          ) : (
            pages.map((value, index) => (
              <PageListItem
                key={index}
                page={value}
                reload={load}
              />
            ))
          )
        )
      )}
    </>
  );
}
