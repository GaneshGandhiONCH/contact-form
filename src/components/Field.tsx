import styled from "styled-components";

const Field = styled.div`
    height:50px;
    width:calc(100% / 2 - 13px);
    position:relative;
    @media (max-width:600px) {
        width:100%; 
        margin-bottom:20px;
    }
`


export default Field;