import "./styles/Main.css";
import { useState } from "react";
import Header from "./Header";
import FAQ from "./Home/FAQs";
import Footer from "./Dashboard comps/Footer";
import Gochatbot from "./Home/Gochatbot";
import Hero from "./Hero comps/Hero";
import Homecomp from "./Hero comps/Homecomp";
import ContentSensor from "./Hero comps/ContentSensor";
import Misinfo from "./Hero comps/Misinfo";
import AiChatBot from "./Hero comps/AiChatBot";

function Home() {
  const [comp,setComp]=useState(1);
  const CyberFaqData = [
    {
      question: "How does the AI-powered detection system work?",
      answer:
        "Our system uses advanced machine learning, NLP, and generative AI models to analyze online content, identify harmful patterns, and flag content for moderation.",
    },
    {
      question: "Can the system detect hate speech in multiple languages?",
      answer:
        "Yes, our solution supports multilingual detection by leveraging NLP techniques and pre-trained language models for a wide range of languages.",
    },
    {
      question: "How is misinformation detected and mitigated?",
      answer:
        "The system uses fact-checking algorithms, knowledge graphs, and cross-referencing with trusted sources to identify and flag misleading content.",
    },
    {
      question: "What measures are in place to ensure user privacy?",
      answer:
        "We employ strict data anonymization, encryption, and compliance with global privacy standards like GDPR to protect user information.",
    },
    {
      question: "Can the system adapt to emerging online threats?",
      answer:
        "Yes, the AI models are continuously updated using new datasets to adapt to evolving threats and ensure effective moderation.",
    },
    {
      question:
        "How does the system differentiate between harmful content and freedom of speech?",
      answer:
        "The solution uses context-aware models to balance content moderation with freedom of expression, minimizing false positives.",
    },
    {
      question: "Does the system provide real-time content moderation?",
      answer:
        "Absolutely, the platform is optimized for real-time detection and moderation, ensuring immediate action against harmful content.",
    },
    {
      question:
        "What are the benefits of using this solution for online platforms?",
      answer:
        "It enhances user safety, reduces moderation workload, improves platform trust, and helps maintain compliance with content policies.",
    },
    {
      question: "How accurate is the detection system?",
      answer:
        "Our solution achieves high accuracy through continuous training on diverse datasets, reducing false positives and false negatives.",
    },
    {
      question: "Is the system scalable for large online platforms?",
      answer:
        "Yes, the architecture is designed to scale seamlessly, handling high volumes of content efficiently for platforms of any size.",
    },
  ];
  const handleRedirect = () => {
    window.open("https:", "_blank");
  };
  const handleAbout = () => {
    window.location.href = "/aboutus";
  };
  const gohome =()=>{
    setComp(1);
  }
  const gosensor =()=>{
    setComp(2);
  }
  const gomisinfo =()=>{
    setComp(3);
  }
  const gobot = ()=>{
    setComp(4);
  }
  return (
    <div className="the-home">
      <Header />
      <div className="home-nav">
        <p onClick={gohome}>Home</p>
        <p onClick={gosensor}>Content Sensor</p>
        <p onClick={gomisinfo}>Misinfo Validation</p>
        <p onClick={gobot}>Gemini Chatbot</p>
      </div>
      <div>
        {
          comp == 1 ? (<Homecomp/>) : ( comp == 2 ? (<ContentSensor/>) :
          (comp == 3 ? (<Misinfo/>) : ( comp ==4 ? (<AiChatBot/>) : (null)
        )))
        }
      </div>

      {/* <div className='rec-butns'>
                <button id="ytlink" onClick={handleRedirect}>  Click here to watch the demo video</button>
                <button id="about-us" onClick={handleAbout}>  About developers</button>
            </div> */}

      <div className="home-main">
        <Hero />
      </div>

      <div className="home-faq">
        <FAQ faqdata={CyberFaqData} who={"Cyberbullying"} />
      </div>
      <Gochatbot />
      <Footer />
    </div>
  );
}
export default Home;
