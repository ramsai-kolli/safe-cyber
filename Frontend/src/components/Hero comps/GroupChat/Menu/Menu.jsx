import { Box } from '@mui/material';

import Conversations from './Conversations';

const Menu = (props) => {
    return (
        <Box>
            <Conversations email={props.email} setallMsgsofChat={props.setallMsgsofChat} />
        </Box>
    )
}

export default Menu;