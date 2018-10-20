var OneSignal = require('onesignal-node');  
 
var onesignalClient = new OneSignal.Client({    
    userAuthKey: 'Y2YzY2ZhNGEtOWEzMy00YjQ1LThhZDEtZTA3MzI5YzI5ZGJj',
    app: { appAuthKey: 'OWNlOWQ1MDUtNTAxYS00ZDBkLWE4YzgtOTE2NGNkOThlYWQ4', appId: 'b723a2a6-4f13-458f-b5d2-6d5c6d7963c0' }
 });     
 
function oneSignalClient(){
    this.sendApplicationActivationMessage = sendApplicationActivationMessage
}
 
async function sendApplicationActivationMessage(deviceId){
    var notification = new OneSignal.Notification({    
        contents: {    
            en: "Walkie-talkie push",    
            tr: "Message"    
        },  
        include_player_ids : [ deviceId ]
    });  
    await onesignalClient.sendNotification(notification)
}
 
module.exports = new oneSignalClient()