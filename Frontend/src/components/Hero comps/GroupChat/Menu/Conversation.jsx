import { useEffect, useState } from 'react';
import { styled, Box, Typography } from "@mui/material";
import axios from 'axios';
// import { emptyProfilePicture } from '../../../constants/data';
import defaultProfilePicture from "../emtyprof.jpg";


const formatDate = (date) => {
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
}
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

    const [message, setMessage] = useState();

    useEffect(() => {
        const getConversationMessage = async() => {
           
            try{
                await axios.post('https://safecyber-api.onrender.com/api/getmsg',{chat_id: props.chat_id}).then(res=>{
                   if(res.data.success){
                       
                   console.log("conversation.jsx : const messages -> ",res.data.msgs)
               
               
                setMessage(res.data.msgs)
                   }else{
                     alert("Error : to retrieve getmsg");
                   }
                     })                    
             }
             catch(error){
                 console.log('Error sending registration request',error);
             }
        }
        getConversationMessage();
    }, []);

    const getChat = async () => {
        props.setallMsgsofChat(message)
    }

    return (
        <>
        {!message ? "loading convrsation" : <Component onClick={() => getChat()}>
            <Box>
                 <Image src={defaultProfilePicture} alt="display picture" /> 
            </Box>
            <Box style={{width: '100%'}}>
                <Container>
                    <Typography>{ message[0] ? message[0].chat_name:"no name (null)"  }</Typography>
                    { 
                        // message.mdata
                        <Timestamp>
                            {formatDate( message.length > 0 ? message[message.length - 1].time : "")}
                            </Timestamp>        
                    }
                </Container>
                <Box>
                    <Text>
                        {message.length > 0 ? message[message.length - 1].mdata : "No messages"}
                        
                    </Text>
                </Box>
            </Box>
        </Component>
}
        </>
    )
}

export default Conversation;
