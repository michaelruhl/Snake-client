const { connect } = require("./client");
const { setupInput } = require("./input");
console.log(setupInput)
console.log("Connecting ...");


setupInput(connect());