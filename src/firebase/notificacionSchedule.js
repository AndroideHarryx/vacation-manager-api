const cron = require("node-cron");
const { sendNotification} = require("../firebase/firebasePushNotification");

function initSchedule(token, title, body) {
    cron.schedule("* * * * * *", () => {
        sendNotification(token, title, body);
      });
}

module.exports.initSchedule = initSchedule;