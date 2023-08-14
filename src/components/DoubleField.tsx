import styled from "styled-components";

const DoubleField = styled.div`
 display:flex;
 flex-direction:row;
 align-items:center;
 margin-bottom:25px;
 justify-content:space-between;
 @media (max-width:600px) {
      flex-direction:column;
      margin-bottom:0px;
}
`
export default DoubleField;
