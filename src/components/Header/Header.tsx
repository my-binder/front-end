import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAlert } from 'react-styled-alert';
import { useUserData, usePage } from 'hooks';
import { useSignOut } from 'api';
import { Button, IconButton, Divider, Typography } from '@mui/material';
import { BiMenu } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { MdOutlineDashboard, MdLogout } from 'react-icons/md';
import {
  Buttons,
  Container,
  DropdownMenu,
  Logo,
  LogoMobile,
  UserContainer
} from './Header.styles';

export function Header() {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const location = useLocation();
  const popup = useAlert();
  const user = useUserData();
  const signOut = useSignOut();
  const page = usePage();

  useEffect(() => {
    setDropdown(false);
  }, [location]);

  const handleSignOut = () => {
    popup(
      'Are you sure you want to log out?',
      () => signOut(),
      () => {}
    );
  }

  if (page === 'view') return <></>;

  return (
    <>
      <Container>
        <Link to='/'>
          <Logo src='src/assets/logo-horizontal.png'/>
          <LogoMobile src='src/assets/logo-mini.png'/>
        </Link>
        {user.email ? (
          <UserContainer>
            <Typography variant='subtitle1' color='secondary' style={{ marginRight: '16px' }}>
            {`Hi, ${user.displayName}!`}
            </Typography>
            <IconButton color='secondary' onClick={() => setDropdown(prev => !prev)}>
              <BiMenu />
            </IconButton>
          </UserContainer>
        ) : (
          <Buttons>
            <Button
              variant='outlined'
              color='secondary'
              component={Link}
              to='/sign-in'
              data-cy='LOGIN'
            >
              Login
            </Button>
            <Button
              variant='contained'
              color='primary'
              component={Link}
              to='/sign-up'
              data-cy='SIGN_UP'
            >
              Sign Up
            </Button>
          </Buttons>
        )}
      </Container>
      <DropdownMenu active={dropdown}>
        <Button
          disabled={!dropdown}
          variant='text'
          color='secondary'
          fullWidth
          startIcon={<MdOutlineDashboard />}
          component={Link}
          to='/dashboard'
          data-cy='TO_DASHBOARD'
          style={{ justifyContent: 'start', paddingLeft: '16px', margin: '4px 0px', transition: '0s' }}
        >
          Dashboard
        </Button>
        <Button
          disabled={!dropdown}
          variant='text'
          color='secondary'
          fullWidth
          startIcon={<FiSettings />}
          component={Link}
          to='/settings'
          data-cy='TO_SETTINGS'
          style={{ justifyContent: 'start', paddingLeft: '16px', margin: '4px 0px', transition: '0s' }}
        >
          Settings
        </Button>
        <Divider style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}/>
        <Button
          disabled={!dropdown}
          variant='text'
          color='secondary'
          fullWidth
          startIcon={<MdLogout />}
          onClick={handleSignOut}
          data-cy='SIGN_OUT'
          style={{ justifyContent: 'start', paddingLeft: '16px', margin: '4px 0px' }}
        >
          Sign Out
        </Button>
      </DropdownMenu>
    </>
  );
}
