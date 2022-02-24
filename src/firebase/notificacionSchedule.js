const cron = require("node-cron");
const { findCustom } = require('../api/workers-info/findworker');
const { analizeWorker } = require('../logic');


function initSchedule() {

  // At 15 minutes past the hour, every 24 hours, between 08:00 AM and 10:59 AM
  cron.schedule("15 8-10 * * *", () => {
  // cron.schedule("* * * * *", () => {
    console.log("entra en lib cron!")
    findCustom()
      .then((table) => {

        analizeWorker(table);

      })
      .catch((error) => {
        console.log('no pudimo recuperar pa');
      })
  });
}

module.exports.initSchedule = initSchedule;