import { useContext, useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Team from "./pages/Team.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import RequestProject from './pages/RequestProject.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Projects from './pages/Projects.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import { AuthContext } from './context/Auth.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

function App() {
  const Auth = useContext(AuthContext);

  const [projects, setProjects] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    // Fetch projects
    (async () => {
      try {
        const response = await fetch("https://api.sdsclub.pp.ua/getProjects");
        const projectData = await response.json();
        setProjects(projectData.projects || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    })();

    // Fetch team
    (async () => {
      try {
        const response = await fetch("https://api.sdsclub.pp.ua/getTeam");
        const teamData = await response.json();
        setTeam(teamData.team || []);
      } catch (error) {
        console.error("Error fetching team:", error);
      }
    })();
  }, []);

  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/team" element={<Team team={team}/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/projects" element={<Projects projects={projects}/>}/>
          <Route path="/request-project" element={<RequestProject/>}/>
          
          <Route path = "/dashboard" element={
              <ProtectedRoute>
                 <Dashboard/>
              </ProtectedRoute>
          }
          />
          <Route path="/register" element={<RegisterPage />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
