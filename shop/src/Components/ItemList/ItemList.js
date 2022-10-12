import Item from "../Item/Item";
import React from 'react'

const ItemList = ({ products }) => {
  return (
    <div className="d-flex flex-row flex-wrap align-items-center justify-content-center ">
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
