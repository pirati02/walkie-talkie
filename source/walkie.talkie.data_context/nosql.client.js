var mongoose = require('mongoose')
var credentials = require('./nosql.credentials.js')

var credential = `mongodb://${credentials.userName}:${credentials.password}@ds037518.mlab.com:37518/walkie-talkie`

function MongoClient(){ 
    this.connect = connect
}

var connect = async () => { 
    return await mongoose.connect(credential, { useNewUrlParser: true })
} 

module.exports = new MongoClient();