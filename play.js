// requires functions from client.js and input.js
const {connect} = require("./client");
const {setupInput} = require("./input");

console.log("Connecting ...");
setupInput();
connect();