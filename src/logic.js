const moment = require("moment");
const { sendNotification } = require("./firebase/firebasePushNotification");

var token = 'f1tg5jvcSoO-nF2u9ZjWdy:APA91bGOVFxmd9Ua63lV9xI3pGrfQjqFSmngTxbMMFnXnrQDgp5CoztbyccXauxtfiQO4_s5_W06lQQwSfdo0g3INSdyk6Ze-w_zue9j9wC7MdlNuI01ZAF3Eyxrq30NF7LOD-RtEFvx';

function analizeWorker(worker) {
    console.log(worker);
    //var date = new Date(new Date()-3600*1000*3);
    //var datenow = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay();

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    datenow = yyyy + '-' + mm + '-' + dd;

    console.log('date actually: ' + datenow);
    console.log(moment("20111031", "YYYYMMDD").fromNow());

    for (let i = 0; i < worker.length; i++) {
        var dateWorker = worker[i].start_date.getFullYear() + '-' + worker[i].start_date.getMonth() + '-' + worker[i].start_date.getDay();
        //console.log('start date worker: '+dateWorker);
        //console.log(parseInt(datenow.split('-')[0]));
        console.log(moment(worker[i].start_date.getFullYear() + '' + worker[i].start_date.getMonth() + '' + worker[i].start_date.getDay(), "YYYYMMDD").fromNow());
        var antiguedad = moment(worker[i].start_date.getFullYear() + '' + worker[i].start_date.getMonth() + '' + worker[i].start_date.getDay(), "YYYYMMDD").fromNow().substring(0, 1);
        console.log(antiguedad +' >= 1');

        if (antiguedad >= '1' && antiguedad != 'I') {
            sendNotification(token, "Buenos dias", "hay compañeros con derecho a vacaciones");
            break;
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