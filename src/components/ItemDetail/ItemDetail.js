
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
/* import { Link } from 'react-router-dom' */
const ItemDetail = ({data}) => {
  
    const [show, setShow] = useState(true);
    const [quantitySelected, setQuantitySelected] = useState(0)
    


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
                <p className="description"> {data.description} </p>
                <p className='bold'>Productos en stock: {data.stock}</p>
                <span className='bold'>$ {data.price}</span><br/>
                {console.log("quantitySelected: ", quantitySelected)}
    {
        quantitySelected > 0 ? <button className="terminar"><Link to="/cart">TERMINAR COMPRA</Link></button> : <ItemCount stock={data.stock} setQuantitySelected={setQuantitySelected} productData={data}/>
    }
            </div> 
    
        </div> 
        
    )
   
   }
   
   export default ItemDetail