import React from "react";
import "./styles/Header.css";
export default function Header() {
  function gochatbot() {
    window.location.href = "/chatbot";
  }
  function gohome() {
    window.location.href = "/";
  }
  return (
    <div className="home-head">
      <div className="home-first">
        <div className="outer-img">
          <div className="home-img"></div>
        </div>

        <p className="home-name" onClick={gohome}>
          SafeCyber
        </p>
      </div>
      <div>
      <button className="heads-signup" onClick={gochatbot}>
        Signup
      </button>
      <button className="heads-login" onClick={gochatbot}>
        Login
      </button>
      </div>
    </div>
  );
}
