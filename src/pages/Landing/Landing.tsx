import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { MdAutoStories } from 'react-icons/md';
import { Typography, Button } from '@mui/material';
import { LogoWrapper } from './Landing.styles';

export function Landing() {
  return (
    <>
      <Helmet>
        <title>MyBinder</title>
      </Helmet>
      <LogoWrapper>
        <MdAutoStories color='var(--maincolor)' size='160px' />
        <h1>MyBinder</h1>
      </LogoWrapper>
      <Typography variant='h1' color='secondary'>
        Welcome to MyBinder!
      </Typography>
      <Typography
        variant='subtitle1'
        color='text.primary'
      >
        MyBinder is an app for creating personal pages like portfolios,
        resumes and others. It's designed to be easy to learn and to
        quickly make beautiful results. No need to have any knowledge
        in web development.
      </Typography>
      <Typography
        variant='subtitle1'
        color='text.primary'
        style={{marginTop: '32px'}}
      >
        To start using, just make an account. It's totally free and we
        don't collect any data from you.
      </Typography>
      <Button
        variant='text'
        color='success'
        size='large'
        style={{ marginTop: '20px' }}
        component={Link}
        to='/sign-up'
      >
        Click here to start!
      </Button>
    </>
  );
}
