import {useState} from "react";
import styled,{css,createGlobalStyle,ThemeProvider } from 'styled-components'
import Header from "./components/Header";
import Global from './components/Global';
import Wrapper from './components/Wrapper';
import Body_header from './components/Body_header';

import PERSON_ICON from "./assets/icons/PERSON_ICON.svg";
import EMAIL_ICON from "./assets/icons/EMAIL_ICON.svg";
import PHONE_ICON from "./assets/icons/PHONE_ICON.svg";
import WEBSITE_ICON from "./assets/icons/WEBSITE_ICON.svg";
import MESSAGE_ICON from "./assets/icons/MESSAGE_ICON.svg";

const themes = {
  background: "#fefefd",
  active: "#0D6EFD",
  unactive:"#cccccb",
}

function App() {
  const [cName,sName] = useState();
  const [cEmail,sEmail] = useState();
  const [cPhone,sPhone] = useState();
  const [cWebsite,sWebsite] = useState();

  const inputData = [
    {
      content:"name",
      img:PERSON_ICON,
      value:cName,
      onChange:(e:any) => sName(e.target.value),
    },
    {
      content:"email",
      img:EMAIL_ICON,
      value:cEmail,
      onChange:(e:any) => sEmail(e.target.value),
    },
    {
      content:"phone",
      img:PHONE_ICON,
      value:cPhone,
      onChange:(e:any) => sPhone(e.target.value),
    },
    {
      content:"website",
      img:WEBSITE_ICON,
      value:cWebsite,
      onChange:(e:any) => sWebsite(e.target.value),
    },
  ]
  return (
    <ThemeProvider theme={themes}>
      <Header/>
      <Global/>
      <Wrapper>
        <Body_header>Send us a Message</Body_header>
        <form action="#">
          <div className='dbl-field'>
            {inputData.map((data:any,idx:number) => (
              <div className="field" key={idx}>
              <input type="text" name={data.content} id={data.content} placeholder={`Enter your ${data.content}`} value={data.value} onChange={data.onChange}/>
              <img src={data.img} alt={`${data.content} icon`} />
            </div>
            ))}
          </div>
          <div className="message">
            <textarea placeholder="Write your message"></textarea>
            <img src={MESSAGE_ICON} alt="message icon" />
          </div>
          <div className="button-area">
            <button type="submit">Send message</button>
            <span>Sending your message....</span>
          </div>
        </form>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
