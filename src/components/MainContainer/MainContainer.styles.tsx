import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  height: ${(props: { noHeader: boolean }) => (props.noHeader ? '100%' : 'calc(100% - 64px)' )};
  width: 100%;
  top: ${(props: { noHeader: boolean }) => (props.noHeader ? '0px' : '64px' )};
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  background-image: linear-gradient(to bottom right, var(--bgcolor1), var(--bgcolor2));
  @media (max-width: 1024px) {
    position: fixed;
  }
`;

export const PageContainer = styled.div`
  width: 1000px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const BottomText = styled.div`
  width: 100%;
  margin: 64px 0px 24px 0px;
  font-family: var(--scriptfont);
  font-weight: 300;
  font-size: 12px;
  color: var(--textcolor2);
  text-align: center;
`;
