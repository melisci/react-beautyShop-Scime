
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'


const Item = ({data}) => {
    const [quantitySelected, setQuantitySelected] = useState(0)
    const {title,  price, pictureUrl, pictureUrl2, stock, id} = data
    const addToCart = (e) => {
        console.log("click Producto", e)
        e.preventDefault();
    }

    return(
        <div className="item-product">
         <Link to={`/productos/${id}`}>            
            <img src={`/assets/${pictureUrl}`} alt="Imagen producto" /> 
            <div className='detail-product'>
                <p>{title}</p>
                
                <p>Productos en stock: {stock}</p>
                <span className='bold' onClick={addToCart}>$ {price}</span>
              
            </div>
        </Link> 
        <ItemCount stock={stock} setQuantitySelected={setQuantitySelected} productData={data}/>
        
        </div> 
        
    )
}

export default Item