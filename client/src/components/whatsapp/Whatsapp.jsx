import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import './whatsapp.css'
import { motion } from 'framer-motion';

const Whatsapp = () => {
  return (
    <>
    <a href="https://wa.me/5491132493803?text=Hola!%20escribo%20desde%20la%20web%20de%20CS.mayoristas%20%F0%9F%9B%92%F0%9F%9A%80" target='_blank'>
        
 
    <motion.div 
        whileInView={{ y: [null, -100, 0] }}
        whileHover={{scale: 1.19}}
        whileTap={{ scale: 0.99 }}
        
        className='whatsapp-btn'>
        <FaWhatsapp />
        <motion.h3 

        
        className='notification-whatsapp'>1</motion.h3>
    </motion.div>
       </a>
    </>
  )
}

export default Whatsapp