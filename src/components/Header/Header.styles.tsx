import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 64px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 44px;
  background-image: linear-gradient(
    to bottom,
    var(--divcolor4-light),
    var(--divcolor4));
  border-bottom: 2px solid var(--divcolor4-dark);
  @media (max-width: 800px) {
    padding: 0px 24px;
  }
`;

export const Logo = styled.div`
  a {
    font-family: var(--logofont);
    font-size: 42px;
    color: var(--contrastcolor1);
    display: flex;
    align-items: center;
    cursor: pointer;
  
    svg {
      margin-right: 16px;
      margin-bottom: 6px;
    }
    p {
      @media (max-width: 800px) {
        display: none;
      }
    }
  }
`;

export const Buttons = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    width: 172px;
  }
`;

export const UserContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const UserMessage = styled.p`
  font-family: var(--scriptfont);
  color: var(--contrastcolor1);
  font-size: 28px;
  font-weight: 700;
`;

export const DropdownButton = styled.div<{ active: boolean }>`
  font-size: 40px;
  color: var(--contrastcolor1);
  transition: 0.2s;
  margin-left: 32px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-90deg);
  :hover {
    transform: rotate(-90deg) scale(1.3);
  }
  ${(props) => (
    props.active && css`
      transform: rotate(0deg);
      :hover {
        transform: rotate(0deg) scale(1.3);
      }
    `
  )};
`;

export const DropdownMenu = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0px;
  right: 16px;
  z-index: 1;
  width: 256px;
  height: 160px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-color: var(--divcolor1);
  border-radius: 0px 0px 16px 16px;
  border: 2px solid var(--textcolor1);
  border-top: none;
  transition: transform 0.2s;
  transform: translateY(-100px);
  ${(props) => (
    props.active && css`
      transform: translateY(64px);
    `
  )};
`;