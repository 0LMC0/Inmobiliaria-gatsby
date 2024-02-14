import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';
import './cartContentStyles//CartTotal.css'
import { CiCircleInfo } from "react-icons/ci";


const CartTotal = () => {

  const {cart} = useContext(dataContext);

  const total = cart.reduce((acc, elem) => acc + elem.price, 0)
  return (

    <>

    <div className='cart-total-container'>
      <div className='text-info-total'>
        <CiCircleInfo className='icon'/>
        <h3 >Al finalizar el pago se te redireccionara a una pagina donde podras contactarte con nuestro equipo para que te envie los PDFs adquirirdos</h3>
      </div>

    <div>
      
    <div className='cart-total-box'>
      <div className='box-price'>
      <h3 className='subtotal'>SubTotal:</h3>
      <h2 className='subtotal-price'>${total}</h2>
      </div>
      
      <hr />

      <div className='box-price'>
      <h3 className='total-cart'>Total:</h3>
      <h2 className='total-price-cart'>${total}</h2>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default CartTotal