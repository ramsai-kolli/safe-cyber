// import { useContext } from 'react';
import { Dialog, styled, Box } from '@mui/material';
import { useState } from 'react';

// import { UserContext } from '../../context/UserProvider';

//components
import Menu from './Menu/Menu'
import ChatBox from './ChatBox';
// import EmptyChat from './EmptyChat';

const Component = styled(Box)`
    display: flex;
`;
    
const LeftComponent = styled(Box)`
    min-width: 450px;
`;
    
const RightComponent = styled(Box)`
    width: 73%;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const dialogStyle = {
    height: '95%',
    width: '100%',
    margin: '20px',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'
};

const ChatDialog = (props) => {

    // const { person } = useContext(UserContext);
    const [currentUserInfo, setCurrentUserInfo] = useState();
    
    return (
       <div>
            <Component>
                <LeftComponent>
                    <Menu email={props.email} setCurrentUserInfo={setCurrentUserInfo} />
                </LeftComponent>
                <RightComponent>
                    
                     <ChatBox email={props.email} currentUserInfo={currentUserInfo}  setCurrentUserInfo={setCurrentUserInfo}/>
                    
                </RightComponent>
            </Component>
        </div>
    )
}

export default ChatDialog;