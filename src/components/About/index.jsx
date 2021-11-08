import { Link } from "react-router-dom"
import './style.css'

const About = () => {
    return (
        <div className="about">
            <h3 align="center">Informatics Engineering student from Indonesia</h3>
            <h3 align="center">Fullstack Dev</h3>
            
            <div className="detail">
                <p>I’m currently student at <b>Sumatera Institute of Technology</b></p>
                <p>I’m currently learning <b>MongoDB, ExpressJS, React, NodeJS</b></p>
                <p>How to reach me <b>auliarahmanzulfi@gmail.com</b></p>
            </div>
        </div>
    )
}

export default About