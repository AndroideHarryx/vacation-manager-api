const moment = require("moment");
const { findUser } = require("./api/users/finduser");
const { sendNotification } = require("./firebase/firebasePushNotification");

function analizeWorker(worker) {
  console.log(worker);

  for (let i = 0; i < worker.length; i++) {
    var dateWorker = worker[i].start_date.getFullYear() + '-' + worker[i].start_date.getMonth() + '-' + worker[i].start_date.getDay();
    var antiguedad = moment(dateWorker, "YYYYMMDD").fromNow().substring(0, 1);

    console.log(antiguedad + ' >= 1');
    if (antiguedad >= '1' && antiguedad != 'I') {
      

      sendNotification(userTable[i].token_app, "Buenos dias", "hay compañeros con derecho a vacaciones");

    } else {
      console.log("algo paso hina!");
    }
  }

  //sendNotification(token, "titulo Push", "descripcion del push");

  /* worker table model...
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


}

module.exports.analizeWorker = analizeWorker;