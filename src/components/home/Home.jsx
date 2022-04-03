import React from 'react'
import './home.css'
import Hombre from '../../assets/img/home-img.png'

const OnClick = () => {
  const moon = document.querySelector('.container-darkmode');
  const sun = document.querySelector('.container-lightmode');
  const titles = document.querySelector('.container-titles');
  const redes = document.querySelector('.container-redes');
  const info = document.querySelector('.container-data-work');
  const botones = document.querySelector('.container-buttons');
  const proyectBtn = document.querySelector('.container-buttons-proyects')
  const carrousel = document.querySelector('.container-websites');
  const experiencia = document.querySelector('.container-skills');
  document.body.classList.add("dark");
  titles.classList.toggle("dark");
  redes.classList.toggle("dark");
  info.classList.toggle("dark");
  botones.classList.toggle("dark");
  proyectBtn.classList.toggle("dark");
  carrousel.classList.toggle("dark");
  experiencia.classList.toggle("dark");
  moon.classList.toggle("disable");
  sun.classList.toggle("active");
}

const OnClick2 = () => {
  const moon = document.querySelector('.container-darkmode');
  const sun = document.querySelector('.container-lightmode');
  const titles = document.querySelector('.container-titles');
  const redes = document.querySelector('.container-redes');
  const info = document.querySelector('.container-data-work');
  const botones = document.querySelector('.container-buttons');
  const proyectBtn = document.querySelector('.container-buttons-proyects');
  const carrousel = document.querySelector('.container-websites');
  const experiencia = document.querySelector('.container-skills');
  document.body.classList.remove("dark");
  titles.classList.remove("dark");
  redes.classList.remove("dark");
  info.classList.remove("dark");
  proyectBtn.classList.remove("dark");
  botones.classList.remove("dark");
  carrousel.classList.remove("dark");
  experiencia.classList.remove("dark");
  moon.classList.toggle("disable");
  sun.classList.toggle("active");
}

const Home = () => {
  return (
    <section className="section-home" id='Home'>
      <div className="container-home">
        <div className="container-content">
          <div className="container-img">
            <img src={Hombre} alt="" />
          </div>
          <div className="container-darkmode">
            <i className='fas fa-moon' onClick={OnClick}></i>
          </div>
          <div className="container-lightmode">
            <i className='fas fa-sun' onClick={OnClick2}></i>
          </div>
          <div className="container-titles">
            <h1>Gonzalez Valentin</h1>
            <h3>Frontend developer</h3>
            <div className="container-redes">
              <i className='fab fa-instagram'></i>
              <i className='fab fa-linkedin'></i>
              <i className='fab fa-github'></i>
            </div>
            <div className="container-data-work">
              <div className="data">
                <h2>7</h2>
                <h3 className='first'>Years of</h3>
                <h3 className='second'>work</h3>
              </div>
              <div className="data">
                <h2>+124</h2>
                <h3 className='first'>Completed</h3>
                <h3 className='second'>proyects</h3>
              </div>
              <div className="data">
                <h2>96</h2>
                <h3 className='first'>Satisfied</h3>
                <h3 className='second'>customers</h3>
              </div>
            </div>
            <div className="container-buttons">
              <a download="" href="assets/pdf/Gianell-Cv.pdf">
                <button className='download'>Download CV<i class="fas fa-download"></i></button>
              </a>
              <a href="https://api.whatsapp.com/send?phone=+5491144489123&text=Hello, more information!" target="_blank">
                <button className='red'><i className='fab fa-whatsapp'></i></button>
              </a>
              <a href="https://m.me/bedimcode" target="_blank">
                <button className='red'><i className='fab fa-facebook-messenger'></i></button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home