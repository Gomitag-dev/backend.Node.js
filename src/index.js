const app = require("./app");
const { connect } = require("./database");

async function main() {
    //DATABASE CONNECTION
    await connect();
    //SERVER CONNECTION
    await app.listen(3000);
    await console.log("serviridor iniciado en puerto 3000:Conected");
}

main();

