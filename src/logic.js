const moment = require("moment");
const { findUser } = require("./api/users/finduser");
const { sendNotification } = require("./firebase/firebasePushNotification");

//var token = 'f1tg5jvcSoO-nF2u9ZjWdy:APA91bGOVFxmd9Ua63lV9xI3pGrfQjqFSmngTxbMMFnXnrQDgp5CoztbyccXauxtfiQO4_s5_W06lQQwSfdo0g3INSdyk6Ze-w_zue9j9wC7MdlNuI01ZAF3Eyxrq30NF7LOD-RtEFvx';

function analizeWorker(worker) {
  console.log(worker);

  for (let i = 0; i < worker.length; i++) {
    var dateWorker = worker[i].start_date.getFullYear() + '-' + worker[i].start_date.getMonth() + '-' + worker[i].start_date.getDay();
    var antiguedad = moment(dateWorker, "YYYYMMDD").fromNow().substring(0, 1);

    console.log(antiguedad + ' >= 1');
    if (antiguedad >= '1' && antiguedad != 'I') {

      findUser()
        .then((userTable) => {

          for (let i = 0; i < userTable.length; i++) {

            console.log(
              "username: " + userTable[i].username +
              "\ntoken app: " + userTable[i].token_app
            )
          }
          sendNotification(userTable[i].token_app, "Buenos dias", "hay compañeros con derecho a vacaciones");
          
        })
        .catch((error) => {
          console.log('algo paso con tu user capo' + error)
        })

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