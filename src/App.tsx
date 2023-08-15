import {useReducer,createContext,useRef} from "react";
import {ThemeProvider} from 'styled-components'
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
import MessageIcon from "./components/MessageIcon";
import ButtonArea from "./components/ButtonArea";
import Button from "./components/Button";
import Span from "./components/Span";

import PERSON_ICONU from "./assets/icons/PERSON_ICONU.svg";
import PERSON_ICONW from "./assets/icons/PERSON_ICONW.svg";

import EMAIL_ICONU from "./assets/icons/EMAIL_ICONU.svg";
import EMAIL_ICONW from "./assets/icons/EMAIL_ICONW.svg";

import PHONE_ICONU from "./assets/icons/PHONE_ICONU.svg";
import PHONE_ICONW from "./assets/icons/PHONE_ICONW.svg";

import WEBSITE_ICONU from "./assets/icons/WEBSITE_ICONU.svg";
import WEBSITE_ICONW from "./assets/icons/WEBSITE_ICONW.svg";


import MESSAGE_ICONU from "./assets/icons/MESSAGE_ICONU.svg";
import MESSAGE_ICONW from "./assets/icons/MESSAGE_ICONW.svg";
const myContext = createContext<any>('');
interface Focus {
  name:boolean,
  email:boolean,
  phone:boolean,
  website:boolean,
  message:boolean,
}
interface InitialState {
  name: string;
  email: string;
  phone: string;
  website: string;
  message:string;
  focus: Focus;
}
const initialState:InitialState = {
  name:'',
  email:'',
  phone:'',
  website:'',
  message:'',
  focus: {
    name: false,
    email: false,
    phone: false,
    website: false,
    message: false
  },
}
type ActionType = {
  type: string;
  payload?: any;
};
const Reducer = (state: typeof initialState, action: ActionType) => {
  const newState = { ...state };
  switch (action.type) {
    case "name":
      newState.name = action.payload;
      break;
    case "email":
      newState.email = action.payload;
      break;
    case "phone":
      newState.phone = action.payload;
      break;
    case "website":
      newState.website = action.payload;
      break;
    case "message":
      newState.message = action.payload;
      break;
    case "Fname": // focus name
      newState.focus.name = action.payload;
      break;
    case "Femail":
      newState.focus.email = action.payload;
      break;
    case "Fphone":
      newState.focus.phone = action.payload;
      break;
    case "Fwebsite":
      newState.focus.website = action.payload;
      break;
    case "Fmessage":
      newState.focus.message = action.payload;
      break;
    default:
      throw new Error("Unknown action type");
  }

  return newState; 
};

const themes = {
  background: "#0D6EFD",
  active: "#0D6EFD",
  unactive:"#bfbfbf",
  white:"#fff",
}

function App() {
  const [data,dispatch] = useReducer(Reducer,initialState);
  const spanRef=useRef<any>();
  function dispatching(type: string, payload: boolean) {
    dispatch({
      type: type,
      payload: payload,
    });
  }
  const inputData1 = [
    {
      content:"name",
      img:data.focus.name ? PERSON_ICONW : PERSON_ICONU,
      value:data.name,
      onChange:(e:any) => dispatching('name',e.target.value),
      onFocus:() => dispatching('Fname',true),
      onBlur:() => dispatching('Fname',false),
    },
    {
      content:"email",
      img:data.focus.email ? EMAIL_ICONW : EMAIL_ICONU,
      value:data.email,
      onChange:(e:any) => dispatching('email',e.target.value),
      onFocus:() => dispatching('Femail',true),
      onBlur:() => dispatching('Femail',false),
    },
  ]
  const inputData2 = [
    {
      content:"phone",
      img:data.focus.phone ? PHONE_ICONW : PHONE_ICONU, 
      value:data.phone,
      onChange:(e:any) => dispatching('phone',e.target.value),
      onFocus:() => dispatching('Fphone',true),
      onBlur:() => dispatching('Fphone',false),
    },
    {
      content:"website",
      img:data.focus.website ? WEBSITE_ICONW : WEBSITE_ICONU,
      value:data.website,
      onChange:(e:any) => dispatching('website',e.target.value),
      onFocus:() => dispatching('Fwebsite',true),
      onBlur:() => dispatching('Fwebsite',false),
    },
  ]
  function onSubmit(e:any) {
     e.preventDefault();
     let xhr = new XMLHttpRequest(); // create new xml object for communicate with a server without having to reload the page. This is known as AJAX (Asynchronous JavaScript and XML).
     xhr.open("POST","message.php",true); // sending post request to message.php file
     xhr.onload = () => {// once ajax loaded
      if(xhr.readyState ==4 && xhr.status == 200) {// this means a situation where there is no error
        let response = xhr.response; // storing ajax response in a variable;
        console.log(response);
      }
     }
     xhr.send();
  }

  return (
    <ThemeProvider theme={themes}>
      <myContext.Provider value={{data,dispatching}}>
      <Header/>
      <Global/>
      <Wrapper>
        <Body_header>Send us a Message</Body_header>
        <Form onSubmit={(e:any) => onSubmit(e)} action="#">
          <DoubleField>
            {inputData1.map((data:any,idx:number) => (
            <Field key={idx}>
              <Input 
              type="text" 
              placeholder={`Enter your ${data.content}`} 
              value={data.value} onChange={data.onChange} 
              onFocus={data.onFocus} 
              onBlur={data.onBlur}/>
              <FieldIcon src={data.img} alt={`${data.content} icon`}/>
            </Field>
            ))}
          </DoubleField>
          <DoubleField>
            {inputData2.map((data:any,idx:number) => (
             <Field key={idx}>
              <Input 
              type="text" 
              placeholder={`Enter your ${data.content}`} 
              value={data.value} 
              onChange={data.onChange}
              onBlur={data.onBlur} 
              onFocus={data.onFocus}/>
              <FieldIcon src={data.img} alt={`${data.content} icon`}/>
             </Field>
            ))}
          </DoubleField>
          <Message>
            <Textarea 
            placeholder="Write your message" 
            value={data.message} 
            onChange={(e:any) => {dispatching('message',e.target.value)}}
            onFocus={() => {dispatching('Fmessage',true)}}
            onBlur={() => {dispatching('Fmessage',false)}}
            ></Textarea>
            <MessageIcon src={data.focus.message ? MESSAGE_ICONW : MESSAGE_ICONU} alt="message icon"/>
          </Message>
          <ButtonArea>
            <Button type="submit" onClick={() => {spanRef.current.style.display = "block"}}>Send message</Button>
            <Span ref={spanRef}>Sending your message....</Span>
          </ButtonArea>
        </Form>
      </Wrapper>
      </myContext.Provider>
    </ThemeProvider>
  )
}

export default App
