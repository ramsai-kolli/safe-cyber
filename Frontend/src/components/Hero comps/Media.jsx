import { useState } from "react";
import '../styles/Media.css';
import axios from "axios";
const Text =()=>{
    const [tdata,setData]=useState("");
    const [sdata,setSdata]=useState("data is a data of the dt ain the data also the data at the date and in the inof of the data is the data");
    let [flag,setFlag ]=useState(true);
    const handleChange=(e)=>{
      setData(e.target.value);
    }
    const handleSubmit =async()=>{
        try{
         await axios.post('https://safecyber-api.onrender.com/api/contsensor-text',tdata).then(response=>{
         if(response.data.success)
         {
           setSdata(response.data.sdata);
           const issensd = response.data.sensored;
         setFlag(true);
         }
        })
        }
        catch(e)
        {
         console.log(e);
        }
    }
   return(
    <div className="text-main">
     <input className='text-inp' onChange={handleChange} />
     <button className="text-btn" onClick={handleSubmit}>Submit</button>
     { flag &&
       <div>
         <p>{sdata}</p>
       </div>
     }
    </div>
   );
 }
 export default Text;