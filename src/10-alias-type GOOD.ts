(() =>{

  //Alias type dato:
  type userID = number | string;
  let myVar : userID;
  myVar = 45;
  myVar = "hola";

  //Literal types
  type userType = 'M' | 'L' | 'XL' | 'S';
  let myTipo : userType;
  myTipo = "L";
  myTipo = "XL";
  myTipo = "S";

  function funGreeint( vSaludo: userID, vTipo: userType){
    if( typeof vSaludo === 'string'){
      console.log(`string: ${vSaludo.toLowerCase()}`);
      console.log(`string Mayuscula: ${vSaludo.toUpperCase()}`);
    }

    if( typeof vSaludo === 'number'){
      console.log(`number: ${vSaludo.toFixed()}`);
    }

    if( typeof vTipo === 'string'){
      console.log(`Talla producto: ${vTipo.toUpperCase()}`);
    }
  }

  funGreeint("hola jair","XL");
  funGreeint(21.45826974,"M");
  funGreeint(23.787826974,"S");
  funGreeint(2023,"L");

})();
