import styled, { css } from "styled-components";

const PersonCard = styled.div`
  border: 1px solid black;
  border-radius: 0.25rem;
  padding: 0.5rem;
  background-color: whitesmoke;

  & h3 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
    color: rebeccapurple;
  }

  & img {
    height: 10rem;
    width: 12rem;
    object-fit: cover;
  }

  & h4 {
    font-family: Arial, Helvetica, sans-serif;
  }

  ${({ favoriteProgrammingLanguage }) =>
    favoriteProgrammingLanguage === "JavaScript" &&
    css`
      & h4 {
        color: red;
      }
    `}
`;

export default PersonCard;
