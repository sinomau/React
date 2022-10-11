import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { getProducts } from "../AsyncMock/AsyncMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <div className="d-flex flex-column flex-wrap">
      <h1>{greeting}</h1>

      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
