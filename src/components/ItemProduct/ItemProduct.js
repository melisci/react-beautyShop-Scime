
import ItemCount from '../ItemCount/ItemCount'
import './ItemProduct.css'



const ItemProduct = () => {
    



    return(
        <div className="item-product">
            {/* <div className='float-options'>
                <p>ENVIO GRATIS</p>
                <button></button>
            </div>
            <img src={`/assets/${image}`} alt="Imagen producto" />
            <div className='detail-product'>
                <p>{title}</p>
                <p> 6 Cuotas sin interes</p>
                <p>Envio gratis a partir de $6000</p>
                <span>$ {price}</span>
              
            </div> */}
        <ItemCount />
        </div> 
        
    )
}

export default ItemProduct