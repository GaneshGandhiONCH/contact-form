import styled,{css} from "styled-components";

const Input = styled.input`
    height:100%;
    width:100%;
    padding:0 18px 0 50px;
    outline:none;
    &::placeholder {
        ${props => css`
            color:${props.theme.unactive};
        `}
    }
`
export default Input;