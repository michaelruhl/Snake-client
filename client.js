const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('connect', (connect) => {console.log("successfully connected to game servy")});
  conn.on('connect', (connect) => {conn.write("Name: MFR")});
  // conn.on('connect', (connect) => {conn.write("Move: up")})
  conn.on("data", (data) => {
    console.log("Server says: ", data);

  });
  return conn;
};

console.log("Connecting ...");
// connect();

module.exports = { connect };