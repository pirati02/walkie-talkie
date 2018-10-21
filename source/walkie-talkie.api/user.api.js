var onesignal = require('../cloud-messaging/onesignal.client.js')
var user = require('../walkie.talkie.models/user.js') 

module.exports = function(app){
    app.post('/invite-friend', async function(req, res){ 
        var { device_id } = req.body
        var deviceIdResult = await user.byDeviceId(device_id)
        if (deviceIdResult === null) {
            onesignal.sendApplicationActivationMessage(device_id)
            res.json({ success : true, errorMessage : "user does not exists" })
        }
        else 
            res.json({ success : false, errorMessage : "user already exists" })
    })

    app.get('/values', async function(req, res){ 
        res.json({ values : "values" })    
    })
}