import {useContext} from 'react'
import { CartContext } from '../Context/CartContext';

import {Link} from 'react-router-dom'
import Cart from '../components/Cart/Cart'

const Checkout = () => {
    const { cartProducts, clear } = useContext(CartContext)
    
    return(
        <>
        {cartProducts.length <= 0 ? <h2>No hay productos en el carrito</h2>:
        <><h2>Productos del Carrito</h2><Cart /><button onClick={() => clear()} className={"btn-delete-all"}>Vaciar carrito</button>
        <button><Link to="/#">Finalizar Compra</Link></button></>}
                
                <button><Link to="/#">ver más productos</Link></button>
                
                
                </>)
}

export default Checkout