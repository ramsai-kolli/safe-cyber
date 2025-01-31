import Homecomp from "./Homecomp";
import ContentSensor from "./ContentSensor";
import Misinfo from "./Misinfo";
import AiChatBot from "./AiChatBot";
import GroupChat from "./GroupChat";
import ComplaintPortal from "./ComplaintPortal";
import { useState } from "react";
import '../styles/Hero.css'
import Trending from "./Trending";
import Logout from "../Separate Comps/Logout";
function Hero({email}) {
  // const [tab,setTab]=useState(0);
  let flag=true;
  if (email) {
    console.log("mail is",email);
    flag=true;
  } else {
    console.log("Nothing received");
    flag=false;
  }
  const [comp, setComp] = useState(1);
  const handlechild = (childData)=>{
       setComp(childData);
  }
  let componentToDisplay;
  switch (comp) {
    case 1:
      componentToDisplay = <Homecomp sendData={handlechild}/>;
      break;
    case 2:
      componentToDisplay = <ContentSensor />;
      break;
    case 3:
      componentToDisplay = <Misinfo />;
      break;
    case 4:
      componentToDisplay = <Trending/>;
      break;
    case 5:
      componentToDisplay = <GroupChat email={email}/>;
      break;
    case 6:
        componentToDisplay = <AiChatBot />;  
      break;
    case 7:
        componentToDisplay = <ComplaintPortal email={email}/>; 
        break; 
    default:
      componentToDisplay = null;
  }
  return (
    <div className="home-main">
      <div className="home-comp-bar">
  <div className="home-nav">
        <p onClick={()=>{setComp(1)}} className={comp === 1 ? "active-tab" : ""}>Home</p>
        <p onClick={()=>{setComp(2)}} className={comp === 2 ? "active-tab" : ""}>Abuse Censor</p>
        <p onClick={()=>{setComp(3)}} className={comp === 3 ? "active-tab" : ""}>Fact Check</p>
        <p onClick={()=>{setComp(4)}} className={comp === 4 ? "active-tab" : ""}>Trending</p>
        <p onClick={()=>{setComp(5)}} className={comp === 5 ? "active-tab" : ""}>Group Chat</p>
        <p onClick={()=>{setComp(6)}} className={comp === 6 ? "active-tab" : ""}>Gemini Chatbot</p>
        <p onClick={()=>{setComp(7)}} className={comp === 7 ? "active-tab" : ""}>Complaint Portal</p>
        
      </div>
      <div className="hero-logout">
        { flag &&
          <Logout/>
        }
      </div>
      </div>
      <div>
        
     {componentToDisplay}
      </div>   
    </div>
  );
}
export default Hero;
