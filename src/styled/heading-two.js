import styled, { css } from "styled-components";

const HeadingTwo = styled.h2`
  font-size: 16px;

  ${({ color }) =>
    color === "primary" &&
    css`
      color: purple;
    `}

  ${({ color }) =>
    color === "secondary" &&
    css`
      color: green;
    `}
`;

export default HeadingTwo;
