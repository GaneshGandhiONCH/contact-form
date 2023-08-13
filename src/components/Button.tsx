import styled,{css} from "styled-components";

const Button = styled.button`
    ${props => css `
    font-size:18px;
    border:none;
    color:${props.theme.white};
    border-radius:5px;
    background-color:${props.theme.background};
    padding:13px 25px;
    cursor:pointer
        `
    }
`
export default Button;