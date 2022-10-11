import {Link} from 'react-router-dom'

const ItemDetail = ({article, img, detail , price} ) => {
  return (
  <div>
      <h1>Detalle Articulo</h1>
      <h2>{article}</h2>
      <img src={img}></img>
      <p>{detail}</p>
      <p>Precio: $ {price}</p>
      <button>Agregar a carrito</button>
    </div>
  
  );
};
export default ItemDetail;
