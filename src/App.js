import Project from "./components/Project";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Skill from "./components/Skill";
import React from 'react';
import '@fortawesome/react-fontawesome';
import "./index.css";

function App() {
  //const bg = "background-image : url('https://source.unsplash.com/1000x600?computer')'";
  return (
    <div className="App">
      <div className="container mx-auto px-0">
        <div className="bg-cover bg-no-repeat bg-center shadow-xl shadow-slate-500" style={{backgroundImage: `url("img/hero-bg.png")`}}>
          <Menu/>
          {/* <div class="border border-slate-500 mt-4"></div> */}
          <Hero/>
        </div>
        <About/>
        <div class="border border-slate-200 mt-4"></div>
        <Skill/>
        <div class="border border-slate-200 mt-4"></div>
        <Project/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
