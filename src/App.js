import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Project from './components/Projects/Project';
import Service from './components/Service/Service';

function App() {
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
