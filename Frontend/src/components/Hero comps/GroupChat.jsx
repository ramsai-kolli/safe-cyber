import React, {useState} from 'react';

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
    <div>GroupChat
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
        
        <p>successful group chat</p>
        </>
      }
      </div>
  )
}
export default GroupChat;
