const admin = require('firebase-admin');
require('dotenv').config()

//const credential = require("./credenciales-fbnoti.json")
const credential = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS)

admin.initializeApp({
    credential: admin.credential.cert(credential),
    projectId: 'vacation-manager-fbnoti'
    //databaseURL: "https://vacation-manager-firebase"
});

module.exports.admin = admin;