var express = require('express');
var bodyParser = require('body-parser')
var mongoClient = require('../source/walkie.talkie.data_context/nosql.client.js')

const app = express(); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//setup connection with mongo
mongoClient.connect()
           .then(mongo => console.log('mongo connected'))
           .catch(error => console.log('mongo connection failure'))

var userApi = require('../source/walkie-talkie.api/user.api.js')
userApi(app)
 
app.listen(process.env.PORT || 4000, function(){ 
    console.log(`Api started on port ${4000}`)
})
