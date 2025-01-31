import { useState } from 'react';

import { Box } from '@mui/material';

//components
// import Header from './Header';
// import Search from './Search';
import Conversations from './Conversations';

const Menu = (props) => {
    const [text, setText] = useState('');
    // console.log(props.email,"at menu") // true
    return (
        <Box>
            {/* <Header/> */}
            {/* <Search setText={setText} /> */}
            <Conversations email={props.email} setallMsgsofChat={props.setallMsgsofChat} />
        </Box>
    )
}

export default Menu;