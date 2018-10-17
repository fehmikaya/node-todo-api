//process.env.NODE_ENV is set to 'production' in a heroku env

var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
  var config = require('./config.json');
  var envConfig = config[env];

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}

//else process.env.NODE_ENV === 'production' (Heroku)
