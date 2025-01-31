import { useState } from "react";
import '../styles/Media.css';
import axios from "axios";
import {  AttachFile } from "@mui/icons-material";
import { styled } from "@mui/material";


const ClipIcon = styled(AttachFile)`
  transform: "rotate(40deg)";
`;
const Media =()=>{
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
     <label htmlFor="fileInput">
        <ClipIcon />
      </label>
     <button className="text-btn" onClick={handleSubmit}>Submit</button>
     { flag &&
       <div>
         <p>{sdata}</p>
       </div>
     }
    </div>
   );
 }
 export default Media;