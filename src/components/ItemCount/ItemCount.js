import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({action, stock}) => {
    const [counter, setCounter] = useState(1)
    
    const addNumber = () => {
        if (counter < stock){
        setCounter (counter + 1)
        }
    }
    const removeNumber = () => {
        if (counter > 1){
        setCounter (counter - 1)
        }
    }
    return(
        <>
    <section className='countBuy'>
    <div className="countProduct"> 
    <button onClick={removeNumber}> - </button>  
    <p>{counter}</p>
    <button onClick={addNumber}> + </button>
    </div>
    <button onClick={action}>Agregar al Carrito</button>
    </section>
        </>    
       
        )
        }
        
 export default ItemCount