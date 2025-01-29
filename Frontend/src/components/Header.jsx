import React from "react";
import "./styles/Header.css";
export default function Header() {
  function goregister() {
    window.location.href = `/register`;
  }
  function gologin() {
    window.location.href = `/login`;
  }
  return (
    <div className="home-head">
      <div className="home-first">
        <div className="outer-img">
          <div className="home-img"></div>
        </div>

        <p className="home-name"  >
          SafeCyber
        </p>
      </div>
      <div>
      <button className="heads-signup" onClick={goregister}>
        Signup
      </button>
      <button className="heads-login" onClick={gologin}>
        Login
      </button>
      </div>
    </div>
  );
}
