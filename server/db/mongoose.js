var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// In heroku env set -> MONGODB_URI="mongodb://node:Mexican22@ds259111.mlab.com:59111/node-api"

mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};