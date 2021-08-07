const os = require("os");

//info about user
const user = os.userInfo();
console.log(user);

//method return the system uptime
console.log(`The system uptime is : ${os.uptime} seconds`);

const currentos = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};
console.log(currentos);
