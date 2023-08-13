import {useState} from "react";
import styled,{css,createGlobalStyle,ThemeProvider } from 'styled-components'
import Header from "./components/Header";
import Global from './components/Global';
import Wrapper from './components/Wrapper';
import Body_header from './components/Body_header';
import Form from "./components/Form";
import DoubleField from "./components/DoubleField";
import Field from "./components/Field";
import Input from "./components/Input";
import Message from "./components/Message";
import Textarea from "./components/Textarea";
import FieldIcon from "./components/FieldIcon";

import PERSON_ICON from "./assets/icons/PERSON_ICON.svg";
import EMAIL_ICON from "./assets/icons/EMAIL_ICON.svg";
import PHONE_ICON from "./assets/icons/PHONE_ICON.svg";
import WEBSITE_ICON from "./assets/icons/WEBSITE_ICON.svg";
import MESSAGE_ICON from "./assets/icons/MESSAGE_ICON.svg";

const themes = {
  background: "#0D6EFD",
  active: "#fefefd",
  unactive:"#bfbfbf",
}

function App() {
  const [cName,sName] = useState();
  const [cEmail,sEmail] = useState();
  const [cPhone,sPhone] = useState();
  const [cWebsite,sWebsite] = useState();

  const inputData1 = [
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
  ]
  const inputData2 = [
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
        <Form action="#">
          <DoubleField>
            {inputData1.map((data:any,idx:number) => (
            <Field key={idx}>
              <Input type="text" name={data.content} id={data.content} placeholder={`Enter your ${data.content}`} value={data.value} onChange={data.onChange}/>
              <FieldIcon src={data.img} alt={`${data.content} icon`}/>
            </Field>
            ))}
          </DoubleField>
          <DoubleField>
            {inputData2.map((data:any,idx:number) => (
             <Field key={idx}>
              <Input type="text" name={data.content} id={data.content} placeholder={`Enter your ${data.content}`} value={data.value} onChange={data.onChange}/>
              <FieldIcon src={data.img} alt={`${data.content} icon`}/>
             </Field>
            ))}
          </DoubleField>
          <Message className="message">
            <Textarea placeholder="Write your message"></Textarea>
            <FieldIcon src={MESSAGE_ICON} alt="message icon"/>
          </Message>
          <div className="button-area">
            <button type="submit">Send message</button>
            <span>Sending your message....</span>
          </div>
        </Form>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
