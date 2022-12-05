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
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

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

export const DropdownMenu = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0px;
  right: 16px;
  z-index: 1;
  width: 256px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: transform 0.2s;
  transform: translateY(-160px);
  ${(props) => (
    props.active && css`
      transform: translateY(72px);
    `
  )};
`;
