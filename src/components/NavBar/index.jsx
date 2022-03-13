import { Link } from "react-router-dom"
import "./style.css";

const NavBar = () => {
  return (
      <div className="NavBar">
        <h2 className="logo">Crymlll.dev</h2>
        <div className="link">
          <ul>
            <li><Link to="/"><p>Home</p></Link></li>
            <li><Link to="about"><p>About</p></Link></li>
            <li><Link to="projects"><p>Projects</p></Link></li>
            <li><Link to="skills"><p>Skills</p></Link></li>
            <li><Link to="contacts"><p>Contacts</p></Link></li>
          </ul>
        </div>
      </div>
  )
}

export default NavBar