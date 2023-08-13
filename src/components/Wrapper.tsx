import styled from 'styled-components'
const Wrapper = styled.div`
    width:720px;
    height:400px;
    background-color:${props => props.theme.active};
    border-radius:5px;
`
export default Wrapper;