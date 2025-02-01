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
      const handleSubmit =async ()=>{
        
          // let data = await getUsers();
          // let fiteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
          // setUsers(fiteredData);
          try{
               await axios.post('https://safecyber-api.onrender.com/api/sendm',message).then(res=>{
                  if(res.data.success){
              
                  console.log("successfully pushed/uploaded the msg")
                  }else{
                    alert("Error : to push msg  ");
                  }
                    })
                   // console.log("register")
                   
            }
            catch(error){
                console.log('Error sending registration request',error);
            }
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
     <button className="btn-com" onClick={handleSubmit}>submit</button>
    
    </div>
      }
    </div>
    
  )
}
