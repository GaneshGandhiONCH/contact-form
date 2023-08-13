import styled, { css } from "styled-components";

const Input = styled.input`
  height: 100%;
  width: 100%;
  padding: 0 18px 0 50px;
  outline: none;

  &::placeholder {
    ${props => css`
      color: ${props.theme.unactive};
    `};
  }

  &:focus {
    ${props => css`
      border: 2px solid ${props.theme.active};
    `}
  }
`;

export default Input;