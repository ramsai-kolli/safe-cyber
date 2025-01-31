import React, { useState, useEffect } from "react";
import TrendInput from "./TrendInput";
import axios from "axios";
export default function ScamTrend() {
  const [data, setData] = useState([
    {
      id: 1,
      headline: "Free iPhone Giveaway",
      content:
        "Claim your free iPhone now! Just enter your personal details and shipping address to win a brand new iPhone. Limited time offer!",
    },
    {
      id: 2,
      headline: "Lottery Winning Notification",
      content:
        "Congratulations! You've won $1,000,000 in our online lottery. To claim your prize, send a small fee for processing.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const handleButtonClick = async (heading) => {
    console.log("Button clicked for item with ID:", heading);
    try {
      let response = await axios.post(
        " https://safecyber-api.onrender.com/api/happened-to-me",
        { headline: heading }
      );
      if (response.data.success) {
        console.log(response.data.data);
      } else {
        console.log(response.data.message);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="scam-main">
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((item) => (
          <div key={item.id} className="scam-card">
            <div className="scam-line">
              <h3 className="scam-line-head">{item.headline}</h3>
              <button
                onClick={() => handleButtonClick(item.headline)}
                className="scam-line-btn"
              >
                Happened to me
              </button>
            </div>
            <p className="scam-line-mat">{item.content}</p>
          </div>
        ))
      )}
      <TrendInput catgry={"scams"} />
    </div>
  );
}
