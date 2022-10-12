import React from 'react'
import { useEffect, useState } from "react";
import { getProductById } from "../AsyncMock/AsyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import  {useParams} from 'react-router-dom'
import { loading } from "../Loading/Loading";



const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const {productId} = useParams()
  const [load2,setLoading] = useState(true);
  
  useEffect(() => {
    setLoading (true)
    getProductById(productId)
    .then(product => {
      setProduct(product)
    }).catch(error => {
      console.log(error)
    }).finally(()=> {
      setLoading(false)
      
    })
  }, [])

  if(load2){
    return(
     loading()
    )
  }

  return (
    <>
   <h1>Detalle de producto</h1>
   < ItemDetail {...product}/>
   </>
  );
};


export default ItemDetailContainer;
