import React from 'react'
import '../banner/bannerStyles/bannerStyles.css'

const Banner = () => {
  return (
    <div className='banner-container'>
        <ul className='ul-banner-top'>
            <li className='li-banner-top'><strong style={{color: '#d12727'}}>+1000 Contactos Verificados</strong></li>
            <hr />
            <li className='li-banner-top'>Alianzas Estratégicas</li>
            <hr />
            <li className='li-banner-top'>Amplía Tu Catálogo</li>
            <hr />
            <li className='li-banner-top'>Optimización de Costo</li>
        </ul>
    </div>
  )
}

export default Banner