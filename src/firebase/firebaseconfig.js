const admin = require('firebase-admin');

const credential = require("./credentials.json")

admin.initializeApp({
    credential: admin.credential.cert(credential),
    databaseURL: "https://vacation-manager-firebase"
});

module.exports.admin = admin;