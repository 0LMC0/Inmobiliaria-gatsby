import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './styles/success.css';
import { FaWhatsapp } from 'react-icons/fa';

const Success = () => {
  return (
    <motion.div
      className='success-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='upperbox-payment'>
        <div>
          <FaCheckCircle className='success-icon' />
          <h2>¡Gracias por tu compra!</h2>
          <p>Hemos recibido tu pedido correctamente.</p>
          <p>Por favor, contáctanos a través de WhatsApp para recibir tus PDFs.</p>
          <a href='https://api.whatsapp.com/send?phone=541132493803' className='whatsapp-button'>
            <FaWhatsapp />
            Contactar a WhatsApp
          </a>
          <Link to='/' className='home-button'>
            Volver al Inicio
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Success;
