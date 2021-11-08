import React from 'react'
import './style.css'

export const Project = () => {
    return (
        <div className="projects">
            <div className="project-1">
                <h4>Bank Management System</h4>
                <img 
                    src={`${process.env.PUBLIC_URL}/project-1.png`} 
                    alt="profile"
                    width="480px"
                />
                <h6>2021 - Project Lead / Back-end Programmer</h6>
                <p>Use Framework Flask with MySQL database</p>
                <p>For Object Oriented Programming Course</p>
            </div>
            <div className="project-2">
                <h4>Freight Forwarding Software</h4>
                <img 
                    src={`${process.env.PUBLIC_URL}/project-2.png`} 
                    alt="profile"
                    width="480px"
                />
                <h6>2021 - Back-end Lead</h6>
                <p>Use Framework Flask with MySQL database</p>
                <p>For Database Course</p>
            </div>
            <div className="project-3">
                <h4>Crymlll Discord Bot</h4>
                <img 
                    src={`${process.env.PUBLIC_URL}/project-3.png`} 
                    alt="profile"
                    width="480px"
                />
                <h6>2020 - Solo Project</h6>
                <p>Use NodeJS (runtime JavaScript)</p>
                <p>For Destaria Minecraft Server with over 500+ users</p>
            </div>
        </div>
    )
}

export default Project
