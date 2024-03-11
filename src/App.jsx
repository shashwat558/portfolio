
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import SkillSet from './components/SkillSet'


function App() {
 

  return (
    <div>
     <Navbar />
     
     
     <Intro />
     <SkillSet />
    </div>
  )
}

export default App
