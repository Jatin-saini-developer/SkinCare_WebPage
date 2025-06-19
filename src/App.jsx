import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HeaderContent from './components/HeaderContent'
import Content1 from './components/Content1'
import Content2 from './components/Content2'
import Content3 from './components/Content3'
import Content4 from './components/Content4'
import Content5 from './components/Content5'
import Content6 from './components/Content6'
import Content7 from './components/Content7'
import Footer from './components/Footer'
import HeaderLandingPage from './HeaderLandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>


      <HeaderLandingPage/>
      <Content2/>
      <Content3/>
      <Content4/>
      <Content5/>
      <Content6/>
      <Content7/>
      <Footer/>
    </div>
  )
}

export default App
