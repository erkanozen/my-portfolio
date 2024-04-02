import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Education from "./pages/Education/Education";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);
  const HandleMode = () => {
    setDark(!dark);
  };
  return (
    <div className="App">
      <Navbar dark={dark} HandleMode={HandleMode} />
      <Home dark={dark} />
      <About dark={dark} />
      <Skills dark={dark} />
      <Education dark={dark} />
      <Contact dark={dark} />
      <Footer dark={dark} />
    </div>
  );
}

export default App;
