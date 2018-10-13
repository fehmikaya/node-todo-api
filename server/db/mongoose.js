var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// heroku config:set MONGOLAB_URI="mongodb://node:Mexican22@ds259111.mlab.com:59111/node-api"
console.log('process.env.MONGOLAB_URI', process.env.MONGOLAB_URI);

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/TodoApp');

console.log('connected process.env.MONGOLAB_URI', process.env.MONGOLAB_URI);

module.exports = {mongoose};