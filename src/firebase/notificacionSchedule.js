const cron = require("node-cron");
const { findCustom } = require('../api/workers-info/findworker');
const { analizeWorker } = require('../logic');


function initSchedule() {
  
  // At second :00, at minute :00, every hour between 08am and 09am, of every day
  cron.schedule("0 0 8-9 * *", () => {
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