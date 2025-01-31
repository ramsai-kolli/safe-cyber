import '../styles/Media.css';
import axios from "axios";
import {  AttachFile } from "@mui/icons-material";
import { styled } from "@mui/material";
import {  useState, useEffect } from "react";


const ClipIcon = styled(AttachFile)`
  transform: "rotate(40deg)";
`;
const Media =()=>{
    const [tdata,setData]=useState("");
    const [sdata,setSdata]=useState("data is a data of the dt ain the data also the data at the date and in the inof of the data is the data");
    let [flag,setFlag ]=useState(true);
    const [value, setValue] = useState();
    const [file, setFile] = useState();
    const uploadFileToGemini = async (data) => {
      try {
          return await axios.post('https://safecyber-api.onrender.com/api/contsensor-image', data);
      } catch (error) {
          console.log('Error while calling newConversations API ', error);
      }
  }
     useEffect(() => {
        const getImage = async () => {
          if (file) {
            const data = new FormData();
            data.append("name", file.name);
            data.append("file", file);
              console.log("heyyy")
            // const response = await uploadFileToGemini(data);
            try {
              const response = await axios.post('https://safecyber-api.onrender.com/api/contsensor-image', data);
              console.log("respppp : ",response.data);
            } catch (error) {
              console.log('Error while calling newConversations API ', error);
          }
            // setImage(response.data);
            console.log("respppp : ",response.data);
          }
        };
        getImage();
      }, [file]);

    
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
    const onFileChange = (e) => {
      setValue(e.target.files[0].name);
      setFile(e.target.files[0]);
      console.log("got the file : ",e.target.files[0] )
    };

   return(
    <div className="text-main">
     <label htmlFor="fileInput">
        <ClipIcon />
      </label>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={(e) => onFileChange(e)}
      />
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