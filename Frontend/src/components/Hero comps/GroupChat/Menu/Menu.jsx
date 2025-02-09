import { Box } from '@mui/material';

import HeaderMenu from './HeaderMenu';
import Conversations from './Conversations';

const Menu = (props) => {
    return (
        <Box>
            <HeaderMenu />
            <Conversations email={props.email} setallMsgsofChat={props.setallMsgsofChat} />
        </Box>
    )
}

export default Menu;