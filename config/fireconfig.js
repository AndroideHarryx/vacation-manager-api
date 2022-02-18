/*const { initializeApp, applicationDefault } = require("firebase-admin/app");

const credential = require("./credentials.json")

const admin = require('firebase-admin');

//const cron = require("node-cron");

const app = initializeApp({
    credential: admin.credential.cert(credential),
    databaseURL: "https://vacation-manager-firebase"
});

  
//const { credential } = require("firebase-admin");

   // This registration token comes from the client FCM SDKs.
   /*const registrationToken = 'f1tg5jvcSoO-nF2u9ZjWdy:APA91bGOVFxmd9Ua63lV9xI3pGrfQjqFSmngTxbMMFnXnrQDgp5CoztbyccXauxtfiQO4_s5_W06lQQwSfdo0g3INSdyk6Ze-w_zue9j9wC7MdlNuI01ZAF3Eyxrq30NF7LOD-RtEFvx';
   
     const message = {
       notification: {
         title: 'push desde web',
         body: 'claro que si'
       },
       token: registrationToken
     };
   
     // Send a message to the device corresponding to the provided
     // registration token.
     

     //cron.schedule("* * * * *", () => {
        //se ejecuta cada 1 min
        //todo
        admin.messaging().send(message)
        .then((response) => {
            console.log('Successfully sent message:', response);
        })
        .catch((error) => {
            console.log('Error sending message:', error);
        });
      //});

     module.exports.admin = admin*/