import '../styles/Misinfo.css';
import { useState,useEffect,useRef } from 'react';
function Misinfo() {
  const [inputValue, setInputValue] = useState('');
  const textAreaRef = useRef(null); 

  const [tdata,setData]=useState("");
  const flag=true;
  const [result,setresult]=useState({
    isReal:false,
    realper:0,
    source:"official"
  })
  const handleChange =(e)=>{
   setData(e.target.value);
   setInputValue(e.target.value);
    adjustHeight(e.target);
   
  }

  const adjustHeight = (textAreaElement) => {
    textAreaElement.style.height = 'auto';  // Reset height to auto to calculate new height
    textAreaElement.style.height = `${textAreaElement.scrollHeight}px`;  // Set new height based on content
  };

  // Set initial height when the component mounts
  useEffect(() => {
    if (textAreaRef.current) {
      adjustHeight(textAreaRef.current);
    }
  }, []);
   

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
    <div className="div1-misinfo">
      <div className="div2-misinfo">
        <p className="para-misinfo">Enter info to check</p>
        <textarea
          ref={textAreaRef}
          className="input-misinfo"
          name="tdata"
          value={inputValue}
          onChange={handleChange}
          placeholder="Start typing..."
        />
        <button className="btn-misinfo" type='button'  onClick={handleSubmit}>Submit</button>
        
        { flag && (
          <div className='div3-misinfo'>
            <p className="para2-misinfo">Result</p> 
           <p className="para3-misinfo">Info provided is: {result.isReal}</p> 
           <p className="para4-misinfo">Percentage of truness:{result.realper}</p> 
           <p className="para5-misinfo">Source:{result.source}</p> 
          </div>
        )
          
        }
      </div>
    </div>
  );
}
export default Misinfo;

//<input  class='input-misinfo' name='tdata' onChange={handleChange}   />

// .div1-misinfo {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   background-color: #f0f4f7; /* Light background color */
// }

// .div2-misinfo {
//   width: 100%;
//   max-width: 600px;
//   background-color: #ffffff;
//   padding: 30px;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for card */
//   text-align: center;
// }

// .para-misinfo {
//   font-size: 24px;
//   font-weight: bold;
//   color: #333333;
//   margin-bottom: 20px;
// }

/* Textarea Styling */
// .input-misinfo {
//   width: 100%;
//   min-height: 100px;
//   padding: 12px;
//   font-size: 14px;
//   line-height: 20px;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   resize: none; /* Prevent manual resizing */
//   outline: none;
//   margin-bottom: 20px;
//   box-sizing: border-box;
//   transition: border-color 0.3s ease-in-out;
// }

// .input-misinfo:focus {
//   border-color: #6e8efb; /* Blue border on focus */
// }

// /* Button Styling */
// .btn-misinfo {
//   width: 60%; /* Limit width for better appearance */
//   padding: 16px; /* Increased padding for a larger button */
//   background-color: #28a745; /* Green background */
//   border: none;
//   border-radius: 8px;
//   color: white;
//   font-size: 18px; /* Larger font size */
//   font-weight: bold; /* Bold text */
//   cursor: pointer;
//   transition: background-color 0.3s ease;
//   box-sizing: border-box;
//   margin-top: 20px; /* Space above the button */
// }

// .btn-misinfo:hover {
//   background-color: #218838; /* Darker green on hover */
// }

// .btn-misinfo:active {
//   background-color: #1e7e34; /* Even darker green when clicked */
// }

// /* Result Section Styling */
// .div3-misinfo {
//   margin-top: 30px;
//   padding: 20px;
//   background-color: #f8f9fa;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// }

// .para2-misinfo {
//   font-size: 25px;
//   font-weight: bold;  /* Bold heading */
//   color: #333333;
//   margin-bottom: 10px;
//   text-align: left;
// }

// .para3-misinfo,
// .para4-misinfo,
// .para5-misinfo {
//   font-size: 16px;
//   font-weight: bold;  /* Normal text */
//   color: #555555;
//   margin: 5px 0;
//   padding: 8px;
//   padding-left: 0;
   
//   background-color: #ffffff;
//   text-align: left;
//   border-radius: 4px;
// }