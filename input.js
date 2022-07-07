let connection;


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(key) {
 
  if (key === '\u0003' || key === 'x') {
    process.exit();
  }  // your code here
  if (key === 'w') {
    connection.write("Move: up");
  };
  if (key === 'a') {
    connection.write("Move: left");
  };
  if (key === 'd') {
    connection.write("Move: right");
  };
  if (key === 's') {
    connection.write("Move: down");
  };
  if (key === 'y') {
    connection.write("Say: Gota go sanik fast");
  }

};

module.exports = { setupInput };