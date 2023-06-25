// requires functions from client.js and input.js
const {connect} = require("./client");
const {setupInput} = require("./input");

console.log("Connecting ...");

// allows input.js to interact with the clients connection to the server
setupInput(connect());