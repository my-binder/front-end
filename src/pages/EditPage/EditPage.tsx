import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { useUserData } from 'hooks';
import { useCreateEntry, useLoadFullPage } from 'api';
import { EditEntry } from 'components';
import { FaPlus } from 'react-icons/fa';
import { MoonLoader } from 'react-spinners';
import { Typography, Button } from '@mui/material';
import { SpinnerWrapper, AddButtonWrapper } from './EditPage.styles';

export function EditPage() {
  const { pageUrl } = useParams();
  const user = useUserData();
  const [page, loadError, loading, load] = useLoadFullPage(
    user.urlName,
    pageUrl as string
  );
  const [createError, creating, create] = useCreateEntry(page.page.id);

  const handleNewEntry = () => {
    create(() => load());
  };

  return (
    <>
      <Helmet>
        <title>
          {`MyBinder | Editing ${page.page.title}`}
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
            {page.entries.map((entry, index) => (
              <EditEntry
                key={index}
                entry={entry}
                pageId={page.page.id}
                reload={load}
              />
            ))}
            <AddButtonWrapper>
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
            </AddButtonWrapper>
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
