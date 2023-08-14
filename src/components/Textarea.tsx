import styled,{css} from "styled-components";
const Textarea = styled.textarea`
    min-width:100%;
    max-width:100%;
    min-height:120px;
    max-height:300px; 
    outline:none;
    padding:5px 18px 0 50px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.unactive};
    &::placeholder {
        ${props => css`
            color:${props.theme.unactive};
        `}
    }
    &:focus {
    ${props => css`
      border: 2px solid ${props.theme.active};
    `}
    @media(max-width:600px) {
      resize:none;
    }
  }
`
export default Textarea;