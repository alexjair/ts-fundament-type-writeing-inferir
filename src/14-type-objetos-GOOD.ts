(() => {

  type myType = 'S'|'M'|'S'|'XL';
  type Product = {
          title: string,
          create: Date,
          strok: number,
          size?: myType
       };

  const productos : Product[] = [];

  const  funAddProduct = (
    data: Product
  )=>{
    productos.push(data);
    console.log(productos);
  }

  //ejecutar la funcion
  funAddProduct(
    {
      title: 'Zapatos adiddas',
      //create: new Date(),
      create: new Date(1999,1,1),
      strok: 788,
      size: 'XL'
    }
  );



})();
