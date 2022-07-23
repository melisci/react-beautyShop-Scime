import ItemProduct from "../ItemProduct/ItemProduct"

const ItemListContainer = ({greeting}) => {
    return(
    <>   
    <h2>Productos en Promoción</h2>
    <p>{greeting} </p>
    <ItemProduct />
    </>

     )
    }
        
export default ItemListContainer