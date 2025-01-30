import { useState } from "react";
import '../styles/Text.css'
const Text =()=>{
    const [tdata,setData]=useState("");
    const [sdata,setSdata]=useState("data");
    let flag=true;
    const handleChange=(e)=>{
      setData(e.target.value);
    }
    const handleSubmit =async()=>{
        try{
         let response=await axios.post('',tdata);
         // if(response.data.success)
         // {
         //   setSdata(response.data.sdata);
         // flag=true;
         // }
        }
        catch(e)
        {
         console.log(e);
        }
    }
   return(
    <div>
     <input className='text-inp' onChange={handleChange} />
     <p onClick={handleSubmit}>Submit</p>
     { flag &&
       <div>
         <p>{sdata}</p>
       </div>
     }
    </div>
   );
 }
 export default Text;