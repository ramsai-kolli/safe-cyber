 import "./styles/Login.css";
// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
import Header from "./Header";
// import doctorpic from "../assets/logindoctor.jpg";
// import startuppic from "../assets/loginstartup.jpg";
// import farmerpic from "../assets/loginfarmer.jpg";
// import drugpic from "../assets/logindrug.jpg";
// import authorpic from "../assets/loginauthority.jpg";

// import LoadingPage from "../components/Separate Comps/LoadingPage";


import React,{ useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';


function Login(){
   const [user, setUser] = useState({
        
       email : "",
       password : "",
         
   });

   const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
 const goregister = ()=>{
    window.location.href=`/register`;
 }

    const submitHandler = (e) => {
      e.preventDefault();
      console.log("submit handle");
      if(user.password.length<6) 
      {
          alert('password must contain 6 letters');
       }
      try{
          axios.post('http://localhost:5555/login',user).then(res=>{
                  alert("login Succesfully!");
                  console.log(res.data.message);// without window.location.href = '/home2'; this console.log is worked sucessfully
   
                  setUser({name:'',email:'',password:'',age:''});
                  window.location.href = '/home3';
                // navigate('/home2', { state: { message: res.data.message } }); // Pass message to the next page and go to next page also,that mean without window.location.href = '/home2';
  
                  
                  // LOGIN page redirected from here
              })
             // console.log("register")
             
      }
      catch(error){
          console.log('Error sending registration request',error);
      }
     
  };    

    return(
        <>

         <Header />
        <div class="div1-login"> 
        <form class='form-login' onSubmit={submitHandler} >
          <label class="label-login1">login form</label><br></br>
          <label class="label-login">Email ID:</label>
          <input class="input-login" value={user.email} onChange={changeHandler} name='phone' type="tel"></input><br></br>
          <label class="label-login">Password:</label>
          <input class="input-login" value={user.password} onChange={changeHandler} name='password' type="password"></input><br></br>
          <button class="btn-login" type="submit">Submit</button>
        <p onClick={goregister}>Click here to register</p>
        </form>        
        </div>
        </>
    )
}
export default Login;
 
