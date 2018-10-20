const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const userSchema = new Schema({
  id: ObjectId,
  firstname: String,
  lastname: String,
  mobile: String,
  deviceId: String,
  email: String, 
  createdate: Date
});

var userModel = mongoose.model('User', userSchema)

function User(){
    this.byDeviceId = byDeviceId
    this.byMobile = byMobile
    this.byEmail = byEmail
}

async function byDeviceId(deviceId){
    var result = await userModel.findOne({ deviceId })
    return result
}

async function byEmail(email){
    var result = await userModel.findOne({ email })
    return result
}

async function byMobile(mobile){
    var result = await userModel.findOne({ mobile })
    return result
}

module.exports = new User()