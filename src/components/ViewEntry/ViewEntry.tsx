import { Entry } from 'types';
import { Typography, Button } from '@mui/material';
import {
  EntryWrapper,
  ProjectLayout,
  ImgAndDescWrapper
} from './ViewEntry.styles';

export function ViewEntry(props: { entry: Entry }) {
  const { entry } = props;

  const conditional = {
    title: 
      <>
        <Typography
          variant='h1'
          color='secondary'
          sx={{ marginBottom: '0px' }}
        >
          {entry.title}
        </Typography>
        <Typography
          variant='subtitle1'
          color='text.primary'
          sx={{ marginBottom: '32px' }}
        >
          {entry.description}
        </Typography>
      </>,
    
    project: 
      <Button
        variant='outlined'
        color='secondary'
        href={entry.sourceUrl}
        target='_blank'
        sx={{
          height: 'fit-content',
          flexDirection: 'column',
          padding: '16px',
          textTransform: 'none'
        }}
      >
        <Typography
          variant='h2'
          color='secondary'
          sx={{ textAlign: 'left' }}
        >
          {entry.title}
        </Typography>
        <ProjectLayout>
          <ImgAndDescWrapper>
            <img src={entry.imageUrl} alt={entry.title} />
            <Typography
              variant='body2'
              color='text.secondary'
              sx={{ textAlign: 'left' }}
            >
              {entry.description}
            </Typography>
          </ImgAndDescWrapper>
          <Typography
            variant='body1'
            color='text.primary'
            sx={{ textAlign: 'left' }}
          >
            {entry.text}
          </Typography>
        </ProjectLayout>
      </Button>,

    text:
      <>
        <Typography
          variant='h2'
          color='secondary'
          sx={{ marginTop: '32px' }}
        >
          {entry.title}
        </Typography>
        <Typography
          variant='body1'
          color='secondary'
        >
          {entry.text}
        </Typography>
      </>,

    image:
      <img
        src={entry.imageUrl}
        alt={entry.imageUrl}
        style={{ marginTop: '32px', width: '100%' }}
      />,

    space: <></>
  };

  return (
    <EntryWrapper>
      {conditional[entry.type]}
    </EntryWrapper>
  );
}
