const admin = require('firebase-admin');

const credential = require("./credenciales-fbnoti.json")

admin.initializeApp({
    credential: admin.credential.cert(credential),
    projectId: 'vacation-manager-fbnoti'
    //databaseURL: "https://vacation-manager-firebase"
});

module.exports.admin = admin;