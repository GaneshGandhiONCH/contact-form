import styled from "styled-components";
const Body_header = styled.header`
    font-size:22px;
    font-weight:600;
    padding:20px 30px;
    border-radius:1px solid ${props => props.theme.unactive};
    @media (max-width:600px) {
      text-align:center;
    }
`


export default Body_header;