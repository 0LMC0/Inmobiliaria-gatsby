import React, { useState } from 'react';
import logo from '../../assets/img/logo/logo.png';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaLink, FaAngellist } from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';
import { motion } from 'framer-motion';
import './footerStyles/footerStyles.css';
import { GiClick } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { CiBoxList } from 'react-icons/ci';
import { VscDebugBreakpointData } from 'react-icons/vsc';

const Footer = () => {
  const [dropdownIndex, setDropdownIndex] = useState(null);

  const handleDropdownToggle = (index) => {
    if (dropdownIndex === index) {
      setDropdownIndex(null);
    } else {
      setDropdownIndex(index);
    }
  };

  const FAQ = [
    {
      question: '¿Qué son los PDF de contactos y cómo puedo utilizarlos?',
      answer: 'Los PDF de contactos son documentos digitales que contienen información de contacto de personas o empresas en un formato fácil de usar. Podes utilizarlos para expandir tu red de contactos, encontrar clientes potenciales, establecer conexiones comerciales o para cualquier otro propósito relacionado con la comunicación y el networking.',
    },
    {
      question: '¿Cómo puedo adquirir los PDF de contactos?',
      answer: 'Puedes adquirir los PDF de contactos a través de nuestra plataforma en línea. Simplemente navega por nuestra selección de PDF disponibles, selecciona los que te interesen y sigue los pasos para completar la compra. Una vez completado el proceso de pago, podrás descargar los PDF de inmediato y comenzar a utilizarlos.',
    },
    {
      question: '¿Qué tipo de información contiene un PDF de contactos?',
      answer: 'Los PDF de contactos pueden contener una variedad de información, que puede incluir nombres, direcciones de correo electrónico, números de teléfono, direcciones físicas, enlaces a sitios web y otra información relevante de contacto. La cantidad y el tipo de información pueden variar según el PDF específico que elijas.',
    },
    {
      question: '¿Los PDF de contactos son actualizados y verificados?',
      answer: 'Sí, nos esforzamos por proporcionar PDF de contactos actualizados y verificados para garantizar la precisión y la relevancia de la información. Utilizamos métodos de recopilación de datos confiables y realizamos verificaciones periódicas para mantener la calidad de nuestros productos.',
    },
    {
      question: '¿Puedo personalizar o solicitar PDF de contactos específicos según mis necesidades?',
      answer: 'Sí, ofrecemos servicios de personalización y creación de PDF de contactos según tus requisitos específicos. Si necesitas información de contacto de un nicho o industria particular, o si deseas información adicional que no está disponible en nuestros PDF estándar, contáctanos y estaremos encantados de discutir tus necesidades y proporcionarte una solución personalizada.',
    },
  ];

  return (
    <footer className='footer-container'>
      <div className='footer-top'>
        <div className='footer-logo'>
          <img src={logo} alt='Company Logo' />
          <p className='company-name'>Cs.Mayoristas</p>
          <img src ="https://images.dmca.com/Badges/dmca-badge-w100-2x1-02.png?ID=9d378e51-356f-4191-87ab-1a25fe2b8b76"  alt="DMCA.com Protection Status" />  <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
        </div>
        <div className='footer-links'>
          <div className='links-column'>
            <h4>Categorías</h4>
            <ul>
              <motion.li whileHover={{scale: 1.05}} whileTap={{scale: 0.98}} > <a className='faq-question' href="#catalogos">Rubros disponibles</a></motion.li> 
              <motion.li whileHover={{scale: 1.05}} whileTap={{scale: 0.98}}><a className='faq-question' href="#catalogos">Cursos Disponibles</a></motion.li>
              <motion.li whileHover={{scale: 1.05}} whileTap={{scale: 0.98}}><a className='faq-question' href="https://practienda.com" target='_blank'> <FaLink /> Necesito un sitio web</a></motion.li>
              <motion.li whileHover={{scale: 1.05}} whileTap={{scale: 0.98}}> <Link className='faq-question' to='//contacto'>Quiero Formar Parte De Las Listas</Link></motion.li>
            </ul>
          </div>
          <hr />
          <div className='links-column'>
          
            <h4>Servicios</h4>
            <ul>
            <motion.li whileHover={{scale: 1.05}} whileTap={{scale: 0.98}} > <a className='faq-question' href="#catalogos">PDFs de contactos</a></motion.li>
            <motion.li whileHover={{scale: 1.05}} whileTap={{scale: 0.98}}><a className='faq-question' href="https://wa.me/5491132493803?text=Hola!%20escribo%20desde%20la%20web%20de%20CS.mayoristas%20y%20estaba%20interesad@%20en%20el%20Marketing%20%F0%9F%9B%92%F0%9F%9A%80" >Servicios de Marketing Especializados</a></motion.li>
            <motion.li whileHover={{scale: 1.05}} whileTap={{scale: 0.98}}><a className='faq-question' href="https://practienda.com" target='_blank'> <FaLink /> Necesito un sitio web</a></motion.li>
            <motion.li whileHover={{scale: 1.05}} whileTap={{scale: 0.98}} > <a className='faq-question' href="#catalogos">Curso E-commerce version 
                PRO+++ </a></motion.li>
              
            </ul>
          </div>
          <hr />
          <div className='links-column'>
            <h4>Preguntas Frecuentes</h4>
            <ul>
              {FAQ.map((faq, index) => (
                <motion.li key={index} onClick={() => handleDropdownToggle(index)} whileHover={{scale: 1.01}} whileTap={{scale: 0.98}} className='faq-question'><GiClick />{faq.question}</motion.li>
              ))}
              {dropdownIndex !== null && (
                <motion.div className='faq-answer' initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                  <p>{FAQ[dropdownIndex].answer}</p>
                </motion.div>
              )}
            </ul>
          </div>
          <hr />
          <div className='social-icons'>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              target='_blank'
              href='https://www.instagram.com/cs.mayoristas/'
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href='https://api.whatsapp.com/send?phone=541132493803'
            >
              <FaWhatsapp />
            </motion.a>
          </div>
        </div>
      </div>
      <hr />
      <div className='footer-bottom'>
        <div className='contact-info'>
          <FaMapMarkerAlt />
          <p>Buenos Aires, Argentina</p>
        </div>
      </div>
      <p className='copyright'>&copy; {new Date().getFullYear()} Cs.mayoristas. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
