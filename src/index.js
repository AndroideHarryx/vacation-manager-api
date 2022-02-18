'use strict';

const { sendNotification } = require("./firebase/firebasePushNotification");
const { findCustom } = require('./api/worker/findworker');

module.exports = {
  
  register(/*{ strapi }*/) {},

  bootstrap(/*{ strapi }*/) {
    
    findCustom()
    .then((talbe) =>{
      console.log('ya vino');
    })
    .catch((error) =>{
      console.log('no pudimo recuperar pa');
    })

    var token = 'f1tg5jvcSoO-nF2u9ZjWdy:APA91bGOVFxmd9Ua63lV9xI3pGrfQjqFSmngTxbMMFnXnrQDgp5CoztbyccXauxtfiQO4_s5_W06lQQwSfdo0g3INSdyk6Ze-w_zue9j9wC7MdlNuI01ZAF3Eyxrq30NF7LOD-RtEFvx';
    //sendNotification(token, "titulo Push", "descripcion del push");
  },
};