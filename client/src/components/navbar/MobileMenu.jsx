import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, setIsOpen }) => {
    return (
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            <div className="ul-list-navbar">
                <motion.li
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.99 }}
                >
                    <Link to='/'>
                        Inicio
                    </Link>   
                </motion.li>
                <hr />
                <motion.li
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.99 }}
                >
                    <a href="/#catalogos">
                        Adquirir Catalogos
                    </a>
                </motion.li>
                <hr />
                <motion.li
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.99 }}
                >
                    <Link to='/contacto'>
                        Soy proveedor y quiero formar parte de las listas
                    </Link>
                </motion.li>
            </div>
        </div>
    );
};

export default MobileMenu;
