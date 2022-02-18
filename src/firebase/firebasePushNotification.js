const { admin } = require("./firebaseconfig");

function sendNotification(token, title, body) {

    const message = {
        notification: {
          title: 'push desde web',
          body: 'claro que si'
        },
        token: token
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