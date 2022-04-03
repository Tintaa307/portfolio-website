import React from 'react'
import ReactDOM  from 'react-dom'
import './index'
import './index.css'
import Home from './components/home/Home'
import Proyects from './components/proyects/Proyects'
import Footer from './components/footer/Footer'
import { useEffect } from 'react'
import mixitup from 'mixitup'
import scrollreveal from 'scrollreveal'

const App = () => {
    useEffect(() => {
        let mixer = mixitup('.container-webs')
        let mixer2 = mixitup('.container-skills')
        mixer.filter('.proyects')
        mixer2.filter('.skills')

        const sr = scrollreveal({
          origin: "top",
          distance: "110px",
          duration: 2300,
          delay: 500,
        });
        sr.reveal(
          `
          section,
          #Home,
          #Proyects
          `
        )
      }, []);
  return (
    <>
     <Home/>
     <Proyects/>
     <Footer/>
    </>
  )
}

export default App