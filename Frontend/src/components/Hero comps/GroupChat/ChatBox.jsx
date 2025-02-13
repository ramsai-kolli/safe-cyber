import {  useState, useEffect } from "react";
import { Box } from "@mui/material";

//components
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

const ChatBox = (props) => {
  

  const [conversation, setConversation] = useState({});


  return (
    <Box style={{ height: "75%" }}>
      <ChatHeader email={props.email} allMsgsofChat={props.allMsgsofChat}   />
      <Messages  email={props.email} allMsgsofChat={props.allMsgsofChat} refreshFunc={props.refreshFunc} />
    </Box>
  );
};

export default ChatBox;
