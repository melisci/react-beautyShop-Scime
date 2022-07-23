import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import products from '../../utils/products.mock.js'

const ItemListContainer = ({greeting}) => {
    
    const [listProducts, setListProducts] = useState([])

    const getProducts = new Promise((resolve) => {
        setTimeout( () => {
            resolve(products)
        }, 2000)
    })
    useEffect(() => {
        getProducts
            .then( (res) => { 
                setListProducts(res)
            })
            .catch( (error) => { 
                
            })
            .finally( () => { // Siempre que termina por OK o Fallo
            //setSpinner(false) 
            })
    }, [])
    return(
    <>   
    
    <h2>{greeting} </h2>
    <div className="flex">
    <ItemList dataProducts={listProducts}/>
    </div>
    </>

     )
    }
        
export default ItemListContainer