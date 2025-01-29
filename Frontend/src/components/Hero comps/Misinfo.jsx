import '../styles/Misinfo.css';
import { useState } from 'react';
function Misinfo() {
  const [tdata,setData]=useState("");
  const flag=false;
  const [result,setresult]=useState({
    isReal:false,
    realper:0,
    source:"official"
  })
  const handleChange =(e)=>{
   setData(e.target.value);
  }
  const handleSubmit =async()=>{
         console.log(tdata);
         try{
          let response=await axios.post('',tdata);  
          // if(response.data.success)
          // {
          //   flag=true;
          //   setData()
          // }
         }
         catch(e)
         {
          console.log(e);
         }
  }
  return (
    <div className="mis-main">
      <div className="mis-content">
        <p>Enter info to check</p>
        <input className='mis-input' name='tdata' onChange={handleChange}/>
        <button type='button' className='mis-btn' onClick={handleSubmit}>Submit</button>
        
        { flag && (
          <div className='mis-res'>
            <p>Result</p>
           <p>Info provided is: {result.isReal}</p>
           <p>Percentage of truness:{result.realper}</p>
           <p>Source:{result.source}</p>
          </div>
        )
          
        }
      </div>
    </div>
  );
}
export default Misinfo;
