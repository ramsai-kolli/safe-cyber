import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login.jsx";
import Main from "./components/Main.jsx";
import AiChatBot from "./components/Hero comps/AiChatBot.jsx";
import AboutUs from "./components/Separate Comps/AboutUs.jsx";
import Header from "./components/Header.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/chatbot" element={<AiChatBot />} />
          <Route
            path="/aboutus"
            element={
              <div>
                {" "}
                <Header /> <AboutUs />{" "}
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
