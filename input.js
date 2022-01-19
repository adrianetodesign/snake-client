// Stores the active TCP connection object.
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;

};
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  switch (key) {
    case "\u0077" : connection.write("Move: up");
    break;
    case "\u0061" : connection.write("Move: left");
    break;
    case "\u0073" : connection.write("Move: down");
    break;
    case "\u0064" : connection.write("Move: right");
    break;
    case "\u0067" : connection.write("Say: Hello Everyone");
    break;
    case "\u0066" : connection.write("Say: More coffee needed...");
    break;
  }
};

module.exports = setupInput;