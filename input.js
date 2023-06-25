// create a variable to pass the conn object to and keep it global scoped
let connection;

// setup interface to handle user input from stdin
// use the conn parameter to store the conn object returned from the connection function in client.js
const setupInput = (conn) => {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// function to handle user input
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  };
  if (key === "w") {
    connection.write("Move: up")
  };
  if (key === "a") {
    connection.write("Move: left");
  };
  if (key === "s") {
    connection.write("Move: down");
  };
  if (key === "d") {
    connection.write("Move: right");
  };
};

module.exports = {setupInput};