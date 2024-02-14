import React, { useContext } from 'react';
import { dataContext } from '../Context/DataContext';
import './cartContentStyles/cartContent.css';
import { MdDelete } from "react-icons/md";
import './cartContentStyles/cartelements.css'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { VscFilePdf } from "react-icons/vsc";

const CartElements = () => {
    const { cart, setCart } = useContext(dataContext);

    const deleteProduct = (id) => {
        Swal.fire({
            title: "¿Estás seguro de que deseas eliminar este PDF del carrito?",
            showDenyButton: true,
            confirmButtonText: "Eliminar Producto",
            denyButtonText: `Cancelar`
        }).then((result) => {
            if (result.isConfirmed) {
                const newCart = cart.filter((product) => product.id !== id);
                setCart(newCart);
                Swal.fire("PDF Eliminado", "", "success");
            }
        });
    }

    return cart.map((pdf) => {
        return (
            <div className='cartContent' key={pdf.id}>
                <div className='picNname'>
                    <img src={pdf.image} alt="imagen" />
                    <div>
                        <h3 className='name'><VscFilePdf /> PDF de {pdf.nombre}</h3>
                        <h5 className='subName'>Cantidad:  {pdf.subNombre} De Fabricantes y Mayoristas</h5>
                    </div>
                </div>
                <hr />
                <div className="product-details">
                    <h4 className='price'> <span className='precio-unitario'>Precio Del PDF:</span> ${pdf.price}</h4>
                    <button className='cart-delete-button' onClick={() => deleteProduct(pdf.id)}><MdDelete /></button>
                </div>
            </div>
        );
    });
};

export default CartElements;
