
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

if (currentEnv !== 'production' && currentEnv !== 'staging') {  //dev
  exports.enableTests = true;
  exports.server.ip = '0.0.0.0';

  exports.db = {
  URL: "mongodb://localhost:dev /", 
  db_port: 9090
};
}
else {  //prod
  exports.enableTests = true;
  exports.server.ip = '0.0.0.0';

  exports.db = {
  URL: "mongodb://localhost:prod /", 
  db_port: 9090
};
}