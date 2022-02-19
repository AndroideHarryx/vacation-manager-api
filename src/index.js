'use strict';

const { sendNotification } = require("./firebase/firebasePushNotification");
const { findCustom } = require('./api/worker/findworker');

module.exports = {

  register(/*{ strapi }*/) { },

  bootstrap(/*{ strapi }*/) {
    /*
    [
      {
        id: 1,
        accumulated_days: 1,
        work_mail: 'nada@nada.com',
        start_date: 2022-03-01T03:00:00.000Z,
        work_team: 'a',
        created_at: 2022-02-17T15:57:27.453Z,
        updated_at: 2022-02-17T15:57:29.460Z,
        published_at: 2022-02-17T15:57:29.454Z,
        created_by_id: 1,
        updated_by_id: 1
      }
    ]
    */
    findCustom()
      .then((table) => {
        console.log('ya vino');
        for (let i = 0; i < table.length; i++) {
          console.log(table[i].work_mail);
        }

        var token = 'f1tg5jvcSoO-nF2u9ZjWdy:APA91bGOVFxmd9Ua63lV9xI3pGrfQjqFSmngTxbMMFnXnrQDgp5CoztbyccXauxtfiQO4_s5_W06lQQwSfdo0g3INSdyk6Ze-w_zue9j9wC7MdlNuI01ZAF3Eyxrq30NF7LOD-RtEFvx';
        sendNotification(token, "titulo Push", "descripcion del push");

      })
      .catch((error) => {
        console.log('no pudimo recuperar pa');
      })

  },
};