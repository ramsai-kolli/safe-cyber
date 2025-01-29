import '../styles/Misinfo.css';
import { useState } from 'react';
function Misinfo() {
  const [tdata,setData]=useState("");
  const handleChange =(e)=>{
   setData(e.target.value);
  }
  const handleSubmit =()=>{

  }
  return (
    <div className="mis-main">
      <div className="mis-content">
        <p>Enter info to check</p>
        <input className='mis-input' name='tdata' onChange={handleChange}/>
        <button type='button' onClick={handleSubmit}>Submit</button>
        <p>Result</p>
        <p>{tdata}</p>
      </div>
    </div>
  );
}
export default Misinfo;
