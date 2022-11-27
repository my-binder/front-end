import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAlert } from 'react-styled-alert';
import { useUserData, usePage } from 'hooks';
import { useSignOut } from 'api';
import { MdAutoStories, MdLogout, MdOutlineSettings } from 'react-icons/md';
import { IoIosArrowDropdown } from 'react-icons/io';
import { RiDashboardLine } from 'react-icons/ri';
import { Button } from '@mui/material';
import {
  Buttons,
  Container,
  DropdownButton,
  DropdownMenu,
  Logo,
  UserContainer,
  UserMessage,
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
        <Logo>
          <Link to='/'>
            <MdAutoStories />
            <p>MyBinder</p>
          </Link>
        </Logo>
        {user.email ? (
          <UserContainer>
            <UserMessage>
              {`Hi, ${user.displayName}!`}
            </UserMessage>
            <DropdownButton active={dropdown}>
              <IoIosArrowDropdown onClick={() => setDropdown(prev => !prev)} />
            </DropdownButton>
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
          startIcon={<RiDashboardLine />}
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
          startIcon={<MdOutlineSettings />}
          component={Link}
          to='/settings'
          data-cy='TO_SETTINGS'
          style={{ justifyContent: 'start', paddingLeft: '16px', margin: '4px 0px', transition: '0s' }}
        >
          Settings
        </Button>
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
