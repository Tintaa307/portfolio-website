import React from 'react'
import ReactDOM  from 'react-dom'
import './index'
import './index.css'
import Home from './components/home/Home'
import Proyects from './components/proyects/Proyects'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
     <Home/>
     <Proyects/>
     <Footer/>
    </>
  )
}

export default App