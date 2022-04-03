import React from 'react'
import './proyects.css'
import Carsweb from '../../assets/img/cars-web.jpg'
import Burguersweb from '../../assets/img/burguers-web.jpg'
import Coffeeweb from '../../assets/img/coffee-web.jpg'
import Plantsweb from '../../assets/img/plants-web.jpg'
import Enterpriseweb from '../../assets/img/enterprise-web.jpg'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
  {
    img: Carsweb,
    web: 'Electric Cars Website' 
  },
  {
    img: Burguersweb,
    web: 'Burgers Website' 
  },
  {
    img: Coffeeweb,
    web: 'Coffee Website' 
  },
  {
    img: Plantsweb,
    web: 'Plants Website' 
  },
  {
    img: Enterpriseweb,
    web: 'Enterprise Website' 
  },
]

const OnClick1 = () => {
  const container1 = document.querySelector('.container-btn');
  const container2 = document.querySelector('.container-btn2');
  const skills = document.querySelector('.container-skills');
  container1.classList.toggle("show");
  container2.classList.remove("active");
  skills.classList.add("disable");
}

const OnClick2 = () => {
  const container1 = document.querySelector('.container-btn');
  const container2 = document.querySelector('.container-btn2');
  const skills = document.querySelector('.container-skills');
  container2.classList.toggle("active");
  container1.classList.remove("show");
  skills.classList.remove("disable");
}

const Proyects = () => {
  return (
    <section className="section section-proyects" id='Proyects'>
      <div className="container-proyects">
        <div className="container-buttons-proyects">
          <div className="container-btn show">
            <button data-filter=".proyects" onClick={OnClick1}>Proyects</button>
          </div>
          <div className="container-btn2">
            <button data-filter=".skills" onClick={OnClick2}>Skills</button>
          </div>
        </div>
        <div className="container-websites">
          <Swiper className="container-webs"
          modules={[ Pagination ]}
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          pagination={{  dynamicBullets: true, clickable: true }}>
            {
              data.map(({img, web}, index) => {
                return(
                  <SwiperSlide key={index} className="web mix proyects">
                    <img src={img} alt="" />
                    <h2>{web}</h2>
                    <a href="https://tintaa307.github.io/CarsWeb/"><i className='fas fa-link'></i></a>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
        <div className="container-skills disable">
          <div className="container-front mix skills">
            <h1>Frontend Development</h1>
            <ul className="lista-front">
              <li>
                <h2>HTML</h2>
                <i className='fas fa-circle-check'></i>
                <h3>Advanced</h3>
              </li>
              <li>
                <h2>CSS</h2>
                <i className='fas fa-circle-check'></i>
                <h3>Advanced</h3>
              </li>
              <li>
                <h2>JavaScript</h2>
                <i className='fas fa-circle-check'></i>
                <h3>Intermediate</h3>
              </li>
              <li>
                <h2>React</h2>
                <i className='fas fa-circle-check'></i>
                <h3>Intermediate</h3>
              </li>
              <li>
                <h2>Bootstrap</h2>
                <i className='fas fa-circle-check'></i>
                <h3>Basic</h3>
              </li>
              <li>
                <h2>Git</h2>
                <i className='fas fa-circle-check'></i>
                <h3>Basic</h3>
              </li>
            </ul>
          </div>
          <div className="container-back mix skills">
            <h1>Backend Development</h1>
            <ul className="lista-back">
              <li>
                <h2>PHP</h2>
                <i className='fas fa-circle-check'></i>
                <h3>Advanced</h3>
              </li>
              <li>
                <h2>MySql</h2>
                <i className='fas fa-circle-check'></i>
                <h3>Basic</h3>
              </li>
              <li>
                <h2>Firebase</h2>
                <i className='fas fa-circle-check'></i>
                <h3>Basic</h3>
              </li>
              <li>
                <h2>Python</h2>
                <i className='fas fa-circle-check'></i>
                <h3>Advanced</h3>
              </li>
              <li>
                <h2>Node JS</h2>
                <i className='fas fa-circle-check'></i>
                <h3>Intermediate</h3>
              </li>
              <li>
                <h2>Access</h2>
                <i className='fas fa-circle-check'></i>
                <h3>Advanced</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Proyects