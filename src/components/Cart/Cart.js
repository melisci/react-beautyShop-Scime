
import { CartContext } from "../../Context/CartContext"
import {useContext} from 'react'
import {Trash} from "react-bootstrap-icons";


import {Link} from 'react-router-dom'

const Cart = () => {
    const { cartProducts, deleteProduct, totalProducts } = useContext(CartContext)
 
    return(
        <>
    {cartProducts.length !== 0 }
    
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
               
               
                </>)
}

export default Cart 