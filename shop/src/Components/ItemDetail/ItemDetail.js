

import React from 'react'

const ItemDetail = ({article, img, detail , price} ) => {
  return (
  <div>
      <h2>{article}</h2>
      <img src={img} alt={article}></img>
      <p>{detail}</p>
      <p>Precio: $ {price}</p>
      <button>Agregar a carrito</button>
    </div>
  
  );
};
export default ItemDetail;
  