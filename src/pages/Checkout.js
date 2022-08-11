import {useContext} from 'react'
import { CartContext } from '../Context/CartContext';
import {Trash} from "react-bootstrap-icons";
import {Link} from 'react-router-dom'

const Checkout = () => {
    const { cartProducts, clear, deleteProduct, totalProducts } = useContext(CartContext)
    return(
        <>
    {cartProducts.length !== 0 && <p>{totalProducts}</p>}
    
    <h2>Carrito de Compras</h2>
    
    {cartProducts.map((product) => {
                    return(
                        
                        <div className='item-cart-product' key={product.id}>
                            <img src={`/assets/${product.pictureUrl}`} alt="" />                            
                                <p>{product.title}</p>  
                                <p>$ {product.price}</p>
                                <Trash onClick={() => deleteProduct(product)}/>
                                
                                
                        </div>
                        
                    )
                    
                })}
                <button><Link to="/#">Comprar</Link></button>
                <button><Link to="/#">ver más productos</Link></button>
                <button onClick={() => clear()} className={"btn-delete-all"}>Vaciar carrito</button>
                
                </>)
}

export default Checkout