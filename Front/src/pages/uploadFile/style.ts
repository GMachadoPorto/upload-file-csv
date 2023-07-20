import { styled } from "styled-components";

export const StyledMainFileUpload = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h2 {
    font-size: 3.6rem;
  }

  a {
    font-size: 1.6rem;
    text-decoration: none;
    color: #00000090;
  }

  input::-webkit-file-upload-button {
    padding: 1rem 2rem;
  }

  p {
    font-size: 2rem;
    color: red;
  }
`;
