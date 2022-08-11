import './ItemCount.css'
import { useState, useContext } from 'react'
import { CartContext } from "../../Context/CartContext"

const ItemCount = ({setQuantitySelected, stock, productData}) => {
    const { addProductToCart } = useContext(CartContext)

    const [countQuantity, setCountQuantity] = useState(1)

    const addQuantity = () => {
        if (countQuantity < stock){
            setCountQuantity (countQuantity + 1)
    }}

    const removeQuantity = () => {
        if (countQuantity > 1){
            setCountQuantity (countQuantity - 1)
            }
    }
        const onAdd = () => {
            addProductToCart(productData)
            setQuantitySelected(countQuantity)
        }
    
    
    
    return(
        <>
    <section className='countBuy'>
    <div className="countProduct"> 
    <button onClick={removeQuantity}> - </button>  
    <p>{countQuantity}</p>
    <button onClick={addQuantity}> + </button>
    </div>
    <button onClick={onAdd}>Agregar al Carrito</button>
    </section>
    </>
    )
}
        
        
export default ItemCount