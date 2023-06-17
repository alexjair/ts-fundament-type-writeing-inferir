(() =>{

  let ban = true;
  let neg = false;

  let isNew:  boolean = true;
  let isName: boolean;
  isName = false;

  const random = Math.random();
  console.log('random: ',random);

  isNew = random >= 0.5 ? true : false;
  console.log("isNew? ",isNew);

  console.log(isName);

})();


