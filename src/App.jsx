
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import SkillSet from './components/SkillSet'
import About from './components/About'


function App() {
 

  return (
    <div className='overflow-hidden box-border '>
     <Navbar />
     
     
     <Intro />
     <SkillSet />
     <About />
    </div>
  )
}

export default App
