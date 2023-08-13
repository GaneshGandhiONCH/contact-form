import styled,{css} from "styled-components";
const Textarea = styled.textarea`
    width:100%;
    height:100%; 
    outline:none;
    padding:0 18px 0 50px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.unactive};
    &::placeholder {
        ${props => css`
            color:${props.theme.unactive};
        `}
    }
`
export default Textarea;