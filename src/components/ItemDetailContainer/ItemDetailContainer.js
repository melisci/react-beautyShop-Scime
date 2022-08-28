import React,{useState, useEffect} from "react";
import products from "../../utils/products.mock"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
//Firebase
import db from "../../firebaseConfig"
import { doc, getDoc } from "firebase/firestore"
import { async } from "@firebase/util"

const ItemDetailContainer = () => {

  const [productData, setProductData] = useState({})

  const { id } = useParams()
  
  /* useEffect( () => {
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
            } */
            useEffect( () => {
                getProduct()
                .then((res) => {
                    setProductData(res)
                })
            }, [id])
            
            const getProduct = async () => {
                const docRef = doc(db, 'productos', id)
                const docSnapshot = await getDoc(docRef)
                let product = docSnapshot.data()
                product.id = docSnapshot.id
                console.log('data con id:', product)
                return product
            }
            return(
                <>
                    <ItemDetail data={productData}/>
                </>
            )
             




}

export default ItemDetailContainer