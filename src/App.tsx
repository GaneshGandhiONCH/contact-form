import {useReducer} from "react";
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

import PERSON_ICON from "./assets/icons/PERSON_ICON.svg";
import EMAIL_ICON from "./assets/icons/EMAIL_ICON.svg";
import PHONE_ICON from "./assets/icons/PHONE_ICON.svg";
import WEBSITE_ICON from "./assets/icons/WEBSITE_ICON.svg";
import MESSAGE_ICON from "./assets/icons/MESSAGE_ICON.svg";

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
interface Focus {
  name:boolean,
  email:boolean,
  phone:boolean,
  website:boolean,
  message:boolean,
}


function App() {
 
  const [data,dispatch] = useReducer(Reducer,initialState);
  console.log(data.name)
  function dispatching(type: string, payload: boolean) {
    dispatch({
      type: type,
      payload: payload,
    });
  }

  const inputData1 = [
    {
      content:"name",
      img:PERSON_ICON,
      value:data.name,
      onChange:(e:any) => dispatching('name',e.target.value),
    },
    {
      content:"email",
      img:EMAIL_ICON,
      value:data.email,
      onChange:(e:any) => dispatching('email',e.target.value),
    },
  ]
  const inputData2 = [
    {
      content:"phone",
      img:PHONE_ICON,
      value:data.phone,
      onChange:(e:any) => dispatching('phone',e.target.value),
    },
    {
      content:"website",
      img:WEBSITE_ICON,
      value:data.website,
      onChange:(e:any) => dispatching('website',e.target.value),
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
              <Input type="text" placeholder={`Enter your ${data.content}`} value={data.value} onChange={data.onChange} onFocus={data.onFocus}/>
              <FieldIcon src={data.img} alt={`${data.content} icon`}/>
            </Field>
            ))}
          </DoubleField>
          <DoubleField>
            {inputData2.map((data:any,idx:number) => (
             <Field key={idx}>
              <Input type="text" placeholder={`Enter your ${data.content}`} value={data.value} onChange={data.onChange} onFocus={data.onFocus}/>
              <FieldIcon src={data.img} alt={`${data.content} icon`}/>
             </Field>
            ))}
          </DoubleField>
          <Message className="message">
            <Textarea placeholder="Write your message" value={data.message} onChange={(e:any) => {dispatching('message',e.target.value)}}></Textarea>
            <MessageIcon src={MESSAGE_ICON} alt="message icon"/>
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
