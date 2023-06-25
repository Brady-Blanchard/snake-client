const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // when we connect to the server do this
  conn.on("connect", () => {
    console.log("Succesfully connected to game server");
    conn.write("Name: BJB");
  });
  
  // when we recieve data do this
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {connect};