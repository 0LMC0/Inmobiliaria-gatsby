import React, { useContext, useState, useEffect } from 'react';
import { FaInstagram, FaWhatsapp, FaRegAddressBook } from 'react-icons/fa';
import { IoArrowBackSharp } from 'react-icons/io5';
import { TiShoppingCart } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { dataContext } from '../Context/DataContext';
import CartElements from './CartElements';
import CartTotal from './CartTotal';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from 'axios';
import { CiCircleCheck, CiCirclePlus } from "react-icons/ci";
import { CiCircleChevDown } from "react-icons/ci";
import { motion } from 'framer-motion';
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";

const CartContent = () => {
  const { setCart, cart, data } = useContext(dataContext);
  const [preferenceId, setPreferenceId] = useState(null);
  const [loading, setLoading] = useState(false); // Estado para controlar el estado de carga del botón

  initMercadoPago('APP_USR-a43cf2db-eda3-4e67-a4b5-befaade865dc', { locale: 'es-AR' });

  const getRandomProducts = () => {
    const availableProducts = data.filter(product => !cart.find(item => item.id === product.id));
    const randomProducts = [];

    if (availableProducts.length === 0) {
      return randomProducts;
    }

    while (randomProducts.length < 2 && availableProducts.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableProducts.length);
      randomProducts.push(availableProducts[randomIndex]);
      availableProducts.splice(randomIndex, 1);
    }

    return randomProducts;
  };

  const randomProducts = getRandomProducts();

  const createPreference = async () => {
    try {
      setLoading(true); // Establecer el estado de carga a true al iniciar la solicitud
      const preferenceItems = cart.map(item => ({
        title: item.nombre,
        unit_price: Number(item.price),
        quantity: Number(item.quanty),
      }));
  
      const response = await axios.post('https://cs-server-gamma.vercel.app/create_preference', {
  items: preferenceItems,
}, {
  headers: {
    'Content-Type': 'application/json'
  }
});
  
      const { id } = response.data;
      return id;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false); // Establecer el estado de carga a false al finalizar la solicitud, independientemente del resultado
    }
  };
  

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  const handleAddToCart = (product) => {
    setCart([...cart, { ...product, quanty: 1 }]);
    Swal.fire({
      title: "Agregaste este PDF a tu carrito!",
      confirmButtonText: 'Ir al carrito',
      icon: "success",
    });

    // No es necesario llamar a handleBuy aquí
  };

  return (
    <div className="cart-container">
      <div className="sides-cart">
        <div className="left-side-cart">
          <div className="title-cart-left-side">
            <h3><CiCircleChevDown /> Agrega PDFs a tu compra 
            </h3>
            <hr />
            <div className="add">
              <ul>
                {randomProducts.length === 0 ? (
                  <p>No hay más productos disponibles para agregar al carrito.</p>
                ) : (
                  randomProducts.map(product => (
                    <li key={product.id}>
                      <img src={product.image} alt={product.nombre} />
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleAddToCart(product)}
                      >
                        <CiCirclePlus />
                      </motion.button>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
          <div className="socials">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.instagram.com/cs.mayoristas/"
            >
              <FaInstagram className='icon' /> @Cs.mayoristas
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.instagram.com/cs.mayoristas/"
            >
              <FaWhatsapp className='icon' /> WhatsApp
            </motion.a>
          </div>
        </div>
        <div className="right-side-cart">
          <h2 className='right-side-cart-title'><CiCircleCheck /> Finaliza tu Compra</h2>
          <hr />
          {cart.length > 0 ? (
            <div className='total-cart-end-cont'>
              <CartElements />
              <div className='total-and-buttons-cart'>
                <CartTotal />
                {/* Botón con estado de carga y subtítulo */}
                <motion.button
                  whileHover={{scale: 1.01}}
                  whileTap={{scale: 0.95}}
                  className='btn-proceed'
                  onClick={handleBuy}
                  disabled={loading} // Deshabilitar el botón si está en estado de carga
                >
                  {loading ? (
                    <>
                      <span>Procesando...</span> {/* Texto mientras se está procesando */}
                      <div className="spinner"></div> {/* Spinner de carga */}
                    </>
                  ) : (
                    <>
                      <span>Confirmar Carrito</span>
                      <IoIosCheckmarkCircleOutline className='icon' />
                    </>
                  )}
                </motion.button>
                {/* Subtítulo persuasivo */}
                <p className="click-mercado-pago"> <CiCircleInfo className='icon' /> Confirma el carrito para continuar</p>
                {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts: { valueProp: 'smart_option' } }} />}
                <Link className='btn-comeback' to='/'><GoChevronLeft /> Volver Al Inicio</Link>
              </div>
            </div>
          ) : (
            <>
              <h2  className='title-vacio-cart'><FaRegAddressBook /> Tu carrito está vacío!</h2>
              <h5 className="subtitle-nopdf">Descubri nuestra amplia selección de PDFs de proveedores y encontra los recursos que necesitas para impulsar tu negocio.</h5>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link className="btn-volver-cart" to="/"><IoArrowBackSharp /> Explora Nuestra Tienda!</Link>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartContent;
