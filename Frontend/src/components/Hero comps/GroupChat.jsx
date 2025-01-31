import React, {useState} from 'react';
import '../styles/GroupChat.css'
import TotalChat from './GroupChat/TotalChat';
function GroupChat({email}) {
    let flag=true;
    if(email)
    {
      flag=false;
    }
    else{
      flag=true;
    }
    const handleClick = ()=>{
        window.location.href='/register';
      }
  return (
    <div>
    {flag && (
        <div className="login-prompt">
          <div className="login-box">
            <p>Please login to access this feature.</p>
            <button onClick={handleClick}>Login</button>
          </div>
        </div>
      )}
      {
        !flag && <>
        
        <TotalChat email={email}/>
        </>
      }
      </div>
  )
}
export default GroupChat;
