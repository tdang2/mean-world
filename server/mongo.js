const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
if (app.get('env') == 'development_azure') {
    var mongod_env = require(path.join(__dirname), 'env/auzre');
} else {
    var mongod_env = require(path.join(__dirname, 'env/local'));
}

function connect() {
    return mongoose.connect(mongod_env.mongodb_url, mongod_env.mongo_options);  
}

module.exports = {
  connect,
  mongoose
};