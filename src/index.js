'use strict';

const { initSchedule } = require("./firebase/notificacionSchedule");

module.exports = {

  register(/*{ strapi }*/) { },

  bootstrap(/*{ strapi }*/) {
    initSchedule()
  },
};