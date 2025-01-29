import React,{useState,useEffect} from 'react'

export default function NewsTrend() {
 
    const [data, setData] = useState(
        [
            {
              "id": 1,
              "heading": "Free iPhone Giveaway",
              "content": "Claim your free iPhone now! Just enter your personal details and shipping address to win a brand new iPhone. Limited time offer!"
            },
            {
              "id": 2,
              "heading": "Lottery Winning Notification",
              "content": "Congratulations! You've won $1,000,000 in our online lottery. To claim your prize, send a small fee for processing."
            },
            {
              "id": 3,
              "heading": "Unclaimed Inheritance Fund",
              "content": "You have an unclaimed inheritance waiting for you. To unlock your funds, provide your bank account details and pay a processing fee."
            },
            {
              "id": 4,
              "heading": "Fake Tech Support",
              "content": "Your computer has been infected with malware. Call our tech support team at this number to fix the issue immediately. Don't wait!"
            },
            {
              "id": 5,
              "heading": "Phony Cryptocurrency Investment",
              "content": "Invest in a high-return cryptocurrency scheme with guaranteed profits. Hurry! Limited spots available."
            },
            {
              "id": 6,
              "heading": "Free Gift Cards Scam",
              "content": "Get free Amazon gift cards by completing a short survey. Share your personal information for a chance to win big!"
            },
            {
              "id": 7,
              "heading": "Prize Redemption Fee",
              "content": "You've won a prize, but to claim it, you need to pay a redemption fee upfront. Don't miss out on your big win!"
            },
            {
              "id": 8,
              "heading": "Fake Charity Donation Request",
              "content": "Help us donate to victims of a recent disaster. Your generous contribution will make a difference. Donate now!"
            },
            {
              "id": 9,
              "heading": "Impersonation Scam - Social Media Account",
              "content": "Someone is pretending to be you on social media. Pay a small fee to have the account suspended."
            },
            {
              "id": 10,
              "heading": "Online Shopping Scam",
              "content": "Buy the latest electronics at unbelievably low prices. Limited stock, hurry before it’s all gone!"
            }
          ]
          
       
      ); 
      const [loading, setLoading] = useState(false);
      useEffect(() => {
        
        const fetchData = async () => {
          try {
            const response = await axios.get('');
            const result = await response.json();
            setData(result);
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setLoading(false);
          }
        }; fetchData();
    }, []);
      const handleButtonClick = async(id) => {
        console.log('Button clicked for item with ID:', id);
        try{
            let response=await axios.post('',id);
        }
        catch(e)
        {
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
              <h3>{item.headline}</h3>
              <p>{item.content}</p>
              <button onClick={() => handleButtonClick(item.id)}>Noticed it!</button>
            </div>
          ))
        )}
      </div>
      )
}
