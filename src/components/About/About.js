import React from 'react'
import Skillcard from '../Customs/Tools/Skillcard';
import TitleCard from '../Customs/Tools/TitleCard';

import './About.css';

const Skills = [
  {
      id:1,
      name:"HTML",
      url:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
      id:2,
      name:"CSS",
      url:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
  },
  {
      id:3,
      name:"Javascript",
      url:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
      id:4,
      name:"Bootstrap",
      url:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
  },
  {
      id:5,
      name:"React",
      url:"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
  },
  {
      id:6,
      name:"Mongo DB",
      url:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"
  },
  {
      id:7,
      name:"MySQL",
      url:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg"
  },
  {
      id:8,
      name:"Node JS",
      url:"https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
  },
  {
      id:9,
      name:"Netlify",
      url:"https://cdn.iconscout.com/icon/free/png-64/netlify-3628357-3032192.png"
  },
  {
      id:10,
      name:"Heroku",
      url:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg"
  },
  {
      id:11,
      name:"Git",
      url:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"
  }
]

const About = () => { 
  return (
    <div>
      <div className='para'>
        <TitleCard title='About me'/>
        <p>
        About me My name is Asfaq and I am a software engineer specialized in FrontEnd applications. I started web development in a strong knowledge and expertise in this field over time. I want this page to be a "not-so-formal" description of who I am, my main skills and why I think I am a great software engineer and why you should hire me. For a more formal introduction, you can download my résumé.
        </p>
        <div>
          <TitleCard title="Technologies and Tools"/>
          <p>Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.</p>
          <div className='skillSection'>
            {Skills.map((card)=>(
              <Skillcard key={card.id} title={card.name} image={card.url}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;