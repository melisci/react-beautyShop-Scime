import products from '../../utils/products.mock.js'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import React, { useState } from 'react';
const ItemDetail = () => {
    const [show, setShow] = useState(true);
    
    


    return(
        <div className="flex item-detail">
        
        <button type="button"   
        onClick={() => {setShow(!show);
        }}>
        <div className="columnCarrousel">
        
        <img src={`/assets/AcfDadatina.png`} alt="Imagen producto" />
        <img src={`/assets/AcfDadatina2.webp`} alt="Imagen producto" />
         
        </div>
        </button>
        
      
             
            
      {show ? (
       <div className='showProduct'><img src={`/assets/AcfDadatina.png`} alt="Imagen producto" /></div>
      ) : (
        <div className='showProduct'><img src={`/assets/AcfDadatina2.webp`} alt="Imagen producto" /></div>
      )}
            <div className='itemdescription'>
                <h2>{products.title}Serum ACF</h2>
                <p className="description"> {products.description} Fórmula apta para todo tipo de piel, incluyendo las sensibles. Sin ingredientes irritantes, colorantes o fragancias. Otorga balance y humectación a tu piel. Reduce la inflamación y/o enrojecimiento. Ayuda a controlar el acné y brinda luminosidad.</p>
                <p className='bold'>Productos en stock: 5{products.stock}</p>
                <span className='bold'>$ 200{products.price}</span>
                <ItemCount stock={5}/>
            </div> 
    
        </div> 
        
    )
   
   }
   
   export default ItemDetail