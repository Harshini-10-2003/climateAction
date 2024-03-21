const fs = require('fs');

fs.stat('Users/harsh/GreenLink', (err, stats) => {
  if (err) {
    console.error(err);
  } else {
    console.log(stats);
  }
});
