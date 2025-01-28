import Homecomp from "./Homecomp";
import ContentSensor from "./ContentSensor";
import Misinfo from "./Misinfo";
import AiChatBot from "./AiChatBot";
import { useState } from "react";
import '../styles/Hero.css'
function Hero() {
  const [comp, setComp] = useState(1);
  let componentToDisplay;
  switch (comp) {
    case 1:
      componentToDisplay = <Homecomp />;
      break;
    case 2:
      componentToDisplay = <ContentSensor />;
      break;
    case 3:
      componentToDisplay = <Misinfo />;
      break;
    case 4:
      componentToDisplay = <AiChatBot />;
      break;
    default:
      componentToDisplay = null;
  }
  return (
    <div>
  <div className="home-nav">
        <p onClick={()=>{setComp(1)}}>Home</p>
        <p onClick={()=>{setComp(2)}}>Content Sensor</p>
        <p onClick={()=>{setComp(3)}}>Misinfo Validation</p>
        <p onClick={()=>{setComp(4)}}>Gemini Chatbot</p>
      </div>
      <div>
       
      <div>{componentToDisplay}</div>
      </div>   
    </div>
  );
}
export default Hero;
