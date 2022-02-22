'use strict';

const { sendNotification } = require("./firebase/firebasePushNotification");
const { findCustom } = require('./api/workers-info/findworker');
const { analizeWorker } = require('./logic');

module.exports = {

  register(/*{ strapi }*/) { },

  bootstrap(/*{ strapi }*/) {
    findCustom()
      .then((table) => {

        analizeWorker(table);

      })
      .catch((error) => {
        console.log('no pudimo recuperar pa');
      })
  },
};