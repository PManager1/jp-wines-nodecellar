
var currentEnv;

currentEnv = process.env.NODE_ENV || 'development';

exports.env = {
  production: false,
  staging: false,
  test: false,
  development: false
};

exports.env[currentEnv] = true;

exports.log = {
  path: __dirname + ("/var/log/app_" + currentEnv + ".log")
};


exports.server = {
  port: 9600,
  ip: '127.0.0.1'
};


if (currentEnv !== 'production' && currentEnv !== 'staging') {  /*Dev */
  exports.db = {
  URL: "172.16.229.142", 
  db_port: 27017
};
}
else {  			 /*prod */
  exports.db = {
  URL: "127.0.0.1", 
  db_port: 27017
};
}

// exports.currentEnv;