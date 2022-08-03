import React,{useState, useEffect} from "react";
import products from "../../utils/products.mock"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

  const [productData, setProductData] = useState({})

  const { id } = useParams()
  
  useEffect( () => {
      filterById()
  }, [id])
         
               const filterById = () => {
                products.some( (product) => {
                    if(product.id == id) {
                        console.log("producto filtrado: ", product)
                        setProductData(product) 
                    }
                }
            )
            }
            return(
                <>
                    <ItemDetail data={productData}/>
                </>
            )
             




}

export default ItemDetailContainer