(() =>{
  let prices = [1,2,3,4,5];

  /* Método Push para agregar un elemento al final del array */
  prices.push(6);
  console.log(prices); // [1,2,3,4,5,6]
  prices.push("abc");
  prices.push(true);

  let arrayRow: (string | boolean | number)[]  = ["a","b","c","d","e",];
  arrayRow.push(true);
  arrayRow.push(39);
  arrayRow.push(55);
  arrayRow.push(false);
  console.log(arrayRow);

  let arrayPrices = [1,true,"a",4.77,[1,2,3,4],{a:1,b:"abc"}];
  console.log(arrayPrices);

  let arrayPricesV2: (string | number | boolean | number[] | {
      a: number;
      b: string;
  })[] = [];
  arrayPricesV2.push({
    a: 1,
    b: "jair"
  });
  console.log(arrayPricesV2);

  let arrayObj: (object)[] = [];
  arrayObj.push({
    a: 1,
    b: "jair",
    c: "July"
  });
  console.log(arrayObj);

  let arrayAny: (any)[] = [];
  arrayAny.push({
    b: "jair",
    c: "July"
  });
  arrayAny.push("La cxasa asdsdfer  .!! ");
  console.log(arrayAny);


})();


