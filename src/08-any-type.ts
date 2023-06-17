(() =>{
  let myAny: any;
  myAny = 100;
  myAny = null;
  myAny = [];
  myAny = {};
  myAny = '';
  myAny = '';

  let vAll = [null,'',true,[],1];

  myAny = 'hola';
  const resp = (myAny as string).toLowerCase();
  console.log(resp);

  myAny = 2023;
  const rsp2 = (myAny as number).toFixed();
  console.log(rsp2);
  const rsp3 = (<number>myAny).toFixed();
  console.log(rsp3);


})();
