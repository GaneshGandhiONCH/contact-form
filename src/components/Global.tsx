import styled,{css,createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing:border-box;
    }
    body {
        background-color:${props => props.theme.background};
    }
`
  
  export default Global;