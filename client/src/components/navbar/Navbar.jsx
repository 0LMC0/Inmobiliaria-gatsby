import React from 'react';
import './navbarstyles/navbarStyles.css';
import logo from '../../assets/img/logo/logo.png';
import { BsFillPatchCheckFill, BsWhatsapp } from 'react-icons/bs';
import { TiShoppingCart } from 'react-icons/ti';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TotalItems from '../CartContent/cartContentStyles/TotalItems';


const Navbar = () => {

    return (
        <div className="navbar-container">
            <div className="logo-menu">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className="logo-container">
                        <img src={logo} alt="" />
                        <p>CS</p>
                        <BsFillPatchCheckFill className="icon-logo" />
                    </div>
                </Link>

                <ul className="ul-list-navbar">
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
                </ul>
            </div>
            <div className='whats-and-cart'>

            <motion.button
                className="cta-navbar"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.99 }}
            >
                <BsWhatsapp />
                <a href="https://wa.link/5q2h59">
                Continuar en WhatsApp
                </a>
            </motion.button>

            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.99 }}
            >            
                    <Link to={'/carrito'} className="seeCart">
                    <TiShoppingCart />
                    <h3 className='icon-number-cart bg-red-cart'>
                        <TotalItems />
                    </h3>
                </Link>
            </motion.div>
            </div>
        </div>
    );
};

export default Navbar;
