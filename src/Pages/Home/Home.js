import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect';

function Home() {
    return (

        <div className='home'>
            <div className='home-container'>
                <h1>Cody Jennings</h1><br></br><hr></hr><br></br>
                <Typewriter
                    options={{
                        strings: ['Software Engineer', 'MERN Stack', 'Full Stack', 'Front End', 'Back End'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                <br>
                </br>
                <div className='about-img'>
                    <img src="../../../portfolioPicture.jpeg" ></img>
                </div>
            </div>
        </div>

    )
}

export default Home