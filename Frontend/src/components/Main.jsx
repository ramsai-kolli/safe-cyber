import "./styles/Main.css";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero comps/Hero";
function Home() {
  const handleRedirect = () => {
    window.open("https:", "_blank");
  };
  const handleAbout = () => {
    window.location.href = "/aboutus";
  };

  return (
    <div className="the-home">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
export default Home;
