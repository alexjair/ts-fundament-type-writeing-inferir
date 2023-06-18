(() => {

  type myType = 'S'|'M'|'S'|'XL';

  //funciones normales, pero en des.uso
  function funOperacion(
    title: string,
    create: Date,
    strok: number,
    size: myType
  ){
    return {
      title,
      create,
      strok,
      size
    };
  }

  const result = funOperacion("mis obj de jair",new Date(), 12, "XL");
  console.log('result fun. obj: ',result);
  console.log('result fun. title: ',result.title);
  console.log('result fun. create: ',result.create);
  console.log('result fun. strok: ',result.strok);
  console.log('result fun. size: ',result.size);

  //funciones como Arrow
  const  funOperacion_v2Arrow = (
    title: string,
    create: Date,
    strok: number,
    size?: myType // size se vuelve opcional, por el "?"
  ) => {
    return {
      title,
      create,
      strok,
      size
    };
  }

  const result2 = funOperacion_v2Arrow("mis obj de jair",new Date(), 12);
  console.log('result fun. obj: ',result2);
  console.log('result fun. title: ',result2.title);
  console.log('result fun. create: ',result2.create);
  console.log('result fun. strok: ',result2.strok);
  console.log('result fun. size: ',result2.size); //size en type undefined y myType
})();
