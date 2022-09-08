import React from 'react'
import Servicecard from '../Customs/Tools/Servicecard'
import TitleCard from '../Customs/Tools/TitleCard'

import './Service.css'

const service = [
  {
    id:1,
    name:"Web Application Development",
    url:"https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-web-development-coding-kiranshastry-lineal-color-kiranshastry.png",
    disc:"Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design user interface design authoring, including standardised code and proprietary software user experience design and search engine"
  },
  {
    id:2,
    name:"Mobile Application Development",
    url:"https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-app-development-responsive-web-design-justicon-lineal-color-justicon.png",
    disc:"We provide a range of mobile application development services including custom mobile development on Android platforms, building cross-platform apps, designing user experience and integrating novel mobile interfaces such as chat and voice"
  },
  {
    id:3,
    name:"Backend Development",
    url:"https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-backend-no-code-flaticons-flat-flat-icons.png",
    disc:"Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience."
  }
]

const Service = ({serviceRef}) => {
  return (
    <div className='services' ref={serviceRef} id="servicePage">
        <h1>Service</h1>
        <TitleCard title="What I Provide"/>
        <div className='serviceCard'>
        {service.map((card) => (
          <Servicecard key={card.id} title={card.name} image={card.url} desc={card.disc} />
        ))}
        </div>
    </div>
    
    
  )
}

export default Service