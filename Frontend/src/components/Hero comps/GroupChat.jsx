import React, {useState} from 'react';

function GroupChat() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleClick = ()=>{
        window.location.href='/register';
      }
  return (
    <div>GroupChat
    {!isLoggedIn && (
        <div className="login-prompt">
          <div className="login-box">
            <p>Please login to access this feature.</p>
            <button onClick={handleClick}>Login</button>
          </div>
        </div>
      )}
      </div>
  )
}
export default GroupChat;
