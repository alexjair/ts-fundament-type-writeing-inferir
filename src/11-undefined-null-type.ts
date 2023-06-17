(() =>{
  //declaracion
  let myVar: string | null = null;
  let myVarUndefined: number | undefined = undefined;

  //asignacion de valores
  myVar = "hola";
  myVarUndefined = 17.12;

  function fundemo( name: string | null){
    //evitar el error del null use "if"
    if(name){
      console.log(`name string: ${name.toUpperCase()}`);
    }else{
      console.log(`name es null`);
    }
  }

  function fundemo2( name: string | null){
    //console.log(`name v2 string: ${name}`);
    let vBan = "Hola :) "
    let hello = vBan + (name?.toUpperCase() || 'sin nombre..');
    console.log(hello);
  }

  fundemo("Jair Good");
  fundemo(null);

  fundemo2("Jair Good");
  fundemo2(null);
})();
