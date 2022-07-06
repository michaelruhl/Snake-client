const {connect} = require('./client')

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function (key) {
  process.stdout.write('.');
    if (key === '\u0003') {
      process.exit();
    }  // your code here
  };

  stdin.on("data", handleUserInput);
  
  return stdin;
};
setupInput()
connect();