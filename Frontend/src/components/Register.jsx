import "./styles/Register.css";
import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

function Register(){
  const [user, setUser] = useState({
    name : "",                                                                                                                                                                                                                                                                                                               
    
    email :"",
    password : "",
      
});

const navigate = useNavigate();

const changeHandler = (e) => {
  const { name, value } = e.target;
  setUser({ ...user, [name]: value });
};

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit handle");
    if(user.password.length<6) 
    {
        alert('password must contain 6 letters');
     }
    try{
        axios.post('http://localhost:5555/register',user).then(res=>{
                alert("registered Succesfully!");
                 
 
                setUser({name:'',phone:'',email:'',password:''});
              
               navigate('/home2', { state: { message: res.data.message } }); 

                
               
            }) 
           
    }
    catch(error){
        console.log('Error sending registration request',error);
    }
   
};
 

    return(
        <>
         
         
        <Header />
        
         
        <div id="register-form-d"> 
         <label>this is register form</label><br></br>
        <form id='register-form' onSubmit={submitHandler} >
           
          
           
          <input value={user.name} onChange={changeHandler} name='name' type='text' placeholder="enter name"  ></input><br></br>
           
            
          <input value={user.email} onChange={changeHandler} name='email' type="email" placeholder='enter email:'></input><br></br>                                                                                                               
         
          <input value={user.password} onChange={changeHandler} name='password' type="password"  placeholder='enter password'></input><br></br>
          <button type="submit">Submit</button>

        </form>        
        </div>
       
        </>
    )
}
export default Register;