import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useLoadFullPage } from 'api';
import { MoonLoader } from 'react-spinners';
import { Typography } from '@mui/material';
import { SpinnerWrapper } from './ViewPage.styles';

export function ViewPage() {
  const { userUrl, pageUrl } = useParams();
  const [page, error, loading] = useLoadFullPage(
    userUrl as string,
    pageUrl as string
  );

  return (
    loading ? (
      <SpinnerWrapper>
        <MoonLoader color='var(--maincolor)' />
      </SpinnerWrapper>
    ) : (
      error ? (
        <Typography
          variant='body1'
          color='error'
          style={{ marginTop: '32px', whiteSpace: 'pre' }}
        >
          {error}
        </Typography>
      ) : (
        <>
          <Helmet>
            <title>
              {`${page.owner.displayName}'s ${page.page.title}`}
            </title>
          </Helmet>
          {page.entries.map((entry, index) => (
            <div key={index} style={{ padding: '32px', backgroundColor: 'lightblue' }}>
              {entry.index}
            </div>
          ))}
        </>
      )
    )
  );
}
