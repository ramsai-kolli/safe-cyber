import { useContext, useEffect, useState } from 'react';

import { styled, Box, Typography } from "@mui/material";

// import { UserContext } from '../../../context/UserProvider';
// import { AccountContext } from '../../../context/AccountProvider';
import axios from 'axios';
// import { setConversation, getConversation } from '../../../service/api';
// import { emptyProfilePicture } from '../../../constants/data';
// import { formatDate } from '../../../utils/common-utils';

const Component = styled(Box)`
    height: 45px;
    display: flex;
    padding: 13px 0;
    cursor: pointer;
`;
    
const Image = styled('img') ({
    width: 50,
    height: 50,
    objectFit: 'cover',
    borderRadius: '50%',
    padding: '0 14px'
});

const Container = styled(Box)`
    display: flex;
`;

const Timestamp = styled(Typography)`
    font-size: 12px;
    margin-left: auto;
    color: #00000099;
    margin-right: 20px;
`;

const Text = styled(Typography)`
    display: block;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
`;

const Conversation = (props) => {  // once user
    // const url = user.picture || emptyProfilePicture;
    
    // const { setPerson } = useContext(UserContext);
    // const { account, newMessageFlag }  = useContext(AccountContext);

    const [message, setMessage] = useState([{
        chat_id: 1,
        chat_name: "og gang",
        sentemail: "charan@gmail.com",
        sentname: "chaitanya",
        time: "time",
        mdata: "hi brooo 1 ",
      },{
        chat_id: 1,
        chat_name: "og gang",
        sentemail: "charan@gmail.com",
        sentname: "chaitanya",
        time: "time",
        mdata: "hi brooo 2 ",
      }]);

    useEffect(() => {
        const getConversationMessage = async() => {
            // const data = await getConversation({ senderId: account.sub, receiverId: user.sub });
            // setMessage({ text: data?.message, timestamp: data?.updatedAt });

            try{
                await axios.post('https://safecyber-api.onrender.com/api/getmsg',{chat_id: props.chat_id}).then(res=>{
                   if(res.data.success){
                //    alert("retreived !");           
                   console.log("conversation.jsx : -> ",res.data.data)
               
               
                // setMessage(res.data.data)
                   }else{
                     alert("Error : to retrieve getmsg");
                   }
                     })
                    // console.log("register")
                    
             }
             catch(error){
                 console.log('Error sending registration request',error);
             }
        }
        getConversationMessage();
    }, []);

    const getChat = async () => {
        props.setCurrentChatId(props.chat_id)
    }

    return (
        <Component onClick={() => getChat()}>
            <Box>
                {/* <Image src={url} alt="display picture" /> */}
            </Box>
            <Box style={{width: '100%'}}>
                <Container>
                    <Typography>{"chat id : "+props.chat_id}</Typography>
                    { 
                        // message.mdata
                        // <Timestamp>{formatDate(message?.timestamp)}</Timestamp>        
                    }
                </Container>
                <Box>
                    <Text>{message[message.length - 1].mdata}</Text>
                </Box>
            </Box>
        </Component>
        // <p>this is for one</p>
    )
}

export default Conversation;