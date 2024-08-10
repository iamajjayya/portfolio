import About from "./container/About/About";
import Work from "./container/Work/Work";
import Footer from "./container/Footer/Footer";
import Header from "./container/Header/Header";
import Skills from "./container/Skills/Skills";
import '../src/container/About/About.scss'

import Navbar from "./components/Navbar";
import "./App.scss"
import Socialmedia from "./components/Socialmedia";

function App() {
  
  return (
    <>
       <div className="app">
       <Navbar />
       <Header />
       <About />
       <Work />
       <Skills />
    
       <Footer />

    <h1 className="head-text">Ajj<span>ayya </span>❤</h1>
    

       </div>
    </>
  )
}

export default App
