
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import React, { useState } from 'react';
/* import { Link } from 'react-router-dom' */
const ItemDetail = ({data}) => {
  
    const [show, setShow] = useState(true);
    
    


    return(
        <div className="flexbox item-detail">
        
        <button type="button"   
        onClick={() => {setShow(!show);
        }}>
        <div className="columnCarrousel">
        
        <img src={`/assets/${data.pictureUrl}`} alt="Imagen producto" />
        <img src={`/assets/${data.pictureUrl2}`} alt="Imagen producto" />
         
        </div>
        </button>
        
      
             
            
      {show ? (
       <div className='showProduct'><img src={`/assets/${data.pictureUrl}`} alt="Imagen producto" /></div>
      ) : (
        <div className='showProduct'><img src={`/assets/${data.pictureUrl2}`} alt="Imagen producto" /></div>
      )}
            <div className='itemdescription'>
                <h2>{data.title}</h2>
                <p className="description"> {data.description} Fórmula apta para todo tipo de piel, incluyendo las sensibles. Sin ingredientes irritantes, colorantes o fragancias. Otorga balance y humectación a tu piel. Reduce la inflamación y/o enrojecimiento. Ayuda a controlar el acné y brinda luminosidad.</p>
                <p className='bold'>Productos en stock: {data.stock}</p>
                <span className='bold'>$ {data.price}</span>
                <ItemCount stock={data.stock} />
            </div> 
    
        </div> 
        
    )
   
   }
   
   export default ItemDetail