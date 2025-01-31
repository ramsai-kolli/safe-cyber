// import { ChatContainer, MessageInput } from "@chatscope/chat-ui-kit-react";
import ChatBox from "./ChatBox";
import Menu from "./Menu/Menu";

function TotalChat(props) {
  return (
     <div style={{ display: 'flex' }}>
        <div style={{ flex: 0.3, margin: '0 10px',width:'10%',backgroundColor:'grey' }}> <Menu email={props.email}/></div>
        <div style={{ flex: 0.7, margin: '0 10px' }}>      <ChatBox /></div>
   </div>
  );
}

export default TotalChat;
