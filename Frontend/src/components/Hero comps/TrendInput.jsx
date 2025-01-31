import React from 'react';
import { useState } from 'react';
import { Dialog , styled} from '@mui/material';
import '../styles/trending.css';


function TrendInput(props){
const [isdailog,setisdailog] = useState(false);

function showDailog() {
    setisdailog(!isdailog);
   }

   const dialogStyle = {
     marginTop: '12%',
     height: '45%',
     width: '50%',
     maxWidth: '100',
     maxHeight: '100%',
     borderRadius: 0,
     // boxShadow: 'none',
     overflow: 'hidden',
     backgroundColor:'grey'
 }

return (
<>
<button className="raise" onClick={showDailog}>Raise a {props.catgry}</button>
       { isdailog &&
       <div>
        <Dialog
            open={true}
            BackdropProps={{style: {backgroundColor: 'unset'}}}
            maxWidth={'md'}
            PaperProps={{ sx: dialogStyle }}
        > 
        <p> this is sample </p>
        <button className="raise" onClick={showDailog}>Submit</button>
        </Dialog>
       </div>
     }
     </>
    );
}
export default TrendInput;