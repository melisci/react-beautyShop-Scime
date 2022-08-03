
import ItemCount from '../ItemCount/ItemCount'

import './Item.css'
import { Link } from 'react-router-dom'



const Item = ({data}) => {
    
    const {title,  price, pictureUrl, pictureUrl2, stock, id} = data


    return(
        <div className="item-product">
         <Link to={`/productos/${id}`}>            
            <img src={`/assets/${pictureUrl}`} alt="Imagen producto" /> 
            <div className='detail-product'>
                <p>{title}</p>
                
                <p>Productos en stock: {stock}</p>
                <span className='bold'>$ {price}</span>
              
            </div>
        </Link> 
        <ItemCount stock={stock} />
        
        </div> 
        
    )
}

export default Item