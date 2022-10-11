import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../AsyncMock/AsyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading,setLoading] = useState(true);
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

  if(loading){
    
    return (
    <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>)
  }

  return (
    <div className="d-flex flex-column flex-wrap">
      <h1>{greeting}</h1>

      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
