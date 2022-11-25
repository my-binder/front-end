import React from 'react';
import { usePage } from 'hooks';
import {
  Container,
  PageContainer,
  BottomText
} from './MainContainer.styles'

export function MainContainer(props: { children: React.ReactNode }) {
  const page = usePage();

  return (
    <Container noHeader={page === 'view'}>
      <PageContainer>
        {props.children}
      </PageContainer>
      <BottomText>
        MyBinder - Rafael de Lima Bordoni, 2022
      </BottomText>
    </Container>
  );
}
