import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../AsyncMock/AsyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { loading } from "../Loading/Loading";
import React from 'react'


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [load,setLoading] = useState(true);
  const {categoryId} = useParams()
  

  useEffect(() => {
    setLoading (true)
    const asyncFuntion = categoryId ? getProductsByCategory : getProducts

    asyncFuntion(categoryId).then(response => {
      setProducts(response)
    }).catch(error => {
      console.log(error)
    }).finally(()=> {
      setLoading(false)
    })
  },[categoryId])

  if(load){
    
    return (
    loading())
  }

  return (
    <div className="d-flex flex-column flex-wrap">
      <h1>{greeting}</h1>

      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
