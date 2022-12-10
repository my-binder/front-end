import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoadEntries, useCreateEntry } from 'api';
import { FaPlus } from 'react-icons/fa';
import { MoonLoader } from 'react-spinners';
import { Typography, Button } from '@mui/material';
import { SpinnerWrapper } from './EditPage.styles';

export function EditPage() {
  const [page, entries, loadError, loading, load] = useLoadEntries();
  const [createError, creating, create] = useCreateEntry(page.id);

  const handleNewEntry = (e: React.SyntheticEvent) => {
    e.preventDefault();
    create(() => load());
  };

  return (
    <>
      <Helmet>
        <title>
          {`MyBinder | Editing ${page.title}`}
        </title>
      </Helmet>
      {loading ? (
        <SpinnerWrapper>
          <MoonLoader color='var(--maincolor)' />
        </SpinnerWrapper>
      ) : (
        loadError ? (
          <Typography
            variant='body1'
            color='error'
            style={{ marginTop: '32px', whiteSpace: 'pre' }}
          >
            {loadError}
          </Typography>
        ) : (
          <>
            {entries.map((entry, index) => (
              <div key={index} style={{ backgroundColor: 'aqua', padding: '32px' }}>
                {entry.index}
              </div>
            ))}
            <Button
              variant='outlined'
              color='secondary'
              disabled={creating}
              fullWidth
              style={{
                height: '224px',
                marginTop: '64px',
                flexDirection: 'column'
              }}
              onClick={handleNewEntry}
            >
              Add an Entry
              <FaPlus
                size={100}
                style={{ marginTop: '32px' }}
              />
            </Button>
            {createError ? (
              <Typography
                variant='body1'
                color='error'
                style={{ marginTop: '32px', whiteSpace: 'pre' }}
              >
                {createError}
              </Typography>
            ) : (<></>)}
          </>
        )
      )}
    </>
  );
}
