import { Product } from './product.model'

export const productos : Product[] = [];

export const funAgregarProduct = (
  data: Product
)=>{
  productos.push(data);
}

export const funCalcularStock = (): number =>{
  let totalStok = 0;
  productos.forEach((row) =>{
    totalStok += row.strok;
  });
  return totalStok;
}
