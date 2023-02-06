// setting up my SPA routes by importing all pages from react router
//import React from 'react'
//import ReactDOM from 'react-dom'
//import { projects } from '../../Components/data'
//import { useState } from 'react'



// const Project = () => {
//     return (
//         <div className='projects'>
//             {projects.map((project, index) => (
//                 <div key={index} title='Scroll down to view entire project'>
//                     <h2>{project.title}</h2>
//                     <h3>{project.subtitle}</h3>
//                     <p>{project.description}</p>
//                     <img src={project.image} alt={project.title} onError={(e) => console.log(e.target.error)} className='project-image' />
//                     {/* <a href={project.link}></a>
//                     <a href={project.github}></a> */}
//                 </div>
//             ))}
//         </div>
//     )
// }


// export default Project


import React from 'react'

function Projects() { 
    return (
        <div>
            <h1>Projects</h1>
        </div>
    )
}

export default Projects