(() =>{

  let myVar: number | string;
  myVar = 45;
  myVar = "hola";

  function funGreeint( vSaludo: number | string){
    if( typeof vSaludo === 'string'){
      console.log(`string: ${vSaludo.toLowerCase()}`);
      console.log(`string Mayuscula: ${vSaludo.toUpperCase()}`);
    }

    if( typeof vSaludo === 'number'){
      console.log(`number: ${vSaludo.toFixed()}`);
    }
  }

  funGreeint("hola jair");
  funGreeint(21.45826974);
  funGreeint(23.787826974);
  funGreeint(2023);

})();
