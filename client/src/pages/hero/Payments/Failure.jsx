import React from 'react';
import { motion } from 'framer-motion';
import './styles/failure.css'

const Failure = () => {
  return (
    <div className='failure-container'>
      <div className='upperbox-payment'>
        <div>
          <h2>¡Lo sentimos!</h2>
          <p>Hubo un problema con tu pago.</p>
          <p>Por favor, inténtalo de nuevo o contáctanos para obtener ayuda.</p>

          <div className='volver-atras-failure'>
          <motion.button className='whatsapp-button' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
            Contáctanos en WhatsApp
          </motion.button>
          <motion.button className='home-button' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
            Volver al Inicio
          </motion.button>
          </div>
        </div>
      </div>
      <hr />
      <div className='footer-payment'>
        <div className='contact-info'>
          <p>¿Necesitas ayuda? Contáctanos:</p>
          <motion.a
            href='https://api.whatsapp.com/send?phone=541132493803'
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            target='_blank'
            rel='noopener noreferrer'
          >
            <motion.button className='whatsapp-button'>
              Contáctanos en WhatsApp
            </motion.button>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Failure;
