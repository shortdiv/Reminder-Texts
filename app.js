var twilio = require('twilio'),
    cron = require('cron'),
    dotenv = require('dotenv');

dotenv.load();

var accountSid = process.env.ACCOUNT_SID,
    authToken = process.env.AUTH_TOKEN,
    client = twilio(accountSid, authToken),
    cronJob = cron.CronJob

var job = new cronJob('00 56 23 * * *', function(){
  client.messages.create({
    to: '+' + PHONE_NUMBER,
    from: '+' + TWILIO_PHONE_NUMBER,
    body: 'TAKE YO PILL!',
  }, function(err, message) {
    console.log(message);
  });
}, null, true, "America/New_York");

