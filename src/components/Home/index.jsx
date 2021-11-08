import { Link } from "react-router-dom"
import './style.css'

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <p>Hi, Everyone</p>
                    <p> It's <b>Aulia Rahman Zulfi</b></p>
                    <div className="wrapper">
                        <div className="static-text">I'm a</div>
                        <ul className="dynamic-text">
                            <li><span>Software Engineer</span></li>
                            <li><span>Backend Developer</span></li>
                            <li><span>IoT Developer</span></li>
                            <li><span>Semicolon Lovers</span></li>
                        </ul>
                    </div>
                </h1>
                <Link to="about">
                    <button className="button-home">More Info</button>
                </Link>
            </div>
            <div className="person">
                <img 
                    src={`${process.env.PUBLIC_URL}/profile-circle.png`} 
                    alt="profile"
                />
            </div>
        </div>
    )
}

export default Home
