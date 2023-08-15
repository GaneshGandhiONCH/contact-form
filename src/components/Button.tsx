import styled from "styled-components";

const Button = styled.button`
  font-size: 18px;
  border: none;
  color: ${props => props.theme.white};
  border-radius: 5px; 
  background-color: ${props => props.theme.background};
  padding: 13px 25px;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 100%;
    margin-bottom:20px;
  }
`
export default Button;