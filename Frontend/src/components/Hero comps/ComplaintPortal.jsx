import '../styles/ComplaintPortal.css';
import React from 'react'


export default function ComplaintPortal({email}) {
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
      { !flag &&
    <div className="div1-com" >

    <p className="para-com">ComplaintPortal</p>
     <div className="div2-com">
     <textarea className="textarea-com"></textarea>
     </div>
     <button className="btn-com">submit</button>
    
    </div>
      }
    </div>
    
  )
}
