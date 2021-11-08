import "./style.css";
import tes from './style.css'

const NavBar = () => {
  return (
      <div className="NavBar">
        <h2 className="logo">Crymlll</h2>
        <div className="link">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="projects">Projects</a></li>
            <li><a href="skills">Skills</a></li>
            <li><a href="contacts">Contacts</a></li>
          </ul>
        </div>
      </div>
  )
}

export default NavBar