import { funAgregarProduct as funAgregarProduct, funCalcularStock, productos } from './product.service'

funAgregarProduct(
  {
    name: 'Gorros adiddas',
    //create: new Date(),
    create: new Date(1999,1,1),
    strok: 788,
    size: 'XL'
  }
);

funAgregarProduct(
  {
    name: 'Mochilas adiddas',
    create: new Date(),
    strok: 145,
    size: 'M'
  }
);

funAgregarProduct(
  {
    name: 'Sandalias adiddas',
    create: new Date(2023,2,2),
    strok: 241,
    size: 'S'
  }
);

console.log(productos);
console.log('Calculo total de productos: ',funCalcularStock());




