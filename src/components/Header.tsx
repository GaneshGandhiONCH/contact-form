import { Helmet } from "react-helmet";
import HELMET_ICON from "../assets/HELMET_ICON.svg"
function Header() {
    return (
      <Helmet>
      <link rel="icon" href={HELMET_ICON} /> 
      <title>Contact form</title> 
      </Helmet>
    )
  }
  
  export default Header;
  