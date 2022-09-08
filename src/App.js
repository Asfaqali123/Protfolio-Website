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

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const homeScroll = () =>{
    setActiveNav(homeRef.current.id);
    window.scrollTo({
      top: homeRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  }

  const aboutScroll = () =>{
    setActiveNav(aboutRef.current.id);
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  }

  const serviceScroll = () =>{
    setActiveNav(serviceRef.current.id);
    window.scrollTo({
      top: serviceRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  }

  const projectScroll = () =>{
    setActiveNav(projectRef.current.id);
    window.scrollTo({
      top: projectRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  }

  const contactScroll = () =>{
    setActiveNav(contactRef.current.id);
    window.scrollTo({
      top: contactRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  }


  return (
    <div className="App">
     <Header  activeNav={activeNav} homeScroll={homeScroll} aboutScroll={aboutScroll} serviceScroll={serviceScroll} projectScroll={projectScroll} contactScroll={contactScroll}/>
     <Banner homeRef={homeRef}/>
     <About aboutRef={aboutRef}/>
     <Service serviceRef={serviceRef}/>
     <Project projectRef={projectRef}/>
     <Contact contactRef={contactRef}/>
     <Footer />
    </div>
  ); 
}

export default App;
