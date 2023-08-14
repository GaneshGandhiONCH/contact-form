import styled from "styled-components";

const Span = styled.span`
    color: ${props => props.theme.active};
    margin-left:30px;
    @media(max-width:600px) {
        text-align:center;
        margin:20px 0;
    }
`
export default Span;