//const clientpg = require("pg/lib/native/client");
const { admin } = require("./firebaseconfig");

function consultWorkers() {

}


function sendNotification(title, body) {

  console.log("si");
  const message = {
    notification: {
      title: title,
      body: body
    },
    topic: 'vacation'
  };

  admin.messaging().send(message)
    .then((response) => {
      console.log('Successfully sent message:', response);
    })
    .catch((error) => {
      console.log('Error sending message:', error);
    });

}

module.exports.sendNotification = sendNotification;
module.exports.consultWorkers = consultWorkers;