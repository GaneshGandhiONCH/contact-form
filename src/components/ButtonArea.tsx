import styled from "styled-components";

const ButtonArea = styled.div `
    margin:25px 0;
    display:flex;
    align-items:center;
    @media(max-width:600px) {
        flex-direction:column
    }
`
export default ButtonArea;