// setting up my SPA routes by importing all pages from react router
import React from 'react'
// import ReactDOM from 'react-dom'
import { projects } from '../../Components/data'
// import { useState } from 'react'
import './Projects.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faGoogle} from "@fortawesome/free-brands-svg-icons"



function Projects() {
    return (
        <div className='projects'>
      <div className="title-container">
        <h1 className="projectsh1">My Projects</h1>
      </div>
            {projects.map((project, index) => (
                <div key={index} className='project-container' title='Scroll down to view entire project'>
                    <h2 className="project-title">{project.title}</h2><br></br>
                    <hr></hr>
                    <br></br><h3 className="project-subtitle">{project.subtitle}</h3>
                    <br></br><p className="project-description">{project.description}</p>
                    <br></br><img src={project.image} alt={project.title} onError={(e) => console.log(e.target.error)} className='project-image' />
                    <div className="logo">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className="project-logo" icon={faGoogle} size="2x" />
                        </a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className="github-logo" icon={faGithub} size="2x" />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects
