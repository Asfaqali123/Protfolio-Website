import React from 'react'
import ProjectCard from '../Customs/Tools/ProjectCard'
import TitleCard from '../Customs/Tools/TitleCard'

import './Project.css'

const projects = [
  {
    id:1,
    name:"Countries ApI",
    url:"https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/01/top-10-DS-projects.png" ,
    discription:"Countries API which can Perform depending upon user input it implement by Using javascript.",
    redirectUrl:"https://nimble-quokka-8a77a8.netlify.app"
  },  

  {
    id:2,
    name:"PokemonApi",
    url:"https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/01/top-10-DS-projects.png",
    discription:"The Pokedex API provides data about each of the 50 Pokemon, including moves, type, and weakness. Each type of query produces output in plain text or JSON format .",
    redirectUrl:"https://scintillating-belekoy-ed2328.netlify.app"
  },
  {
    id:4,
    name:"Calculator",
    url:"https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/01/top-10-DS-projects.png",
    discription:"Create a simple calculator which can perform basic arithmetic operations it may depending upon the user input. Note that we are using to implement this project using the Javascript language. ",
    redirectUrl:""
  }
  
]

const Project = ({projectRef}) => {
  return (
    <div className='project' ref={projectRef} id="projectPage">
      <h1>Projects</h1>
      <TitleCard title="What I Build" /> 
        <div className='projectscard'>
        {projects.map((cards) => (
          <ProjectCard key={cards.id} title={cards.name} image={cards.url} desc={cards.discription} butn={cards.redirectUrl} />
        ))}
        </div>
    </div>  
  )
}

export default Project;