import {  useState, useEffect } from "react";
import { Box } from "@mui/material";

//components
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

const ChatBox = (props) => {
  

  const [conversation, setConversation] = useState({});

  // useEffect(() => {
  //   const getConversationDetails = async () => {
  //     let data = "";
  //     //   await getConversation({
  //     //     senderId: account.sub,
  //     //     receiverId: person.sub,
  //     //   });
  //     setConversation(data);
  //   };
  //   getConversationDetails();
  // }, []);
  // //   [person.sub]);

  return (
    <Box style={{ height: "75%" }}>
      <ChatHeader email={props.email} allMsgsofChat={props.allMsgsofChat}  setallMsgsofChat={props.setallMsgsofChat} />
      <Messages  email={props.email} allMsgsofChat={props.allMsgsofChat}  setallMsgsofChat={props.setallMsgsofChat}  />
    </Box>
  );
};

export default ChatBox;
