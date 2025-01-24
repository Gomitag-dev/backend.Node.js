const app = require("./app");
const { connect } = require("./database");

async function main() {
    // CONEXIÓN A LA BASE DE DATOS
    await connect();

    // OBTENCIÓN DEL PUERTO DEL ENTORNO O USO DEL PUERTO 3000 COMO RESERVA
    const PORT = process.env.PORT || 3000;

    // CONEXIÓN DEL SERVIDOR
    await app.listen(PORT);
    console.log(`Servidor corriendo en el puerto ${PORT}: Conectado`);
}

main().catch(err => {
    console.error("Error al iniciar la aplicación:", err);
});
