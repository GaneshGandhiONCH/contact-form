import {createGlobalStyle} from 'styled-components'
import PoppinsBold from '../assets/fonts/Poppins-Bold.ttf';
const Global = createGlobalStyle`
   @font-face {
    font-family: Poppins;
    src: url(${PoppinsBold});
  }
    * {
        margin: 0;
        padding:0;
        box-sizing:border-box;
        font-family: Poppins;
    }
    body {
        background-color:${props => props.theme.background};
        display:flex;
        padding:0 10px;
        min-height:100vh;
        align-items:center;
        justify-content:center;
    }
    
`
  
  export default Global;