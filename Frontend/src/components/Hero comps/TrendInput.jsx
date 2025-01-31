import React from 'react';
import { useState } from 'react';
import { Dialog , styled} from '@mui/material';


function TrendInput(props){
    const [isdailog,setisdailog] = useState(false);

function showDailog() {
    setisdailog(!isdailog);
   }

   const dialogStyle = {
     marginTop: '12%',
     height: '45%',
     width: '40%',
     maxWidth: '100%',
     maxHeight: '100%',
     display:'flex',
     alignItems:'center',
     justifyContent:'center',
     gap:'10px',
     borderRadius: 0,
     overflow: 'hidden',
     backgroundColor:'white',
     textAlign:'center',

 }

return (
<>
<button className="raise" onClick={showDailog}>Raise a {props.catgry}</button>
       { isdailog &&
       <div className='trend-inp-main'>
        <Dialog
            open={true}
            BackdropProps={{style: {backgroundColor: 'unset'}}}
            maxWidth={'md'}
            PaperProps={{ sx: dialogStyle }}
        >
        <textarea className='trend-inp-input' placeholder='Enter the Scam'></textarea>

        <button className="trend-scam-btn" onClick={showDailog}>Submit</button>   
        </Dialog>
       </div>
     }
     </>
    );
}
export default TrendInput;