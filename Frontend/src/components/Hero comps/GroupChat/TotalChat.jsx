// import { ChatContainer, MessageInput } from "@chatscope/chat-ui-kit-react";
import ChatBox from "./ChatBox";
import Menu from "./Menu/Menu";

function TotalChat(props) {
  return (
     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1, margin: '0 10px' }}> <Menu email={props.email}/></div>
        <div style={{ flex: 1, margin: '0 10px' }}>      <ChatBox /></div>
   </div>
  );
}

export default TotalChat;
