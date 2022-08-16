import {useContext, useState} from 'react'
import {CartFill} from "react-bootstrap-icons";
import { CartContext } from '../../Context/CartContext';
import './NavBar.css' 
import {Trash} from "react-bootstrap-icons";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom'

const CartWidget = () => {
    

    const { cartProducts, clear, deleteProduct, totalProducts } = useContext(CartContext)
 
    return(
        <>
    {cartProducts.length !== 0 }
    <div className="qty-display">{cartProducts.length}</div>
    <NavDropdown title={<CartFill className="cartWidget"/>} id="basic-nav-dropdown">
    
    
    
    {cartProducts.map((product) => {
                    return(
                        <Dropdown.Item eventKey="1">
                        <div className='item-cart-product' key={product.id}>
                            <img src={`/assets/${product.pictureUrl}`} alt="" />                            
                                <p>{product.title}</p>  
                                <p>$ {product.price}</p>
                        </div>
                        <Trash onClick={() => deleteProduct(product)}/>   
                        <Dropdown.Divider />
                        </Dropdown.Item>
                    )
                    
                })}
                <button><Link to="/cart">Ver carrito</Link></button>
                <button onClick={() => clear()} className={"btn-delete-all"}>Borrar todo</button>
                </NavDropdown>
                </>)
                }
                



export default CartWidget