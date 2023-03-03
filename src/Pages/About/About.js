import React from 'react'
import { faGithub, faLinkedin, faHtml5, faCss3Alt, faSquareJs, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SiMongodb, SiExpress } from "react-icons/si"
import { FaLaptopCode } from "react-icons/fa"

import "../About/About.css"

function About() {
    return (
        <div className='about'>

            <div className='about-container'>
                <h1>About</h1>
                <br></br><hr />
                <br></br><p className="about-text">
                    Aspiring Software Engineer seeking out opportunities to step into tech career field. Recent graduate from <a className='link' href="https://www.perscholas.org">PerScholas</a> Software Engineering Bootcamp learning different technologies/languages/MERN Stack. I am a Marine Corps Veteran and have held multiple security clearances while active duty, multiple higher-education degrees and certifications. A life-long student seeking knowledge and helping others. Held multiple jobs and billets from MV-22B Osprey Aircraft Mechanic/Marine Security Guard to multiple construction/maintenance field jobs. I bring many soft skills and strengths that I have honed over the years. In my down time I enjoy being outdoors with my wife and dogs, riding my motorcycle and scuba-diving to name a few. I am looking for my next adventure as a Software Engineer to further my budding tech skills.
                </p>
                <br></br><div className='about-logo'>
                    <a className='github-logo' href="https://github.com/Cody-Jennings">
                        <FontAwesomeIcon icon={faGithub} size="3x" />
                    </a>
                    <a className='linkedin-logo' href="https://www.linkedin.com/in/cody-jennings-91b420161/">
                        <FontAwesomeIcon icon={faLinkedin} size="3x" />
                    </a>
                </div>
                <br />
                <div className='skills'>
                    <h4>Skills</h4>
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
                            <FaLaptopCode size="2em" title="Programming" /> Programming
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
     