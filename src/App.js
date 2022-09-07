import React from 'react'
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
import { useEffect,useRef,useState } from 'react';

function App() {
  const [activeNav, setActiveNav] = useState('');

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const aboutRef = useRef(null);

  const aboutScroll = () =>{
    setActiveNav(aboutRef.current.id);
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="App">
     <Header aboutScroll={aboutScroll} activeNav={activeNav}/>
     <Banner />
     <About aboutRef={aboutRef}/>
     <Service />
     <Project />
     <Contact />
     <Footer />
    </div>
  ); 
}

export default App;
