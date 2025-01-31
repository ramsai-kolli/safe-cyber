import React from 'react'
import ScamTrend from './ScamTrend';
import NewsTrend from './NewsTrend';
import '../styles/Trending.css';
import { useState } from 'react';

 function Trending() {
    const [component,setComponent]= useState('Scam');

    const goscam =()=>{ setComponent('Scam')}
    const gosearch=()=>{ setComponent('News')}
 
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
        
       </div>

      </div>
    );
}
export default Trending;
