import React from 'react'
import { faGithub, faLinkedin, faHtml5, faCss3Alt, faSquareJs, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SiMongodb, SiExpress, SiVisualstudiocode } from "react-icons/si"
import { FaBootstrap, FaGit, FaLaptopCode, FaNpm, FaPython } from "react-icons/fa"
import { faCog } from '@fortawesome/free-solid-svg-icons'
import "../About/About.css"

function About() {
    return (
        <div className='about'>
            <div className='about-container'>
                <h1><strong>About</strong></h1>
                <br></br><hr />
                <br></br><p className="about-text">
                    Aspiring Software Engineer seeking out opportunities to step into the tech career field. Recent graduate from <a className='p-link' href="https://www.perscholas.org" target="_blank" rel="noopener noreferrer">PerScholas</a> Software Engineering Bootcamp learning different technologies, languages, and the MERN Stack. I am a Marine Corps Veteran and have held multiple security clearances while active duty. I have multiple higher-education degrees and certifications, a life-long student seeking knowledge and helping others. I have held multiple jobs/billets from MV-22B Osprey Aircraft Mechanic and Marine Security Guard to multiple construction and maintenance field jobs. I bring many soft skills and strengths that I have honed over the years. In my down time I enjoy being outdoors with my wife and dogs, riding my motorcycle and scuba-diving to name a few. I am looking for my next adventure as a Software Engineer to further my budding tech skills.
                </p>
                <br></br><div className='about-logo'>
                    <a className='github-logo' href="https://github.com/Cody-Jennings" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="3x" />
                    </a>
                    <a className='linkedin-logo' href="https://www.linkedin.com/in/cody-jennings-91b420161/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="3x" />
                    </a>
                </div>
                <br />
                <br></br>
                <div className='skills'>
                    <h2>Skills</h2>
                    <br></br>
                    <hr />
                    <br></br>
                    <div className='skills-grid'>
                        <div className='skill'>
                            <FontAwesomeIcon icon={faHtml5} size="2x" />
                            <span className='skill-title'>HTML5</span>
                        </div>
                        <div className='skill'>
                            <FontAwesomeIcon icon={faCss3Alt} size="2x" />
                            <span className='skill-title'>CSS3</span>
                        </div>
                        <div className='skill'>
                            <FontAwesomeIcon icon={faSquareJs} size="2x" />
                            <span className='skill-title'>JavaScript</span>
                        </div>
                        <div className='skill'>
                            <SiMongodb size="2em" title="MongoDB" /> MongoDB
                        </div>
                        <div className='skill'>
                            <SiExpress size="2em" title="Express.js" /> Express.js
                        </div>
                        <div className='skill'>
                            <FontAwesomeIcon icon={faReact} size="2x" />
                            <span className='skill-title'>React.js</span>
                        </div>
                        <div className='skill'>
                            <FontAwesomeIcon icon={faNodeJs} size="2x" />
                            <span className='skill-title'>Node.js</span>
                        </div>
                        <div className='skill'>
                            <FaPython size="2em" title="Python" /> Python
                        </div>
                        <div className='skill'>
                            <FontAwesomeIcon icon={faCog} size="2x" />
                            <span className='skill-title'>Restful API</span>
                        </div>
                        <div className='skill'>
                            <FaBootstrap size="2em" title="Bootstrap" /> Bootstrap
                        </div>
                        <div className='skill'>
                            <FaNpm size="2em" title="npm" /> npm
                        </div>
                        <div className='skill'>
                            <FaGit size="2em" title="git" /> git
                        </div>
                        <div className='skill'>
                            <SiVisualstudiocode size="2em" title="VSCode" /> VSCode
                        </div>
                        <div className='skill'>
                            <FaLaptopCode size="2em" title="Programming" /> Programming
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
