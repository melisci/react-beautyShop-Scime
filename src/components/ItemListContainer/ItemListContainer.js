import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import products from '../../utils/products.mock.js'
import { collection, getDocs } from "firebase/firestore"
import db from "../../firebaseConfig"

const ItemListContainer = ({greeting}) => {
    
    const [listProducts, setListProducts] = useState([])

   
/*     const getProducts = new Promise( (resolve) => {
        setTimeout( () => {
            resolve(products)
        }, 2000)
    }), */
    const getProducts = async () => {
        const productCollection = collection(db, 'productos')
        const productSnapshot = await getDocs(productCollection)
        const productList = productSnapshot.docs.map( (doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }
    useEffect(() => {
        getProducts()
        .then((res) => {
            setListProducts(res)
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