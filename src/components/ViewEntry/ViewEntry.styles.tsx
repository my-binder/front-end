import styled from 'styled-components';

export const EntryWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 32px;
`;

export const ProjectLayout = styled.div`
  width: 100%;
  flex-grow: 1;
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ImgAndDescWrapper = styled.div`
  min-width: 368px;
  max-width: 368px;
  display: flex;
  flex-direction: column;
  margin-right: 32px;
  
  img {
    width: 100%;
    margin-bottom: 16px;
  }

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 8px;
  }
`;
