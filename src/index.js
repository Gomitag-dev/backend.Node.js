const app = require("./app");
const { connect } = require("./database");

async function main() {
    //DATABASE CONNECTION
    await connect();
    //SERVER CONNECTION
    await app.listen(3000);
    await console.log("Server is running on port 3000:Conected");
}

main();

