import { useContext } from 'react';
import { dataContext } from '../../Context/DataContext';

const TotalItems = () => {
    const { cart } = useContext(dataContext);  

    const totalQuantity = cart.reduce((acc, item) => acc + item.quanty, 0);

    if (totalQuantity === 0) {
        return null; // No renderizar nada si no hay elementos en el carrito
    }

    return <span className='cart-items-total'>{totalQuantity}</span>;
}

export default TotalItems;
