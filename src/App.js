import Fitur from "./components/Fitur";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Post from "./components/Post";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="container px-8 mx-auto">
        <Menu/>
        <Hero/>
        <Post/>
        <Fitur/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
