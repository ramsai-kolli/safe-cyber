import React from "react";
import "./styles/Header.css";
export default function Header({email}) {
  function goregister() {
    window.location.href = `/register`;
  }
  function gologin() {
    window.location.href = `/login`;
  }
  function gohome(){
    window.location.href= `/`;
  }
  let flag=true;
  if(email)
  {
    flag=false;
  }
  else{
   flag=true;
  }
  
  return (
    <div className="home-head">
      <div className="home-first">
        <div className="outer-img">
          <div className="home-img" ></div>
        </div>

        <p className="home-name" onClick={gohome}  >
          SafeCyber
        </p>
      </div>
      <div>

     { flag && <><button className="heads-signup" onClick={goregister}>
        Signup
      </button>
      <button className="heads-login" onClick={gologin}>
        Login
      </button>
      </>
     }
      </div>
    </div>
  );
}
