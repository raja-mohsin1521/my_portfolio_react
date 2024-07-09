
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Topbtn from './Components/Topbtn'

function App() {


  return (
    <>
      <Navbar/>
      <Topbtn/>
    <Home/>
    <Projects/>
    <Skills/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
