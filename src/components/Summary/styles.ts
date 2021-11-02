import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 3 columns, all with the same size
  gap: 2rem; // spacing between grid elements
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.4rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong { // display: inline by default so the margin-top wouldn't work
      display: block; // strong will behave like a div so now we can set a margin
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem; // height of a line
    }

    &.highlight-background {
      background: var(--green);
      color: var(--white);
    }
  }
`;