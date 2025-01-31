import React from 'react'
import ScamTrend from './ScamTrend';
import NewsTrend from './NewsTrend';
import '../styles/Trending.css';
import { useState } from 'react';
import { Dialog , styled} from '@mui/material';
 function Trending() {
    const [component,setComponent]= useState('Scam');
    const [isdailog,setisdailog] = useState(false);
    const goscam =()=>{ setComponent('Scam')}
    const gosearch=()=>{ setComponent('News')}
    function showDailog() {
     setisdailog(!isdailog);
    }
    const dialogStyle = {
      marginTop: '12%',
      height: '95%',
      width: '60%',
      maxWidth: '100',
      maxHeight: '100%',
      borderRadius: 0,
      boxShadow: 'none',
      overflow: 'hidden'
  }
    return (
      <div className="trending-main">
       <div className="trending-head">
        <p onClick={goscam}>Trending Scam</p>
        <p onClick={gosearch}>Trending Searches</p>
       </div>
       <div className="trending-hero">
        {
          component=='Scam' && <ScamTrend/>
        }
        {
          component=='News' && <NewsTrend/>
        }
        {
          component==null && <div><p>Please select a option</p></div>
        }
       </div>
       <button className="raise" onClick={showDailog}>Raise a news</button>
       { isdailog &&
       <div>
        <Dialog
            open={true}
            BackdropProps={{style: {backgroundColor: 'unset'}}}
            maxWidth={'md'}
            PaperProps={{ sx: dialogStyle }}
        > 
        <p> this is sample </p>
        </Dialog>
       </div>
     }
      </div>
    );
}
export default Trending;
