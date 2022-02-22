const moment = require("moment");
const { findUser } = require("./api/users/finduser");
const { sendNotification } = require("./firebase/firebasePushNotification");

function analizeWorker(worker) {
  console.log(worker);

  for (let i = 0; i < worker.length; i++) {


    var today = new Date().toLocaleDateString("en-US");
    var dateWorker = worker[i].start_date.split('-')
    console.log('dateworker: ' + dateWorker)

    var dateseted = dateWorker[1] + '/' + dateWorker[0] + '/' + dateWorker[2];
    console.log('dateseted: ' + dateseted)

    const date1 = new Date(dateseted);
    const date2 = new Date(today);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffTime + " milliseconds");
    console.log(diffDays + " days");
    console.log(diffDays >= 330);

    if (diffDays >= 330) {

      sendNotification("Buenos dias", "hay compañeros con derecho a vacaciones");

    } else {
      console.log("algo paso hina!");
    }

  }

}

module.exports.analizeWorker = analizeWorker;