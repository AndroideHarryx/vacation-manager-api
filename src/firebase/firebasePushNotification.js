//const clientpg = require("pg/lib/native/client");
const { admin } = require("./firebaseconfig");
const { Client } = require("pg");

function consultWorkers() {

  const clientpg = new Client({
    user: 'boaibsmriypgak',
    host: 'ec2-54-157-15-228.compute-1.amazonaws.com',
    database: 'd9j00c2v7ah9cu',
    password: '093287858de5eeb54712f700cbb91aa8124d3b202ec0513ef5ed48d9ad7c284b',
    port: 5432,
    ssl: false
  });

  clientpg.connect();


  const query = `
    SELECT *
    FROM worker
  `

  clientpg.query(query, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    for (let row of res.rows) {
      console.log(row);
    }
    clientpg.end();
  });

}


function sendNotification(token, title, body) {

  console.log("si");
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
module.exports.consultWorkers = consultWorkers;