(() => {

  const login = (
    data : { email:string, password: number}
  ) =>{
    console.log(data);
  }

  console.log('go!');

  //login('alexjair@gmail.com','132456');

  login({
    email:'alexjair@gmail.com',
    password: 132456,
  });

  //add producto

  type myType = 'S'|'M'|'S'|'XL';

  const productos : any[] = [];

  const  funAddProduct = (
    data: {
    title: string,
    create: Date,
    strok: number,
    size?: myType
    }
  ) => {
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
