var pm2 = require('pm2');

  pm2.connect(function(err) {
    if (err) throw err;

  setTimeout(function worker() {
    console.log("Restarting app...");
    pm2.restart('app', function() {});
    setTimeout(worker, 1000);
    }, 1000);
  });
