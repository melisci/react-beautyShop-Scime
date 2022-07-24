
import ItemCount from '../ItemCount/ItemCount'

import './Item.css'




const Item = ({data}) => {
    
    const {title,  price, pictureUrl, stock} = data


    return(
        <div className="item-product">
        
            
            <img src={`/assets/${pictureUrl}`} alt="Imagen producto" /> 
            <div className='detail-product'>
                <p>{title}</p>
               
                <p>Productos en stock: {stock}</p>
                <span className='bold'>$ {price}</span>
              
            </div> 
        <ItemCount stock={stock} />
        </div> 
        
    )
}

export default Item