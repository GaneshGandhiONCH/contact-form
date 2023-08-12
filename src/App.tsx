import styled,{css,createGlobalStyle,ThemeProvider } from 'styled-components'
import Header from "./components/Header";
import Global from './components/Global';

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
      fefwefwefwe
    </ThemeProvider>
  )
}

export default App
