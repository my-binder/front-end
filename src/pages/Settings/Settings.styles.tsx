import styled from 'styled-components';

export const Container = styled.div`
  width: 800px;
  height: fit-content;
  margin-top: 42px;
  border: 2px solid var(--textcolor1);
  border-radius: 32px;
  padding: 0px 32px;
  background-image: linear-gradient(
    to bottom right,
    var(--divcolor1-light) 0%,
    var(--divcolor1) 60%,
    var(--divcolor1-dark) 100%);
  @media (max-width: 800px) {
    width: 100%;
    background-image: none;
    background-color: var(--bgcolor);
    border: none;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  margin: 32px 0px;
  display: flex;
  flex-direction: column;
`;
