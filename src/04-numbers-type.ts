(() =>{
  let productPrice = 100;
  productPrice = 12;
  productPrice = 12.99;
  console.log("Precio:",productPrice);

  let productInStock: number; //Yo inferi un tipo number
  let productInStockNew = 500; //Typescript inferio un tipo number

  console.log("precio: ",productInStock); //error

  let num = parseInt('sfsdfd');
  console.log('num: ',num);

  //analisis hexadecimal
  let hex = 0xfff;
  console.log("hex: ",hex);

  //analisis binario
  let bin = 0b1010;
  console.log("bin: ",bin);


})();


