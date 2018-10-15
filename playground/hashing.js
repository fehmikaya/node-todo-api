// const {SHA256} = require('crypto-js');

// console.log(SHA256('Hello Andrew').toString());

// var secret = 'Some Secret';

// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256( JSON.stringify(data) + secret).toString()
// }

// var result = SHA256( JSON.stringify(token.data) + secret).toString();

// if (token.hash === result){
//     console.log('Not changed', result);
// }

const jwt = require('jsonwebtoken');

var data = {
    text: 'Lorem ipsum'
};

var token = jwt.sign(data, 'abc123');

console.log(token);

var result = jwt.verify(token, 'abc123');

console.log(result.text);
