var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// heroku config:set MONGOLAB_URI="mongodb://node:Mexican22@ds259111.mlab.com:59111/node-api"

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};