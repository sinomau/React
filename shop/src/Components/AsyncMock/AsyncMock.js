import image1 from "../AsyncMock/assets/img/homedeco.jpg";
import image2 from "../AsyncMock/assets/img/gadget.jpg";
import image3 from "../AsyncMock/assets/img/gaming.jpg";
import image4 from "../AsyncMock/assets/img/figura.jpg";
import image5 from "../AsyncMock/assets/img/arte.jpg";
import image6 from "../AsyncMock/assets/img/herramientas.jpg";

const products = [
  {
    id: '0',
    article: "Maceta",
    img: image1,
    mat: "PLA",
    price: 1000,
    stock: 2,
    detail:"Macetas realizadas en PLA, diversos colores."

  },
  {
    id: '1',
    article: "Ipad Gadget",
    img: image2,
    mat: "PLA",
    price: 1500,
    stock: 4,
    detail:"Gadgets para Ipad ,Iphone realizadas en PLA, diversos colores.",
  },
  {
    id: '2',
    article: "Figura Pokemon",
    img: image3,
    mat: "PLA",
    price: 1800,
    stock: 5,
    detail:"Figuras de pokemon realizadas en PLA, diversos colores.",
  },
  {
    id: '3',
    article: "Figura Mario Bross",
    img: image4,
    mat: "PLA",
    price: 1800,
    stock: 11,
    detail:"Figuras realizadas en PLA, diversos colores y personajes",
  },
  {
    id: '4',
    article: "Cuadro Alce",
    img: image5,
    mat: "PETG",
    price: 2000,
    stock: 3,
    detail:"Cuadro Alce realizados en PETG, diversos colores y diseños.",
  },
  {
    id: '5',
    article: "Prensas",
    img: image6,
    mat: "PETG",
    price: 1200,
    stock: 5,
    detail:"Prensas realizadas en PETG, diversos colores.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise (resolve => {
    setTimeout(() => {
      resolve(products.find(prod => {
        return prod.id === id
      }))
    }, 100 );
  })
} 


