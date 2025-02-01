import { useState, useEffect, useContext, useRef } from "react";
import { Box, styled } from "@mui/material";
import axios from "axios";
// import { io } from 'socket.io-client';

// import { getMessages, newMessages } from '../../../service/api';
// import { AccountContext } from '../../../context/AccountProvider';

//components
import Message from "./Message";
import Footer from "./Footer";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
`;

const StyledFooter = styled(Box)`
  height: 55px;
  background: #ededed;
  // position: absolute;
  width: 100%;
  // bottom: 0
`;

const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

const Container = styled(Box)`
  padding: 1px 80px;
`;

const Messages = ({email, allMsgsofChat  ,setallMsgsofChat}) => {
  // const [incomingMessage, setIncomingMessage] = useState(null);
  const [value, setValue] = useState();
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  const scrollRef = useRef();

  //   const { account, socket, newMessageFlag, setNewMessageFlag } =
  //     useContext(AccountContext);

  //   useEffect(() => {
  //     socket.current.on("getMessage", (data) => {
  //       setIncomingMessage({
  //         ...data,
  //         createdAt: Date.now(),
  //       });
  //     });
  //   }, []);



    useEffect(() => {
      scrollRef.current?.scrollIntoView({ transition: "smooth" });
    }, [allMsgsofChat]);

  //   useEffect(() => {
  //     incomingMessage &&
  //       conversation?.members?.includes(incomingMessage.senderId) &&
  //       setMessages((prev) => [...prev, incomingMessage]);
  //   }, [incomingMessage, conversation]);

  //   const receiverId = conversation?.members?.find(
  //     (member) => member !== account.sub
  //   );

  const sendText = async (e) => {
    let code = e.keyCode || e.which;
    if (!value) return;
    if (code === 13) {
      let message = {};
      if (!file) {
        // message = {
        //   senderId: account.sub,
        //   receiverId: receiverId,
        //   conversationId: conversation._id,
        //   type: "text",
        //   text: value,
        // };
  message= {  chat_id :allMsgsofChat[0]?.chat_id ,
              chat_name:allMsgsofChat[0]?.chat_name,
              sentemail: email,  
              
            mdata:value}
      } else {
        message = {
          text: image,
          chat_id :allMsgsofChat[0]?.chat_id ,
              chat_name:allMsgsofChat[0]?.chat_name,
              sentemail: email,   
            mdata:value
        };
      }
      // socket.current.emit("sendMessage", message);
      const postMsg = async() => {
        // let data = await getUsers();
        // let fiteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
        // setUsers(fiteredData);
        try{
             await axios.post('https://safecyber-api.onrender.com/api/pushmsg',message).then(res=>{
                if(res.data.success){
            
                console.log("successfully pushed/uploaded the msg")
                }else{
                  alert("Error : to push msg  ");
                }
                  })
                 // console.log("register")
                 
          }
          catch(error){
              console.log('Error sending registration request',error);
          }
    }
    postMsg();
      setValue("");
      setFile();
      setImage("");
      // setNewMessageFlag((prev) => !prev);
    }
  };

  return (
    <Wrapper>
      <Component>
        {allMsgsofChat &&
          allMsgsofChat.map((message) => (
            <Container ref={scrollRef}>
              <Message message={message} email={email} />
            </Container>
          ))}
      </Component>
      <Footer
        sendText={sendText}
        value={value}
        setValue={setValue}
        setFile={setFile}
        file={file}
        setImage={setImage}
      />
    </Wrapper>
  );
};

export default Messages;
