import React from 'react'
import {BsArrowRightCircle, BsCaretRightFill} from 'react-icons/bs'
import { motion } from 'framer-motion'
import './heroStyles/heroStyles.css'
import pdf from '../../assets/img/hero/pdf.png'
import Banner from '../../components/banner/Banner'
import Pdfs from './../../components/pdfs/Pdfs';

const Hero = () => {
  return ( 

    <>

    <div className='hero-container'>
        <div className='hero-text-and-buttons'>
          <motion.h1 
          initial={{ opacity: 0, y: +50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='hero-title'>
          Estas cansado de buscar fabricantes y unicamente encontrarte con revendedores o posibles estafas?
          </motion.h1>

          <p className='hero-subtitle'>
          Con nuestros PDF obtenes acceso exclusivo a contactos de fabricantes y mayoristas al primer precio, ahorrándote tiempo y dinero. Pero eso no es todo, también te ofrecemos un manual único para la creación y potenciamiento de tu ecommerce de manera efectiva y masiva
          </p>

          <div className='hero-buttons'>

            <h3 className='title-buttons-hero'>Elegi tu camino:</h3>
            <div className='buttons-container'>
              <motion.button
               animate={{ scale: 1.08 }}
               transition={{ repeat: Infinity, duration: 3 }}
                whileHover={{scale: 1.03}}
                whileTap={{scale: 0.95}}
              className='cta-hero'><img src={pdf} alt="" />
                  <a href="#catalogos">
                    Adquirir Proveedores
                  </a>
              <BsArrowRightCircle /></motion.button>
              <motion.button
                whileHover={{scale: 1.03}}
                whileTap={{scale: 0.95}}
              className='hero-cta-special'>
                <a href="https://mpago.la/1itP6uH">

                  Adquirir Manual E-commerce
                </a>
                </motion.button>
            </div>

          </div>
        </div>

      

      </div>

<Banner />
      <Pdfs />
      </>

  )
}

export default Hero