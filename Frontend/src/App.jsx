import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./components/Login.jsx";

import Home from "./components/Home.jsx";
import Startupsignup from "./components/Separate Comps/Startupsignup.jsx";

import Startupdashboard from "./components/Dashboard comps/Startupdashboard.jsx";
import Authoritydash from "./components/Dashboard comps/Authoritydash.jsx";
import AiChatBot from "./components/Separate Comps/AiChatBot.jsx";

import Drugindash from "./components/Dashboard comps/Drugindash.jsx";
import AboutUs from "./components/Separate Comps/AboutUs.jsx";
import Header from "./components/Header.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signupstartup" element={<Startupsignup />} />
          <Route path="/startupdash" element={<Startupdashboard />} />

          <Route path="/authoritydash" element={<Authoritydash />} />
          <Route path="/druginspectordash" element={<Drugindash />} />
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
