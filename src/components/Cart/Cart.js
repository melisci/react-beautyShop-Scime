/* 
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

export default Cart  */


import { CartContext } from "../../Context/CartContext"
import {useContext, useState} from 'react'
import {Trash} from "react-bootstrap-icons";
import db from '../../firebaseConfig.js'
import { collection, addDoc } from 'firebase/firestore'
import Modal from '../Modal/Modal'


const Cart = () => {
    
    const [showModal, setShowModal] = useState(false)
    const { cartProducts, totalPrice, deleteProduct, totalProducts } = useContext(CartContext)
    const [success, setSuccess] = useState()
    // const { cartProducts, deleteProduct, totalPrice } = useContext(CartContext)
    const [order, setOrder] = useState({
        items: cartProducts.map((product) => {
            return {
                id: product.id,
                title: product.title,
                price: product.price
            }
        } ),
        buyer: {},
        date: new Date().toLocaleString(),
        total: totalPrice
    })
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email:''
    })



    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const submitData = (e) => {
        e.preventDefault()
        console.log("order para enviar: ", {...order, buyer: formData})
        pushData({...order, buyer: formData})
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSuccess(orderDoc.id)
        console.log('ORDEN GENERADA', orderDoc)
    }

 
    return(
        <div className="checkout-page">
            <div className="info-checkout">
                {console.log("order: ", order)}
                
                <span>TOTAL ({cartProducts.length} productos)  <b>$ {totalPrice}</b></span>
                
                <div className="container-checkout-products">
                    {cartProducts.map( (cartProduct) => {
                        const { title, pictureUrl, price} = cartProduct
                        return(
                            <div className='item-cart-product'>
                                <img src={`./assets/${pictureUrl}`} alt="imagen" />
                                <div >
                                    <p>{title}</p>
                                    <p>$ {price}</p>
                                    <Trash onClick={() => deleteProduct(cartProduct)}/> 
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
                <div>
                    <button onClick={() => setShowModal(true)}>FINALIZAR COMPRA</button>
                    <div>
                           <div>
                            <p>TOTAL: <b>$ {totalPrice}</b></p>
                            
                        </div>
                    </div>
                </div>
                {showModal && 
                    <Modal title="DATOS DE CONTACTO" close={() => setShowModal()}>
                        {success ? (
                            <>
                               <h3>Su orden se generó correctamente</h3>
                               <p>ID de compra : {success}</p>
                            </>
                        ) : (
                            <form onSubmit={submitData}>
                                <input 
                                    type='text' 
                                    name='name' 
                                    placeholder='Ingrese el nombre'
                                    onChange={handleChange}
                                    value={formData.name}
                                />
                                <input 
                                    type='number' 
                                    name='phone' 
                                    placeholder='Ingrese el telefono' 
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <input 
                                    type='email' 
                                    name='email' 
                                    placeholder='Ingrese el mail'
                                    value={formData.email}
                                    onChange={handleChange}

                                />
                                <button type="submit">Enviar</button>
                            </form>
                        )}
                    </Modal>
                }
        </div>
    )
}

export default Cart 