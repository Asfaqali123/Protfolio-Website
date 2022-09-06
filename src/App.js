import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Project from './components/Projects/Project';
import Service from './components/Service/Service';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
     <Header/>
     <Banner />
     <About />
     <Service />
     <Project />
     <Contact />
     <Footer />
    </div>
  ); 
}

export default App;
