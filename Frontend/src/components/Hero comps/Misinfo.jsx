import "../styles/Misinfo.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios"; // Make sure to import axios for the API call

function Misinfo() {
  const [inputValue, setInputValue] = useState("");
  const textAreaRef = useRef(null);

  const [tdata, setData] = useState("");
  const [result, setResult] = useState({
    isReal: false,
    realper: 0,
    source: "",
  });
  const [flag, setFlag] = useState(true); // This flag will toggle the result display

  const handleChange = (e) => {
    setData(e.target.value);
    setInputValue(e.target.value);
    adjustHeight(e.target);
  };

  const adjustHeight = (textAreaElement) => {
    textAreaElement.style.height = "auto"; // Reset height to auto to calculate new height
    textAreaElement.style.height = `${textAreaElement.scrollHeight}px`; // Set new height based on content
  };

  // Set initial height when the component mounts
  useEffect(() => {
    if (textAreaRef.current) {
      adjustHeight(textAreaRef.current);
    }
  }, []);

  const handleSubmit = async () => {
    try {
      // Send input data to the '/chat' endpoint
      let response = await axios.post(
        "https://https://safecyber-api.onrender.com/api/fact-check",
        {
          newsContent: inputValue,
        }
      );

      // Assuming the response has the following structure:
      // { data: { isReal: boolean, realper: number, source: string } }

      if (response.data.success) {
        const { isReal, realper, source } = response.data.data; // Adjust based on actual response structure
        setResult({
          explanation,
          realper,
          source,
        });
        setFlag(true); // Show the result section after receiving data
      } else {
        console.error(response.data.message);
        setFlag(false); // Hide result if there's an error
      }
    } catch (e) {
      console.error(e);
      setFlag(false); // Hide result on error
    }
  };

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
        <button className="btn-misinfo" type="button" onClick={handleSubmit}>
          Submit
        </button>

        {flag && (
          <div className="div3-misinfo">
            <p className="para2-misinfo">Result</p>
            <p className="para3-misinfo">Explanation: {result.explanation}</p>
            <p className="para4-misinfo">
              Percentage of truness: {result.realper}%
            </p>
            <p className="para5-misinfo">Source: {result.source}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Misinfo;
