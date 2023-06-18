//modelo de install original en javascript
//var _ = require('lodash');

//modo de uso en typescripts
import _ from 'lodash';

const data = [
  {
      username: 'nico',
      role: 'admin'
  },
  {
      username: 'Valentina',
      role: 'seller'
  },
  {
      username: 'Zulema',
      role: 'seller'
  },
  {
      username: 'Santiago',
      role: 'seller'
  }
]

const rta = _.groupBy(data, (item) => item.role)
console.log(rta)
