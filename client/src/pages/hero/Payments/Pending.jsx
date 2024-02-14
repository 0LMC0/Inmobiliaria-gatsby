import React from 'react';
import './styles/pending.css';

const Pending = () => {
  return (
    <div className="pending-container">
      <div className="upperbox-payment">
        <div>
          <h2>Pending</h2>
          <p>Estamos procesando tu pedido. Por favor, espera un momento.</p>
          <div className='box-buttons-pending'>
          <button className="whatsapp-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="8"></line>
            </svg>
            Contactar por WhatsApp
          </button>
          <button className="home-button">Volver al inicio</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pending;
