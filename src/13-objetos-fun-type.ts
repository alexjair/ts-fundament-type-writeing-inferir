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

})();
