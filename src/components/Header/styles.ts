import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto; // y x

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: var(--white);
    background-color: var(--light-blue);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    // whenever the filter property of the button element is altered we'll have a smooth transition
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9); // darkens the color of the button
    }
  }
`;