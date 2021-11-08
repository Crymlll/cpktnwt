import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import NavBar from "./components/NavBar"

import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/contacts" component={Contact} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
