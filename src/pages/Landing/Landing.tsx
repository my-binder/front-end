import { Link } from 'react-router-dom';
import { MdAutoStories } from 'react-icons/md';
import {
  LogoWrapper,
  TitleWrapper,
  Text,
  LinkWrapper
} from './Landing.styles';

export function Landing() {
  return (
    <>
      <LogoWrapper>
        <MdAutoStories color='var(--maincolor)' size='160px' />
        <h1>MyBinder</h1>
      </LogoWrapper>
      <TitleWrapper>Welcome to MyBinder!</TitleWrapper>
      <Text>
        MyBinder is an app for creating personal pages like portfolios, resumes and others. It's designed to be easy to learn and to quickly make beautiful results. No need to have any knowledge in web development.
      </Text>
      <Text>
        To start using, just make an account. It's totally free and we don't collect any data from you.
      </Text>
      <LinkWrapper>
        <Link to='/sign-up'>
          Click here to start!
        </Link>
      </LinkWrapper>
    </>
  );
}
