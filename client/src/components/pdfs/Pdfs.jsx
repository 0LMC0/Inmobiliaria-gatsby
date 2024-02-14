import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdVerifiedUser } from "react-icons/md";
import mplogo from '../../assets/img/cards-pdfs/mp-logo.png';
import { dataContext } from './../Context/DataContext';
import './pdfsStyles/pdfsStyles.css';
import { MdLabelImportant } from "react-icons/md";
import { BsCartCheck } from "react-icons/bs";



// alert
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { motion } from 'framer-motion';

const Pdfs = () => { 

  
  const { data, cart, setCart } = useContext(dataContext);
  const history = useNavigate(); // Obtener el objeto history

  const buyPdfs = (pdf) => {
    const pdfRepeat = cart.find((item) => item.id === pdf.id);

    if(pdfRepeat){
      Swal.fire({
        title: 'Este PDF ya esta agregado en el carrito',
        text: 'Podes seguir comprando o ir directamente a abonar',
        icon: 'success',
        showCancelButton: true,
        cancelButtonText: "Seguir comprando",
        confirmButtonText: 'Ir al Carrito',
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirigir al carrito
          history('/carrito');
        }
      });
    } else {
      setCart([...cart, { ...pdf, quanty: 1 }]);
      Swal.fire({
        title: "Agregaste este PDF a tu carrito",
        text: "¿Qué te gustaría hacer ahora?",
        icon: "success",
        showCancelButton: true,
        cancelButtonText: "Seguir comprando",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Ir al carrito",
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirigir al carrito
          history('/carrito');
        }
      });
    }
  };
 
  return (
    
    <div className='pdfs-container' id='catalogos'>
      <div className='titles-pdf-section'>
        <h2 className='title-pdf-section'>Listas de Proveedores y Fabricantes a un precio realmente económico</h2>
        <p className='subtitle-pdfs-section'>Porque entendemos lo que es <u>Emprender</u></p>
      </div>
      <div className='cards-pdfs-container'>
      {data && data.map((pdf) => (
          <motion.div 
          whileHover={{scale: 1.05}}
          initial={{ opacity: 0, y: +50 }}
          whileInView={{ opacity: 1, y: 0 }}
          key={pdf.id} className="card-pdfs">
            <img className='img-cards-pdfs' src={pdf.image} alt={pdf.nombre} />
            <div className='text-container-cards'>

              <div className='title-cards-container'>

                
                <h2 className='title-card-pdfs'><MdLabelImportant />{pdf.nombre}</h2>

                <h6>{pdf.subNombre}</h6>

                
              </div>
              <hr />
              <div className='subname-container'>
                <small className='small-text-subName'>Precio<br />Promocional</small>
                <p className='subName-card-pdfs'> ${pdf.price} <span className='small-text-subName'>ARS</span></p>
              </div>
              <hr />
              <p className='description-card-pdfs'>{pdf.description}</p>
              <hr />
              <ul className='ul-card-pdfs'>
              {pdf.benefits && pdf.benefits.map((benefit, index) => (
                <li className='li-card-pdfs' key={index}><MdVerifiedUser className='icon-card-benefits-pdf'/> {benefit}</li>
              ))}
              </ul>
              <div className='box-btn-card'>
                <motion.a 
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.9}}                  
                  className='button-cta-card' 
                  href={pdf.linkMp}
                  ><img className='mp-logo-cta' src={mplogo} alt="" />Abonar Desde MercadoPago</motion.a>
                  <small>Todos tus datos protegidos</small>
                <a 
                  className='button-cta-cart' 
                  onClick={() => buyPdfs(pdf)}
                  >Agregar Al Carrito <BsCartCheck />
                  </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pdfs;
