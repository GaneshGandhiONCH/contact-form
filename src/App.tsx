import styled,{css,createGlobalStyle,ThemeProvider } from 'styled-components'
import Header from "./components/Header";
import Global from './components/Global';
import Wrapper from './components/Wrapper';
import Body_header from './components/Body_Header';

const themes = {
  background: "#fefefd",
  active: "#0b6df5",
  unactive:"#cccccb",
}
function App() {


  return (
    <ThemeProvider theme={themes}>
      <Header/>
      <Global/>
      fe
      <Wrapper>
        <Body_header>
          Send us a Message
        </Body_header>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
