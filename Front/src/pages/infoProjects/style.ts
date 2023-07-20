import { styled } from "styled-components";

export const StyledMainInfoProject = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h2 {
    font-size: 3.2rem;
    color: #00000090;
  }
  a {
    font-size: 1.6rem;
    text-decoration: none;
    color: #00000090;
  }

  select {
    width: 100%;
    max-width: 30rem;
    height: 4rem;
    border-radius: 0.4rem;
  }

  section {
    width: 100%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    @media (min-width: 1040px) {
      flex-direction: row;
      align-items: flex-start;
    }
  }

  .grafic {
    width: clamp(30rem, 100%, 50rem);
    height: max-content;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e9e9e9;
    border-radius: 0.5rem;
    border: 0.1rem solid #00000080;
  }
`;
