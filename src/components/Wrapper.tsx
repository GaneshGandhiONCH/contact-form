import styled from 'styled-components'
const Wrapper = styled.div`
    min-height:500px;
    max-height:800px;
    min-width:400px;
    max-width:720px;
    background-color:${props => props.theme.white};
    border-radius:5px;
`
export default Wrapper;