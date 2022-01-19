const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Connection has successfully been established.");
  });

  conn.on('connect', () => {
    conn.write("Name: ATO");
  });

  // conn.on('connect', () => {
  //   setInterval(() => {conn.write("Move: up")}, 50);
  // });

  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = connect;