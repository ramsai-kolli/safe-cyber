import { useState, useEffect, useContext } from 'react';

import { Box, styled, Divider } from '@mui/material';

// import { AccountContext } from '../../../context/AccountProvider';

//components
import Conversation from './Conversation';
// import { getUsers } from '../../../service/api';

const Component = styled(Box)`
    overflow: overlay;
    height: 81vh;
`;

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: .6;
`;

const Conversations = ({ email }) => {  // once text
    const [chats, setChats] = useState();
    const [user, setUser] = useState(null);
    // const { account, socket, setActiveUsers } = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async () => {
            // let data = await getUsers();
            // let fiteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            // setUsers(fiteredData);
        }
        fetchData();
    }, []);

    // useEffect(() => {
    //     socket.current.emit('addUser', account);
    //     socket.current.on("getUsers", users => {
    //         setActiveUsers(users);
    //     })
    // }, [account])

    useEffect(() => {
        const fetchData = async() => {
            // let data = await getUsers();
            // let fiteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            // setUsers(fiteredData);
            try{
                 await axios.post('https://safecyber-api.onrender.com/api/getuinfo',email).then(res=>{
                    if(res.data.success){
                    alert("retreived !");           
                    setUser(res.data.data);
                    setChats(res.data.data.chats);
                    console.log(res.data.data.chats)
                    }else{
                      alert("Error : to retrieve get-user-info");
                    }
                      })
                     // console.log("register")
                     
              }
              catch(error){
                  console.log('Error sending registration request',error);
              }
        }
        fetchData();
    }, [email]);

    return (
        <Component>
            {
                chats && chats.map((chat_id, index) => (
                    // user.sub !== account.sub && 
                        <>
                            <Conversation chat_id={chat_id} />
                            {
                                chats.length !== (index + 1)  && <StyledDivider />
                            }
                        </>
                ))
            }
        </Component>
    )
}

export default Conversations;